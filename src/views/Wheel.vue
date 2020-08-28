<template>
	<main class='main'>
	  <div class='home_wheel'>        
	    <section class='main resting'>
	        <div class='prize'>
	            <div>
	                <p class='script'>Your prize</p>
	                <p><span></span></p>
	                <p class='desc'>An email is on it's way! To redeem your prize show the winning email to a barista</p>
	            </div>
	        </div>

	        <div class='pre_spin'>
	            <div class='intro'>
	                <p class='script'>ENTER EMAIL</p>
	                <p>To <span>win</span></p>
	            </div>
	            <form id='form'>
	                <input id="prize_email" required class='email_wheel' type="email" name="email" placeholder='Email'>
	            <button type='submit' class='button'>Spin the wheel!</button>
	            </form>
	            <p class='error'>Please enter a valid email!</p>
	        </div>

	        <div class='wheel'>
	          <img class='spin' src="<?= FRONT_ASSETS ?>img/wheel.png">
	          <img class='ticker' src="<?= FRONT_ASSETS ?>img/wheel_center.png">
	        </div>
	    </section>
	    </div>
	</main>
</template>

<script type="text/javascript">
	const fb = require('../firebaseConfig.js');
	const db = fb.default.db;

	// import Slider from '../components/Slider.vue';

	export default {
		components: {
		},
		data(){
            return {
            	
            }
        },
        created: function(){
        	
        },
        methods: {
	       	
	    }
	}
</script>
