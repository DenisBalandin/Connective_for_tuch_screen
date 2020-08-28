<template>
	<div class="holder">
      <div
      class="card">
      	<div v-if='!done'>
          <h1>Type in your email below</h1>
	        <div class="customer_name">
	          <input
	            type="text"
	            name="customer_name"
	            placeholder="Your Email..."
	            required
	            v-model="email"
	          />
	        </div>

	        <div class="button">
	          <button class='btn' @click='checkEmail()'>SEND PICTURE</button>
	        </div>
      	</div>

        <transition name='fade'>
        	<div v-if='done'>
        		<h1>Thank you!</h1>
        		<p>Your image is on it's way!</p>
        	</div>
        </transition>
	  </div>
	</div>
</template>

<script>
const fb = require('../../firebaseConfig.js');
const db = fb.default.db;
const storage = fb.default.storage;

export default {
  name: "step3",
  props: ['img'],
  data(){
  	return {
  		email: '',
  		done: false
  	}
  },
  mounted(){
  	
  },
  methods: {
    reload(){
		location.reload();
    },
    lastStep(){
    	this.$parent.lastStep();
    },
    checkEmail(){
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if ( re.test(this.email.toLowerCase()) ) {
        
            this.sendEmail();
        }else {
            alert('Please enter a valid email');
        }
    },
    sendEmail(){
    	this.done = true;
    	let vm = this;
      let id = db.collection('selfie').doc().id;
      db.collection('selfie')
        .doc(id)
        .set({
            email: this.email, 
            img: this.img,
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
  },
};
</script>
