<template>
  <div>
      <ul>
          <li v-for="task in project.task" :key="task.id" v-text="task.body"></li>
      </ul>
      <input type="text" v-model="newTask" @blur="save" />
  </div>
</template>

<script>
export default {
    props:{
        dataProject: {}
    },
    data(){
        return {
            project: this.dataProject,
            newTask: ''
        }
    },
    created(){
        window.Echo.private('tasks.' + this.project.id)
            .listen('TaskCreated', ({task}) => {
                this.addTask(task);
            });
    },
    methods: {
        save(){
            axios.post(`/api/project/${this.project.id}/task`, {body: this.newTask})
                .then(response => response.data)
                .then(this.addTask);
        },
        addTask(task){
            this.project.task.push(task);
            this.newTask = '';
        }
    }
}
</script>

<style>

</style>