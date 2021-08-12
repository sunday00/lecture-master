<template>
  <section class="experiences">
    <h2>Experience in {{ destination.name }}</h2>
    <div class="cards">
      <ExperienceCard 
        v-for="experience in destination.experiences" 
        :key="experience.slug"
        :experience="experience" 

      />
    </div>
  </section>
</template>

<script>
import ExperienceCard from '@/components/ExperienceCard.vue'

export default {
  components: {
    ExperienceCard,
  },
  props: {
    destination:{
      type: Object,
      default: {}
    }
  }
}
</script>