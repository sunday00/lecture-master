<template>
  <div>
      <ul>
          <li v-for="chat in chats" :key="chat.id" class="my-4 rounded" :class="chat.user.id != user ? 'bg-warning float-left' : 'bg-success float-right'">
            <img :src="chat.user.id > user ? 'https://source.unsplash.com/72QxUqXuXz8/50x50' : 'https://source.unsplash.com/AWbhfbkRC74/50x50'" class="rounded-circle float-left"
                v-show="chat.user.id != user"
            >
            <p class="msg p-1 mx-2" :class="chat.user.id != user ? 'text-left' : 'text-right'">{{chat.message}}</p>
          </li>
          <li v-show="activePeer"><p>someone is now start talk to you</p></li>
      </ul>
      <form action="#">
          <div class="form-group">
            <input type="text" v-model="newMessage" @keydown.enter.prevent="send" class="position-fixed form-control fixed-bottom mb-2 mx-auto" @keydown="tapParticipants" />
          </div>
      </form>
  </div>
</template>

<script>
export default {
    props:{
        dataChatroom: {},
        dataUser: {},
    },
    data(){
        return {
            chats: this.dataChatroom,
            user: this.dataUser,
            chatRoomId: location.toString().split("/").pop(),
            newMessage: '',
            activePeer: false,
            typinging: false,
        }
    },
    computed: {
        channel(){
            return window.Echo.join('chat.' + this.chatRoomId);
        }
    },
    created(){
        this.channel
            .joining(user => {
                console.log(`${user.name} is joining`);
            })
            .here(users => {
                users.forEach(user => { console.log(`${user.name} is here`); });
            })
            .leaving(user => {
                console.log(`${user.name} is leaving`);
            })
            .listen('Chat', ( {chat} ) => {
                this.addMsg(chat);
            }).listenForWhisper('typing', e => {
                console.log(e.name);
                this.activePeer = e;
                if( this.typinging ) clearTimeout( this.typinging );
                this.typinging = setTimeout(()=>{
                    this.activePeer = false;
                }, 2000);
            });
        window.scrollTo(0,document.body.scrollHeight);
    },
    methods: {

        tapParticipants(){
            window.Echo.private('chat.' + this.chatRoomId)
                .whisper('typing', { name: "FOO BAR" });
        },
        send(){
            axios.post(`/api/chat/${this.chatRoomId}`, {message: this.newMessage})
                .then(response => response.data)
                .then(this.addMsg);
        },
        addMsg(chat){
            this.chats.push(chat);
            this.newMessage = '';
            window.scrollTo(0,document.body.scrollHeight);
        },
        
    }
}
</script>

<style>

</style>