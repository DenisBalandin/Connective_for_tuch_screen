<template>
  <div class="price">
    <Header />
    <div class="price-inner">
      <div class="card1 description">
        <div class="description-text">
          <h2>Let’s Work Together</h2>
          <p>
            By submitting this form you agree to receive emails from Connect
            Cause
          </p>
        </div>
        <div class="wrapper">
          <form class="userForm">
            <div class="customer_name">
              <input
                type="text"
                name="customer_name"
                id="customer_name"
                placeholder="Your Name"
                required
              />
            </div>

            <div class="email_address">
              <input
                type="email"
                name="email_address"
                id="email_address"
                placeholder="Your Email Address"
                required
              />
            </div>

            <div class="phone">
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Your Phone Number"
                required
              />
            </div>
            <div class="select-style">
              <label for="pickup_place">I want to:</label>
              <select name="pickup_place" id="pickup_place">
                <option value="" selected="selected">Request A Meeting</option>
                <option value="option1">Request A Call</option>
                <option value="option2">Request A Online</option>
              </select>
            </div>

            <div class="button">
              <button type="submit">SEND</button>
            </div>
          </form>
        </div>
      </div>

      <div class="card2 selfie">
        <img
          class="card-camera"
          src="../assets/icons/Asset-camera.png"
          alt="Camera"
        />
        <h4>TAKE A SELFIE</h4>
      </div>

      <div class="card3 match">
        <div class="wheel">
          <img
            class="card-puzzle"
            src="../assets/icons/Asset-puzzle.png"
            alt="Puzzle"
          />
        </div>
        <div class="grid-container-wider">
          <h4>MATCH TO WIN</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";

export default {
  name: "about",
  components: {
    Header
  }
};
</script>

<style scoped lang="css">
body {
}
.price-inner {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  padding: 30px;
  /*background-color: lightgray;*/
  background: rgb(223, 224, 224);
  background: linear-gradient(
    180deg,
    rgba(223, 224, 224, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
}
.card1 {
  height: 720px;
  grid-area: 1 / 1 / 3 / 2;
  box-shadow: 5px 6px 16px -8px #000000;
}
.card2 {
  grid-area: 1 / 2 / 2 / 3;
}
.card3 {
  grid-area: 2 / 2 / 3 / 3;
}
h4 {
  margin-bottom: 15px;
}
p {
  font-size: 1.6rem;
  margin-bottom: 30px;
}
.description {
  padding: 30px;
  border-radius: 30px;
  background: rgb(0, 184, 176);
  background: linear-gradient(
    90deg,
    rgba(0, 184, 176, 1) 0%,
    rgba(157, 210, 156, 1) 100%
  );
}

.selfie {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 25px;
  background-image: linear-gradient(
      rgba(9, 37, 42, 0.45),
      rgba(9, 37, 42, 0.45)
    ),
    url("../assets/Asset-selfie-bg.png");
  background-size: cover;
}
.match {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #00468b;
  border-radius: 20px;
  padding: 25px;
}
img {
}
.card-puzzle {
  max-width: 100px;
  margin-bottom: 10px;
}

.card-camera {
  max-width: 100px;
  margin-bottom: 10px;
}
.description-text {
  margin-bottom: 160px;
}

.wrapper {
  display: flex;
  justify-content: center;
}
.userForm {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  grid-row-gap: 80px;
}

input {
  width: 250px;
  padding: 0 20px;
  font-family: "Libre Franklin", sans-serif;
  font-size: 1.2rem;
  color: #00468b;
}

::placeholder {
  font-family: "Libre Franklin", sans-serif;
  font-size: 1.2rem;
  color: #00468b;
}

button {
  font-family: "Libre Franklin", sans-serif;
  color: #00468b;
}

input {
  /*width: 100%;*/
  border: 1px solid #ffffff;
  border-radius: 30px;
  background: #ffffff;
}
select {
  font-family: "Libre Franklin", sans-serif;
  font-size: 2.5rem;
  color: #ffffff;
  border: 1px solid transparent;
  border-radius: 30px;
  background: transparent;
  /*text-decoration: underline;*/
}

label {
  text-align: left;
  font-family: "Libre Franklin", sans-serif;
  font-size: 3rem;
  /*font-weight: bold;*/
  color: #ffffff;
  padding-bottom: 30px;
}
input,
label {
  height: 60px;
}
input:focus {
  outline: none;
  background: #ffffff;
}

button {
  padding: 20px 100px;
  border: none;
  border-radius: 25px;
  font-size: 1.5rem;
  color: #ffffff;
  background: #00306c;
  box-shadow: 5px 8px 16px -8px #000000;
}

.select-style {
  grid-column: 1 / 4;
  justify-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
}

.button {
  grid-column: 2 / 3;
  justify-self: center;
}
</style>
