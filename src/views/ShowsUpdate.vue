<script>
import axios from "axios";

export default {
  data: function () {
    return {
      show: {},
      currentShow: {},
    };
  },
  methods: {
    updateShows: function (show) {
      var editShowParams = show;
      axios.patch("http://localhost:3000/shows/" + show.id + ".json", editShowParams).then((response) => {
        console.log("Success!", response.data);
      });
    },
  },
};
</script>
<!-- <template>
  <button id="info-button" @click="showShow(currentShow)">click for more info</button>
  <dialog id="show-details">
    <form method="dialog">
      <h1>Show Info</h1>
      <p id="show-id">name:</p>
      <input type="text" v-model="currentShow.name" />
      <p id="show-id">year:</p>
      <input type="text" v-model="currentShow.year" />
      <p id="show-id">price:</p>
      <input type="text" v-model="currentShow.plot" />
      <br />
      <button @click="updateShow(currentShow)">Update</button>
    </form>
  </dialog>
</template> -->
