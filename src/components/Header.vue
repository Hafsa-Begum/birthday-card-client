<template>
  <v-container>
    <ul>
      <li>
        <router-link class="active" to="/"
          ><i style="color: #f539adee" class="fas fa-home"></i> All
          Card</router-link
        >
      </li>
      <li>
        <router-link class="active" to="addNewCard"
          ><i style="color: #f539adee" class="fas fa-plus-circle"></i> New
          Card</router-link
        >
      </li>
      <li>
        <router-link class="active" to="/upcomingBirthdays"
          ><i style="color: #f539adee" class="fas fa-birthday-cake"></i>
          Upcoming Birthdays</router-link
        >
      </li>
    </ul>
  </v-container>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #111;
}

li a:hover.active {
  background-color: #aa046a;
}
</style>