<template>
  <section class="experiences">
    <h2>Experience in {{ destination.name }}</h2>
    <div class="cards">
      <router-link 
        v-for="experience in destination.experiences" 
        :key="experience.slug"
        :to="{name: 'experience.show', params: {experienceSlug: experience.slug}}"
      >
        <ExperienceCard :experience="experience" />
      </router-link>
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