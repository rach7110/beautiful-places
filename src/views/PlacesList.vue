<template>
  <div>
    <nav class="level is-mobile">
      <div class="level-right">
        <div class="level-item">
          <button class="button" @click="showNewPlaceForm = true">
            Add Place
          </button>
        </div>
      </div>
    </nav>

    <div v-if="showNewPlaceForm" class="block">
      <form @submit.prevent="submitPlace">
        <div class="field">
          <label class="label" for="title">Title</label>
          <div class="control">
            <input
              v-model="newPlace.title"
              class="input"
              type="text"
              id="title"
            />
          </div>
        </div>

        <div class="field">
          <label class="label" for="post">Description</label>
          <div class="control">
            <textarea
              v-model="newPlace.post"
              class="textarea"
              id="post"
            ></textarea>
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <input class="button" type="submit" value="Submit" />
          </div>
          <div class="control">
            <button class="button" @click="showNewPlaceForm = false">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>

    <div class="columns">
      <div v-for="(column, columnIndex) in columns" :key="columnIndex">
        <div
          v-for="(row, rowIndex) in rows"
          :key="`${columnIndex}-${rowIndex}`"
        >
          <div class="column">
            <div class="block">
              <PlacesCard
                v-if="currentPlace(rowIndex, columnIndex)"
                :place="currentPlace(rowIndex, columnIndex)"
                @like-place="incrementPlaceLikes"
                @dislike-place="decrementPlaceLikes"
              ></PlacesCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PlacesCard from "@/components/PlacesCard.vue";
import axios from "axios";

export default {
  name: "PlacesList",
  components: {
    PlacesCard,
  },
  data() {
    return {
      places: [],
      columns: 3,
      showNewPlaceForm: false,
      newPlace: {},
    };
  },
  methods: {
    async getPlaces() {
      try {
        const response = await axios.get(
          "https://my-json-server.typicode.com/rach7110/beautiful-places/places"
        );
        this.places = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    currentPlace(rowIndex, columnIndex) {
      const index = this.getIndex(rowIndex, columnIndex);

      return this.places[index];
    },
    incrementPlaceLikes(id) {
      this.places.find((place) => place.id === id).likes++;
    },
    decrementPlaceLikes(id) {
      this.places.find((place) => place.id === id).dislikes++;
    },
    getIndex(rowIndex, columnIndex) {
      return 3 * rowIndex + columnIndex;
    },
    submitPlace() {
      this.newPlace.likes = 0;
      this.newPlace.dislikes = 0;
      this.newPlace.user = "Someone logged in";
      this.newPlace.postDate = Date.now();

      this.places.push(this.newPlace);
      this.newPlace = {};
      this.showNewPlaceForm = false;
    },
  },
  computed: {
    rows() {
      return Math.ceil(this.places.length / this.columns);
    },
  },
  created() {
    this.getPlaces();
  },
};
</script>
