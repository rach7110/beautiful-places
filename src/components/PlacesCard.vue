<template>
  <router-link :to="{ name: 'PlaceDetails', params: { id: place.id } }">
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          src="https://bulma.io/images/placeholders/1280x960.png"
          alt="Placeholder image"
        />
      </figure>
    </div>

    <div class="card-content">
      <div class="content">
        <p class="title is-4">{{ place.title }}</p>
      </div>
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img
              src="https://bulma.io/images/placeholders/96x96.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-5">{{ place.user }}</p>
          <p class="subtitle is-6">{{ place.userHandle }}</p>
        </div>
      </div>

      <div class="content">
        {{ place.post }}
        <a>@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
        <br />
        <time>{{ place.postDate }}</time>
      </div>
    </div>

    <!-- Like/Dislike  -->
    <nav class="level is-mobile">
      <div class="level-left">
        <a @click="$emit('likePlace', place.id)" class="level-item">
          <span class="icon is-small">
            <i class="fas fa-thumbs-up"></i>
          </span>
        </a>
        <p class="level-item">
          {{ place.likes }}
        </p>

        <a @click="$emit('dislikePlace', place.id)" class="level-item">
          <span class="icon is-small">
            <i class="fas fa-thumbs-down"></i>
          </span>
        </a>
        <p class="level-item">
          {{ place.dislikes }}
        </p>
      </div>
    </nav>
  </router-link>
</template>

<script>
export default {
  name: "PlacesCard",
  data() {
    return {};
  },
  props: {
    place: {
      type: Object,
      required: true,
    },
  },
  emits: ["likePlace", "dislikePlace"],
};
</script>
