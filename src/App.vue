<template>
  <!-- <v-layout style="overflow: hidden">
    <v-app-bar absolute color="deep-purple">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Lehoa</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item
            prepend-icon="mdi-home"
            title="Home"
            to="/"
            link
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-note-plus"
            title="Add New Card"
            to="/addNewCard"
            link
          ></v-list-item>

          <v-list-item
            prepend-icon="mdi-star"
            title="Upcoming Birthdays"
            to="/upcomingBirthdays"
            link
          ></v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-card class="mx-auto overflow-hidden" height="100vh"
        ><router-view></router-view
      ></v-card>
    </v-main>
  </v-layout> -->
  <div>
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>
<script>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
export default {
  data: () => ({
    drawer: null,
  }),
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Poppins", sans-serif;
  background-image: linear-gradient(to right, #741551ee, #b94f91ee, #f539adee);
}
</style>