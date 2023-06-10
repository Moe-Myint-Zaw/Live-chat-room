import { auth } from "@/firebase/config"
import { ref } from "vue"
let error=ref(null)
let useLogout=async()=>{
    try{
        await auth.signOut()
        console.log("user logged out")
    }
    catch(err){
        error.value=err.message
        console.log(error.value)
    }
}

export default useLogout;