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
    updateRecipe: function () {
      console.log("Update a show!");
      axios
        .patch("http://localhost:3000/shows/" + this.$route.params.id + ".json", this.show)
        .then((response) => {
          console.log("Success", response.data);
          this.$router.push("/shows");
        })
        .catch((error) => console.log(error.response)); //error handling -> needs happy/sad paths from rails!!!
    },
  },
};
</script>

<template>
  <form v-on:submit.prevent="updateShow()">
    <h1>This is the place to update a show!</h1>

    <div>
      <div class="form-group">
        title:
        <input type="text" v-model="show.title" />
      </div>
      <div class="form-group">
        year:
        <input type="text" v-model="show.year" />
      </div>
      <div class="form-group">
        plot:
        <input type="text" v-model="show.plot" />
      </div>
    </div>
    <input type="submit" value="update" />
  </form>

  <a href="/shows">Back to all shows</a>
</template>
