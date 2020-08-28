<template>
	<div class="holder">
      <div
      class="card">
	      <img class='final_img' :src="img">
	      <button 
	      @click='lastStep'
	      class='btn final_btn'>SEND IMAGE</button>
	      <button 
	      @click='reload'
	      class='btn text_btn'>RETAKE</button>
	  </div>
	</div>
</template>

<script>
const fb = require('../../firebaseConfig.js');
const storage = fb.default.storage;

export default {
  name: "step2",
  props: ['img'],
  data(){
  	return {
  		
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
    }
  },
};
</script>
