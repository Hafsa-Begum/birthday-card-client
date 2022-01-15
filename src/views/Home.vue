<template>
  <v-container>
    <div class="row">
      <div class="col" v-for="card in cards" :key="card._id">
        <router-link
          class="link"
          :to="{ name: 'card', params: { id: card._id } }"
        >
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
                <span style="color: gray">Birthday:</span>
                {{ date(card.birthday) }}
              </h3>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </v-container>
</template>

<script>
import moment from "moment";
export default {
  name: "Home",
  data() {
    return {
      cards: [],
      moment: moment,
    };
  },
  methods: {
    date(x) {
      const dt = this.moment(x).locale("en").format("L");
      return dt;
    },
    async fetchCards() {
      const res = await fetch("http://localhost:5005/api/cards");
      const data = await res.json();
      return data;
    },
  },
  async created() {
    this.cards = await this.fetchCards();
    // this.cards = await API.getAllCard();
  },
};
</script>

<style>
.container {
  max-width: 950px;
  margin: 0 auto;
}
.row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}
.col {
  background-color: #fff;
  margin: 5px;
  padding: 5px auto;
  border-radius: 20px;
}
.link {
  text-decoration: none;
}
.card {
  width: 100%;
  padding: 5px auto;
  color: #000;
}
.card-header {
  display: flex;
  justify-content: space-between;
  padding: 20px 20px 10px 20px;
  color: #f539adee;
}
.card-coins {
  font-size: 20px;
  font-weight: 700;
}
.card-coins .fas {
  margin-right: 10px;
}
.card-img {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
.card-img img {
  height: 250px;
  border-radius: 50%;
}
.card-text {
  padding: 20px;
}
</style>