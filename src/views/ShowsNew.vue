<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newShowParams: {},
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
  <h1>Enter a show!!</h1>
  <div class="shows-update">
    <form v-on:submit.prevent="updateShow()">
      <div>
        title:
        <input type="text" v-model="newShowParams.title" />
      </div>
      <br />
      <div>
        year:
        <input type="text" v-model="newShowParams.year" />
      </div>
      <br />
      <div>
        plot:
        <input type="text" v-model="newShowParams.plot" />
      </div>
      <br />
      <input type="submit" value="enter" />
    </form>
  </div>
</template>
