export default function Model({isVisbile , errorMessage=null}){
    if(isVisbile){
    return(<>
        <div id="model">
            <div id="model-contant" style={{color:errorMessage ? "red" : "green"}}>
                <h1>{errorMessage != null ? errorMessage:"the form has been successfully" }</h1>
            </div>
        </div>
    </>)
    }else{
        return<> </>
    }
}