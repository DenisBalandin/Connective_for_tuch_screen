<template>
  <div class="step-final">
    <div class="step-inner">
      <template v-if='!done'>        
      <div class="info"><h1>Organization Information</h1></div>
      <div class="userForm">
        <div class="customer_name">
          <input
            type="text"
            name="customer_name"
            id="customer_name"
            placeholder="Your Name"
            required
            v-model="customer_name"
          />
        </div>

        <div class="email_address">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            required
            v-model="email"
          />
        </div>

        <div class="phone">
          <input
            type="text"
            name="organization"
            id="organization"
            placeholder="Organization"
            required
            v-model="organization"
          />
        </div>
        <div 
        @click='validate'
        class="button">
          <button>GET QUOTATION</button>
        </div>
      </div>
      </template>
      <transition name='fade'>
        <div 
        class="done"
        v-if='done'>
          <div><h1>Thank you!</h1></div>
          <p>We'll get right back to you with a quote.</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
const fb = require('../../firebaseConfig.js');
const db = fb.default.db;

export default {
  data() {
    return {
      name: "StepFinal",
      customer_name: "",
      email: "",
      organization: "",
      done: false
    };
  },
  created: function() {},
  methods: {
    goTo() {
      this.$router.push({
        path: "/"
      });
    },
    validate() {
      let valid = true;
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (this.customer_name.length < 1) {
        alert('Please enter your name.');
        valid = false;
      }
      if (!re.test(this.email.toLowerCase()) && valid) {
        alert('Please enter a valid email.')
        valid = false;
      }

      if (this.organization.length < 1 && valid) {
        alert('Please enter your organization.');
        valid = false;
      }

      if (valid) {
        this.done = true;
        this.saveData();
      }
    },
    saveData(){
      let vm = this;
      let id = db.collection('quote').doc().id;
      db.collection('quote')
        .doc(id)
        .set({
            answers: this.$parent.answers, 
            name: this.customer_name,
            email: this.email,
            organization: this.organization,
            created: Date.now(), 
            timeRefs: this.calcTimes(), })
        .then(() => {
            setTimeout(function(){
                vm.$router.push({name: 'home'});
            }, 5000);
        })
        .catch(() => {
          setTimeout(function(){
                vm.$router.push({name: 'home'});
            }, 5000);
        })
    }
  }
};
</script>

<style>
.step-final {
  max-width: 1920px;
  padding: 50px;
  background: rgb(223, 224, 224);
  background: linear-gradient(
    180deg,
    rgba(223, 224, 224, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
}
.step-inner {
  height: 731px;
  width: 100%;
  /*display: grid;*/
  border-radius: 30px;
  background-image: url("../../assets/bgGradient.png");
  background-size: cover;
  /*background: rgb(0, 184, 176);*/
  /*background: linear-gradient(*/
  /*  90deg,*/
  /*  rgba(0, 184, 176, 1) 0%,*/
  /*  rgba(157, 210, 156, 1) 100%*/
  /*);*/
}
.info {
  padding-top: 60px;
}
.userForm {
  margin-top: 80px;
  display: grid;
  grid-template-rows: 1fr;
  grid-row-gap: 40px;
}
::placeholder {
  font-family: "Libre Franklin", sans-serif;
  font-size: 1.5rem;
  color: #00468b;
}

button {
  font-family: "Libre Franklin", sans-serif;
  color: #00468b;
  margin-top: 30px;
}
input {
  width: 800px;
  height: 60px;
  border: 1px solid #ffffff;
  border-radius: 30px;
  background: #ffffff;
  padding: 0 20px;
  font-family: "Libre Franklin", sans-serif;
  font-size: 1.5rem;
  color: #00468b;
}

input:focus {
  outline: none;
  background: #ffffff;
}
button {
  padding: 20px 100px;
  border: none;
  border-radius: 40px;
  font-size: 1.5rem;
  color: #ffffff;
  background: #00306c;
  box-shadow: 5px 8px 16px -8px #000000;
}

.done {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
