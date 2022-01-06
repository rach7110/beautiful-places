<template>
  <div id="app">
    <!-- TODO: banner -->
    <div class="block">
      <section class="hero is-primary">
        <div class="hero-body">
          <p class="title">Beautiful Places</p>
          <p class="subtitle"></p>
        </div>
      </section>
    </div>

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

export default {
  name: "PlacesList",
  components: {
    PlacesCard,
  },
  data() {
    return {
      columns: 3,
      places: [
        {
          id: 1,
          image: "abc.jpg",
          title: "A very neat place",
          user: "Deidre Midway",
          userHandle: "@deidremidway",
          post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. ",
          postDate: "11:09 PM - 1 Jan 2016",
          likes: 3,
          dislikes: 2,
        },
        {
          id: 2,
          image: "abc.jpg",
          title: "A very neat place",
          user: "Anne Midway",
          userHandle: "@deidremidway",
          post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. ",
          postDate: "11:09 PM - 1 Jan 2016",
          likes: 3,
          dislikes: 2,
        },
        {
          id: 3,
          image: "abc.jpg",
          title: "A very neat place",
          user: "Jaycee Midway",
          userHandle: "@deidremidway",
          post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. ",
          postDate: "11:09 PM - 1 Jan 2016",
          likes: 3,
          dislikes: 2,
        },
        {
          id: 4,
          image: "abc.jpg",
          title: "A very neat place",
          user: "Darla Midway",
          userHandle: "@deidremidway",
          post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. ",
          postDate: "11:09 PM - 1 Jan 2016",
          likes: 3,
          dislikes: 2,
        },
      ],
      showNewPlaceForm: false,
      newPlace: {},
    };
  },
  methods: {
    currentPlace(rowIndex, columnIndex) {
      const index = this.getIndex(rowIndex, columnIndex);

      return this.places[index];
    },
    incrementPlaceLikes(index) {
      this.places[index].likes++;
    },
    decrementPlaceLikes(index) {
      this.places[index].dislikes++;
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
};
</script>
