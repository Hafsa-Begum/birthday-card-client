<template>
  <div>
    <h1 style="text-align: center">Upcoming Birthdays</h1>
    <div class="container">
      <div class="card">
        <div class="card-img">
          <img src="" alt="" />
        </div>
        <div class="card-text">
          <h3>Birthday: 18<sup>th</sup> Feb</h3>
          <h4>Name: Better Self Today</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UpcomingBirthdays",
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
</style>