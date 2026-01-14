import MyInput from "./MyInput.";
const MyComponant = ({value, handleChange , inputName}) => {

    return (
        <>
            <MyInput 
                inputName = {inputName}  
                handleChange = {handleChange}
                value={value}
            />
        </>
    );
}

export default MyComponant;
