<script>
import axios from "axios";

export default {
  data: function () {
    return {
      show: {},
    };
  },
  created: function () {
    axios.get("http://localhost:3000/shows/" + this.$route.params.id + ".json").then((response) => {
      console.log(response.data);
      this.show = response.data;
    });
  },
};
</script>

<template>
  <h1>TV Shows!</h1>
  <h2>{{ show.title }}</h2>
  <p>{{ show.year }}</p>
  <p>{{ show.plot }}</p>
  <a href="/shows">Back to all Shows</a>
</template>
