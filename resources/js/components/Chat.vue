<template>
  <div>
      <ul>
          <li v-for="chat in chats" :key="chat.id" v-text="chat.message"></li>
      </ul>
      <input type="text" v-model="newMessage" @keydown="send" />
  </div>
</template>

<script>
export default {
    props:{
        dataChatroom: {}
    },
    data(){
        return {
            chats: this.dataChatroom,
            chatRoomId: location.toString().split("/").pop(),
            newMessage: ''
        }
    },
    created(){
        window.Echo.private('chat.' + this.chatRoomId)
            .listen('Chat', ( responce ) => {
                console.log(responce);
                // this.addTask(task);
            });
    },
    methods: {
        send(){
            // axios.post(`/api/project/${this.project.id}/task`, {body: this.newTask})
            //     .then(response => response.data)
            //     .then(this.addTask);
        },
        addTask(task){
            // this.project.task.push(task);
            // this.newTask = '';
        }
    }
}
</script>

<style>

</style>