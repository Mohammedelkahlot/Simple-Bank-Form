import Model from "./Model"
import {  useState } from "react";
// import PhonNumber from "./PhonNumber"
// import Age from "./Age"
import MyComponant from "./MyComponant";
import { inputContext } from "./Context/FormInputContext";
function Form({title}){

    const [errorMessage , seterrorMessage] = useState(null)
    const[showModle , setShowModel] = useState(false)
    const[inputForm,setFormInput] = useState({
        name:"",
        phonNuber:"",
        age:"",
        isEmployee : false,
        salaryRang:"",
    })
    
    function handlForm(event){
        event.preventDefault()
        seterrorMessage(null)
        const{age,phonNuber} = inputForm;
        if(age <18 || age > 100){
            seterrorMessage("the age is not allowed")
        }else if(phonNuber.length < 10 || phonNuber.length > 12){
            seterrorMessage("the phon Number is not allowed")
        }
        setShowModel(true)
    }
   
    const isDisabled = inputForm.name === "" || inputForm.age === "" || inputForm.phonNuber ===""
    // let btnClass = ""
    // if(isDisabled){
    //     btnClass="disabled"
    // }else{
    //     btnClass = ""
    // }
     function handelDevClike(){
        // console.log("is cliked :)")
        if(showModle){
            setShowModel(false);
        }
    }

    // upupt handler

    function handelPhonNumberInputChange(value){
        setFormInput({...inputForm,phonNuber:value})
    }

    function handelNameInputChange(value){
        setFormInput({...inputForm,name:value})
    }
    function handelageInputChange (value){
        setFormInput({...inputForm,age:value})
    }

    return(<>
        <div className="flex" style={{flexDirection:"column"}} onClick={handelDevClike}>  
        <h1 >{title}</h1>

            <form id="loanForm" className="flex" style={{flexDirection:"column"}} >
                <h1>Reqsteing a loan</h1>
                <hr></hr>
                <inputContext.Provider value={{ value:inputForm.name, handleChange:handelNameInputChange,labelTitel:"Name"}}>

                    <MyComponant />
                </inputContext.Provider>
                
                <inputContext.Provider value={{value:inputForm.phonNuber,handleChange:handelPhonNumberInputChange,labelTitel:"Phone Number"}}>
                    <MyComponant type="number"/>
                </inputContext.Provider>
                    
                <inputContext.Provider value={{value:inputForm.age,handleChange:handelageInputChange,labelTitel:"Age"}}>
                    <MyComponant type="number"/>
                </inputContext.Provider>
                
                <label>Are you an employee</label>
                <input type="checkbox"
                    checked={inputForm.isEmployee}
                    onChange={(event)=>{
                        setFormInput({...inputForm,isEmployee:event.target.checked})
                    }}/>

                <label>Salary: </label>
                <select value={inputForm.salaryRang} onChange={(event)=>{
                    setFormInput({...inputForm,salaryRang: event.target.value})
                }}>
                    <option>choes your salary Rang</option>
                    <option>less than 500$ </option>
                    <option>between 500$ and 2000$ </option>
                    <option>above 2000$ </option>

                </select>
                
                <button 
                className={isDisabled ? "disabled" : ""}
                disabled={isDisabled} 
                onClick={handlForm}>Submit </button>

            </form>

            <Model isVisbile={showModle} errorMessage={errorMessage}/>
        </div>
    </>)
}
export default Form;