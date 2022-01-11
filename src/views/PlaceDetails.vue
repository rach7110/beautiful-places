<template>
  <div>
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
  data() {
    return {
      place: null,
    };
  },
  methods: {
    async getPlace() {
      const place = await PlaceService.getPlace(1); // TODO: get id dynamically.

      this.place = place.data; //TODO: import cloneDeep from Lodash.
    },
  },
  created() {
    //   get request for place (by id) and set local data.
    this.getPlace();
  },
};
</script>

<style></style>
