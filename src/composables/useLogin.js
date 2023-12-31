const { ref } = require("vue")
import { auth } from '../firebase/config'

let error=ref(null);
let signIn=async(email,password)=>{
    try{
        let res = await auth.signInWithEmailAndPassword(email,password)
        if(!res){
            throw new Error('Could not connect to server')
        }
        return res
    }
    catch(err){
        error.value=err.message
        console.log(error.value)
    }
}

let useLogin= ()=>{

    return { error,signIn}
}

export default useLogin