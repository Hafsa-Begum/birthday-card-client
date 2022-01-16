<template>
  <div>
    <h1 style="text-align: center">Upcoming Birthdays</h1>
    <div class="container">
      <div class="card-container" v-for="card in cards" :key="card._id">
        <div class="card">
          <div class="card-img">
            <img :src="`http://localhost:5005/${card.image}`" alt="" />
          </div>
          <div class="card-text">
            <h3>
              <span>{{ card.name }}</span> <br />
              <span style="color: gray">{{ date(card.birthday) }}</span>
            </h3>
          </div>
          <div class="btn-container">
            <button @click="removeCard(card._id)" title="Delete Card">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import axios from "axios";
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
    async removeCard(id) {
      await axios.delete(`http://localhost:5005/api/cards/${id}`);
      this.$router.go();
      alert("card deleted!");
    },
  },
  async created() {
    this.cards = await this.fetchSortedCard();
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid gray;
  padding: 30px;
  border-radius: 5px;
}
.card-container {
  width: 100%;
  background-color: #fff;
}
.card {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 20px;
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
.card-text {
  margin: auto;
}
.btn-container {
  margin: auto;
}
.btn-container button i {
  font-size: 20px;
  color: red;
}
</style>