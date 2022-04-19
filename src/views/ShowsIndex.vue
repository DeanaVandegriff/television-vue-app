<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "",
      shows: [],
    };
  },
  created: function () {
    axios.get("http://localhost:3000/shows.json").then((response) => {
      console.log("shows", response.data);
      this.shows = response.data;
    });
  },
};
</script>

<template>
  <h1>Top Television!</h1>
  <div v-for="show in shows" v-bind:key="show.id">
    <h2>{{ show.title }}</h2>
    <a v-bind:href="`/shows/${show.id}`">More Info!</a>
  </div>
</template>

<style></style>
