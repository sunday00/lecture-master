<template>
  <div>
      <ul>
          <li v-for="task in tasks" :key="task" v-text="task"></li>
      </ul>
      <input type="text" v-model="newTask" @blur="addTask" />
  </div>
</template>

<script>
export default {
    data(){
        return {
            tasks: [],
            newTask: ''
        }
    },
    created(){
        axios.get('/task/list').then(response => ( this.tasks = response.data ));
        window.Echo.channel('tasks').listen('TaskCreated', ({task}) => {
            this.tasks.push(task.body);
        });
    },
    methods: {
        addTask(){
            axios.post('/task', { body: this.newTask });
            this.tasks.push(this.newTask);
            this.newTask = '';
        }
    }
}
</script>

<style>

</style>