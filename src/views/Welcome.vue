<template>
  <div class="welcome container">
    <div v-if="showLoginForm">
      <Login @enterChatRoom="enterChatRoom"></Login>
      <p>not a member? <span @click="showLoginForm=!showLoginForm">create account?</span></p>
    </div>
    <div v-else>
      <Signup @enterChatRoom="enterChatRoom"></Signup>
      <p>Already member? <span @click="showLoginForm=!showLoginForm">Login Account?</span></p>
    </div>

    
  </div>
</template>

<script>
import { ref } from 'vue'
import Login from '../components/Login'
import Signup from '../components/Signup'
import { useRouter } from 'vue-router'
export default {
  components: {
    Login, Signup 
    },
    setup(){
      let showLoginForm=ref(true);
      let router=useRouter();
      let enterChatRoom=()=>{
        router.push({name:'ChatRoom'})
      }

      return {showLoginForm,enterChatRoom};
    }

}
</script>

<style>
     .welcome {
        text-align: center;
        padding: 20px 0;
      }
  /* form styles */
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  /* .welcome label {
    display: block;
    margin: 20px 0 10px;
  } */
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  .welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  .welcome button {
    margin: 20px auto;
  }
</style>