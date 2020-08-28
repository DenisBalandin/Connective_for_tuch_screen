<template>
	<div class="holder">
      <div
      @click='takePic()' 
      class="card">
	      <h2 v-if='!countdown'>Click anywhere to take a Selfie!</h2>
	      <h2 v-if='countdown'>Look up at the camera!</h2>
	      <div ref='grab'>
			  <video ref="video" width="640" height="480" autoplay></video>
	      </div>
	      <canvas ref='canvas'></canvas>

		<transition name='fade'>
		  <div v-if='countdown' class='countdown_holder'>
		      <div
		      :class="{zoom: zoom}"
		      class='countdown'>{{count}}</div>
		  </div>
		</transition>
	  </div>
	  <transition name='fade'>
		  <div v-if='flash' class='flash'>
		  	<img class='loader' v-if='loading' src="../../assets/img/loader.gif">
		  </div>
	  </transition>
	</div>
</template>

<script>
const fb = require('../../firebaseConfig.js');
const storage = fb.default.storage;
import html2canvas from 'html2canvas';

export default {
  name: "step1",
  data(){
  	return {
  		video: null,
  		countdown: false,
  		count: null,
  		zoom: false,
  		flash: false,
  		loading: false,
  	}
  },
  mounted(){
  	this.$nextTick(function(){
	  	this.startVideo();
  	});
  },
  methods: {
    startVideo(){
		let vm = this;
		this.video = this.$refs.video;
	    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
	        navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
	        	try {
	              vm.video.src = window.URL.createObjectURL(stream);
	            } catch(error) {
	              vm.video.srcObject = stream;
	            }
	            vm.video.play();
	        });
	    }
    },
    takePic(){
    	if (!this.countdown){
	    	let vm = this;
	    	this.countdown = true;
	    	this.zoom = true;
	    	vm.count = '3';
	    	setTimeout(function(){
	    		vm.zoom = false;
	    		setTimeout(function(){
		    		vm.zoom = true;
		    		vm.count = '2';
		    		setTimeout(function(){
			    		vm.zoom = false;
			    		setTimeout(function(){
				    		vm.zoom = true;
				    		vm.count = '1';
				    		setTimeout(function(){
					    		vm.zoom = false;
					    		setTimeout(function(){
						    		vm.flash = true;
						    		vm.savePic();
						    	}, 500);
					    	}, 500);
				    	}, 500);
			    	}, 500);
		    	}, 500);
	    	}, 500);
    	}
    },
    savePic(){
    	this.loading = true;
    	let vm = this;
    	let vid = vm.$refs.video;
    	vm.$nextTick(() => {
		  this.canvas = this.$refs.canvas;
          var context = this.canvas.getContext("2d")
          context.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);
          vm.saveAsImage();
      });
    },
    saveAsImage() {
      let canvas = document.getElementsByTagName('canvas')[0];
      let image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
      let vm = this;
      let storageRef = storage.ref(`selfie/${Date.now()}.png`);
      let uploadTask = storageRef.putString(image, 'data_url');
      uploadTask.on('state_changed', (snapshot) => {},
        (error)=>{
          alert('Could not save design, please make sure you have wifi, or contact us.')
        },
        ()=>{
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            canvas.remove();
            vm.loading = false;
            vm.flash = false;
            console.log(downloadURL)
            vm.$parent.nextStep(downloadURL, 'step2');
          })
        }
      );
    },
  },
};
</script>
