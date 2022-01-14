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
          <h3>Name: {{ card.name }}</h3>
          <h3>Birthday: {{ card.birthday }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  name: "Card",
  data() {
    return {
      card: {},
    };
  },
  methods: {
    async fetchCard(id) {
      const res = await fetch(`http://localhost:5005/api/cards/${id}`);
      const data = await res.json();
      console.log(data);
      return data;
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
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

