function PhonNumber({value , handelChange,cuurenInput}){
    return(
        <>
        <label>Phon Numder</label>
        <input type="number" 
            value={value}
            onChange={(event)=>{
            handelChange(event.target.value)
            }}/>
        
        </>
    )
}
export default PhonNumber;