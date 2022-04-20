<script>
import axios from "axios";
import image from "../assets/tv.png";

export default {
  data: function () {
    return {
      message: "Welcome to Television Talk!",
      image: image,
      shows: [],
    };
  },
  created: function () {
    axios.get("http://localhost:3000/shows.json").then((response) => {
      console.log("shows", response.data);
      this.shows = response.data;
    });
  },
  methods: {},
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <img :src="image" />
  </div>
</template>

<style></style>
