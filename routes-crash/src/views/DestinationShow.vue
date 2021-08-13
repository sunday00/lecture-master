<template>
  <section v-if="destination">
    <h2>{{ destination.name }}</h2>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      <p>{{ destination.description }}</p>
    </div>
  </section>
  <DestinationExperience v-if="destination" :destination="destination" />
  <router-view :key="$route.path"></router-view>
</template>

<script>
import DestinationExperience from '@/components/DestinationExperience.vue'

export default {
  components:{
    DestinationExperience,
  },
  props:{
    id: {
      type: Number,
      required: true
    }
  },
  data(){
    return {
      destination: null,
    }
  },
  computed: {
    destinationId(){
      return parseInt(this.$route.params.id)
    },
    // destination(){
    //   return sourceData.destinations.find(destination => destination.id === this.destinationId)
    // }
  },
  methods: {
    async initData(){
      await fetch('https://cdn.jsdelivr.net/gh/sunday00/placeholders@main/myjson.json').then(res => {
        return res.json();
      }).then( json => {
        // this.destination = json.traverDestination.find(td => td.slug === this.$route.params.slug);
        this.destination = json.traverDestination.find(td => td.id === this.id);
      });
    }
  },
  async created(){
    this.initData();
    // this.$watch( () => this.$route.params, this.initData );
  }
}
</script>