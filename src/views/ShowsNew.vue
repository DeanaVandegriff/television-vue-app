<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newShowsParams: { plot: "" },
    };
  },
  methods: {
    createShow: function () {
      console.log("Enter a new show!");
      axios.post("http://localhost:3000/shows.json", this.newShowsParams).then((response) => {
        console.log("success", response.data);
        this.shows.push(response.data);
      });
    },
  },
};
</script>
<template>
  <div class="shows-new">
    <form v-on:submit.prevent="createShow()">
      <h1>Enter a show!!</h1>
      <div>
        title:
        <input type="text" v-model="newShowsParams.title" />
      </div>
      <br />
      <div>
        year:
        <input type="text" v-model="newShowsParams.year" />
      </div>
      <br />
      <div>
        plot:
        <input type="text" v-model="newShowsParams.plot" />
      </div>
      <br />
      <input type="submit" value="enter" />
    </form>
  </div>
</template>
