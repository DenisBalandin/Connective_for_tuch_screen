<template>
	<main class='main'>
	<send-link :link="link"></send-link>
	  <section class='iframe'>
	  	<iframe src="https://www.braunability.com/us/en.html?utm_Content=home&bb_utmContent=home&utm_Campaign=NSMKioskPilot&bb_utmCampaign=NSMKioskPilot&bb_leadChannel=Kiosk&bb_source=NSM"></iframe>
	  </section>
	</main>
</template>

<script type="text/javascript">
	import SendLink from '../components/SendLink.vue';
	const fb = require('../firebaseConfig.js');
	const db = fb.default.db;

	// import Slider from '../components/Slider.vue';

	export default {
		components: {
			'send-link': SendLink
		},
		data(){
            return {
            	link: "https://www.braunability.com"
            }
        },
        created: function(){
        	
        },
        methods: {
       
        }
	}
</script>