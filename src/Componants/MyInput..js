import { useContext } from "react";
import{inputContext} from './Context/FormInputContext'
const MyInput = () => {
    const myContext = useContext(inputContext)

    return (
        <>
          <label>{myContext.labelTitel}</label>
                <input
                    value={myContext.value}
                    onChange={(event)=>{
                        myContext.handleChange(event.target.value)
                    }}/> 
        </>
    );
}

export default MyInput;