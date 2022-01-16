<template>
  <div class="container">
    <h1 style="text-align: center">Add New Card</h1>
    <form @submit="submitForm" class="add-form">
      <div class="form-control">
        <label>Name</label>
        <input
          type="text"
          v-model="card.name"
          name="name"
          placeholder="Add Card Name"
        />
      </div>
      <div class="form-control">
        <label>Birthday</label>
        <input
          type="text"
          v-model="card.birthday"
          name="birthday"
          placeholder="Add Birthday"
        />
      </div>
      <div class="form-control">
        <label style="margin-right: 20px">Image</label>
        <input type="file" name="image" @change="selectFile" />
      </div>
      <input type="submit" value="Save Card" class="btn btn-block" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddNewCard",
  data() {
    return {
      card: {
        name: "",
        birthday: "",
        image: "",
      },
    };
  },
  methods: {
    selectFile(e) {
      this.card.image = e.target.files[0];
    },
    submitForm(e) {
      e.preventDefault();
      let formData = new FormData();

      formData.append("name", this.card.name);
      formData.append("birthday", this.card.birthday);
      formData.append("image", this.card.image, this.card.image.name);

      axios
        .post("http://localhost:5005/api/cards/", formData, {})
        .then((res) => {
          console.log(res);
        });
      alert("card added!");
      e.target.reset();
    },
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

.add-form {
  margin-bottom: 40px;
  background: #fff;
  padding: 25px;
  margin: 40px;
  border-radius: 15px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 75%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}

.btn {
  display: inline-block;
  background: #aa046a;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:hover {
  background-color: hsla(323, 85%, 74%, 0.815);
}

.btn-block {
  display: block;
  width: 100%;
}
</style>>