<template>
  <div v-if="place">
    <h1>{{ place.title }}</h1>
    <p>{{ place.user }}</p>
    <p>{{ place.userHandle }}</p>
    <p>{{ place.post }}</p>
  </div>
</template>

<script>
import PlaceService from "@/services/PlaceService.js";

export default {
  name: "EventDetails",
  props: ["id"],
  data() {
    return {
      place: null,
    };
  },
  methods: {
    async getPlace() {
      try {
        const place = await PlaceService.getPlace(this.id);

        this.place = place.data;
      } catch (error) {
        console.log("Could not locate place with that id.");
      }
    },
  },
  created() {
    this.getPlace();
  },
};
</script>

<style></style>
