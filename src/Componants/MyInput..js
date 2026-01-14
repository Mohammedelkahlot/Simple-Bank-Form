import { useContext } from "react";
import{inputContext} from './Context/FormInputContext'
const MyInput = () => {
    const myContext = useContext(inputContext)

    return (
        <>
          <label>{inputContext.labelTitel}</label>
                <input
                    value={inputContext.value}
                    onChange={(event)=>{
                        myContext.handleChange(event.target.value)
                    }}/> 
        </>
    );
}

export default MyInput;