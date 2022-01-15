<template>
  <div>
    <h1 style="text-align: center">Upcoming Birthdays</h1>
    <div class="container">
      <div class="card-container" v-for="card in cards" :key="card._id">
        <div class="card">
          <div class="card-img">
            <img
              :src="`http://localhost:5005/sorted/birthday/${card.image}`"
              alt=""
            />
          </div>
          <h3>
            <span>{{ card.name }}</span> <br />
            <!-- <span>{{ moment(card.birthday).locale("en").format("LL") }}</span> -->
            <span>{{ date(card.birthday) }}</span>
          </h3>
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
    // this.cards = await API.getAllCard();
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
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px;
  padding: 10px;
}
.card-img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid white;
}
</style>