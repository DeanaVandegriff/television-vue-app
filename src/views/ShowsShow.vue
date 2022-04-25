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
  methods: {
    updateShows: function (show) {
      var editShowParams = show;
      axios.patch("http://localhost:3000/shows/" + show.id + ".json", editShowParams).then((response) => {
        console.log("Success!", response.data);
      });
    },
    destroyShow: function (show) {
      axios.delete("http://localhost:3000/shows/" + show.id).then((response) => {
        console.log("Show Removed!", response.data);
        var index = this.shows.indexOf(show);
        this.shows.splice(index, 1);
      });
    },
  },
};
</script>

<template>
  <h1>TV Shows!</h1>
  <h2>{{ show.title }}</h2>
  <p>{{ show.year }}</p>
  <p>{{ show.plot }}</p>
  <p>Show ID: {{ show.id }}</p>
  <br />
  <br />
  <div>
    <a href="/shows">Back to all Shows</a>
  </div>
</template>
