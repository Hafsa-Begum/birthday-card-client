<template>
  <div class="container">
    <div class="col">
      <div class="card">
        <div class="card-header">
          <div class="card-logo">
            <h3>Lehoa</h3>
          </div>
          <div class="card-coins">
            <i class="fas fa-coins"></i>
            <span style="color: #000">147</span>
          </div>
        </div>
        <div class="card-img">
          <img :src="`http://localhost:5005/${card.image}`" alt="" />
        </div>
        <div class="card-text">
          <h3><span style="color: gray">Name:</span> {{ card.name }}</h3>
          <h3>
            <span style="color: gray">Birthday:</span> {{ date(card.birthday) }}
          </h3>
        </div>
      </div>
    </div>
    <!-- share the card -->
    <div class="share-card" v-if="webShareApiSupported" title="Share Card">
      <i class="fas fa-share-square" @click="shareViaWebShare"></i>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import moment from "moment";
export default {
  name: "Card",
  data() {
    return {
      card: {},
      moment: moment,
    };
  },
  computed: {
    webShareApiSupported() {
      return navigator.share;
    },
  },
  methods: {
    date(x) {
      const dt = this.moment(x).locale("en").format("LL");
      return dt;
    },
    async fetchCard(id) {
      const res = await fetch(`http://localhost:5005/api/cards/${id}`);
      const data = await res.json();
      console.log(data);
      return data;
    },
    shareViaWebShare() {
      navigator.share({
        url: ``,
      });
    },
  },
  async created() {
    const route = useRoute();
    this.card = await this.fetchCard(route.params.id);
  },
};
</script>

<style scoped>
.container {
  height: 100vh;
}
.col {
  max-width: 30%;
  margin: 20px auto;
  text-align: center;
}
.share-card {
  text-align: center;
  height: 20px;
}
.share-card .fas {
  font-size: 30px;
  background-color: #000;
  color: #f539adee;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
}
</style>

