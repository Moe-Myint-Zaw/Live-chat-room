<template>
  <div class="container">
  <Nav></Nav>
  <ChatWindow></ChatWindow>
  <ChatForm></ChatForm>
  
  </div>
</template>

<script>
import { watch } from 'vue'
import getUser from '@/composables/getUser'
import Nav from '../components/Nav'
import { useRouter } from 'vue-router'
import ChatForm from '../components/ChatForm.vue'
import ChatWindow from '../components/ChatWindow.vue'
export default {
  components: { Nav,ChatForm, ChatWindow },
  setup(){
    let { user }=getUser()
    let router = useRouter()
    watch(user,()=>{
      if(!user.value){
        router.push('/')
      }
    })

  }

}
</script>

<style>

</style>