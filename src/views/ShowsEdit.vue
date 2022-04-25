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
    updateShow: function () {
      console.log("Update a show!");
      axios.patch("http://localhost:3000/shows/" + this.$route.params.id + ".json", this.show).then((response) => {
        console.log("Success!", response.data);
        this.$router.push("/shows");
      });
    },
  },
};
</script>
<template>
  <form v-on:submit.prevent="updateShow()">
    <h1>Update Show Info!</h1>
    <div>
      title:
      <input type="text" v-model="show.title" />
    </div>
    <div>
      year:
      <input type="text" v-model="show.year" />
    </div>
    <div>
      plot:
      <input type="text" v-model="show.plot" />
    </div>
    <div>
      <input type="submit" value="update" />
    </div>
  </form>
</template>
