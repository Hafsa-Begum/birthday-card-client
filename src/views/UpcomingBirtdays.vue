<template>
  <div>
    <h1 style="text-align: center">Upcoming Birthdays</h1>
    <div class="container">
      <div class="card-container" v-for="card in cards" :key="card._id">
        <div class="card">
          <div class="card-img">
            <img :src="`http://localhost:5005/${card.image}`" alt="" />
          </div>
          <div class="text">
            <h3>
              <span>{{ card.name }}</span> <br />
              <span>{{ date(card.birthday) }}</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "UpcomingBirthdays",
  data() {
    return {
      cards: [],
      moment: moment,
    };
  },
  methods: {
    date(x) {
      const dt = this.moment(x).locale("en").format("LL").split(",")[0];
      return dt;
    },
    async fetchSortedCard() {
      const res = await fetch(
        "http://localhost:5005/api/cards/sorted/birthday"
      );
      const data = await res.json();
      return data;
    },
  },
  async created() {
    this.cards = await this.fetchSortedCard();
  },
};
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid gray;
  padding: 30px;
  border-radius: 5px;
}
.card-container {
  width: 100%;
}
.card {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 10px;
  padding: 10px;
}
.card-container {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
}
.card-img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid white;
  background-color: #fff;
  margin: auto;
}
.card-img img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
</style>