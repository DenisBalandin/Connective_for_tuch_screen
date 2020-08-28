<template> 
    <div>
      <transition name='fade'>
      <section @click='setUpWheel()' v-if='showWheel' class='wheel_promo' :class="{active: showWheel, wheel_active: wheelActive}">
        <div @click="$emit('closeWheel')" class='close'>
            <p>X</p>
        </div>
        <img src="../assets/img/wheel.png" :class="{spin_ready: spinReady}" :style="{transform: 'rotate('+spin+'deg)'}" >
        <transition name='fade_quick'>
            <p v-if='!wheelActive'>Touch To
            <span>Spin and Win</span></p>
        </transition>
        <transition name='fade'>
            <div v-if='wheelActive && !spinReady' class='email_entry'>
                <p>Enter your email 
                <span>to spin!</span></p>
                <input type="email" v-model='email'>
                <button @click='checkEmail()' class='btn' :class="{inactive: stopClicks}">SPIN THE WHEEL</button>
                <transition name='fade_quick'>
                    <p v-if='showError' class='error'>Please enter a valid email</p>
                </transition>
            </div>
        </transition>
      </section>
      </transition>

      <transition name='fade'>
      <div v-if='award' :style="{backgroundColor: prize.color}" class='prize'>
          <p>{{prize.name}}</p>
      </div>
      </transition>
  </div>
</template>

<script type="text/javascript">
    const fb = require('../firebaseConfig.js');
    const db = fb.default.db;

    export default {
        props: ['showWheel'],
        data(){
            return {
                show: false,
                wheelPage: false,
                initial: null,
                wheelActive: false,
                email: '',
                showError: false,
                stopClicks: false,
                rotation: 0,
                rdm: 0,
                spin: 0,
                spinReady: false,
                award: false,
                prize: {},
                prizes: [
                    {
                        name: 'Try Again',
                        min: 0,
                        color: '#f78650',
                    },
                    {
                        name: 'Try Again',
                        min: 60,
                        color: '#f78650'
                    },
                    {
                        name: 'Try Again',
                        min: 120,
                        color: '#f78650'
                    },
                    {
                        name: 'Try Again',
                        min: 180,
                        color: '#f78650'
                    },
                    {
                        name: 'Try Again',
                        min: 240,
                        color: '#f78650'
                    },
                    {
                        name: 'Try Again',
                        min: 300,
                        color: '#f78650'
                   } 
                ]
            }
        },
        mounted(){
        },
        created: function(){
        },
        methods: {
            setUpWheel(){
                this.wheelActive = true;
            },
            checkEmail(){
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if ( re.test(this.email.toLowerCase()) ) {
                    this.stopClicks = true;
                    this.startSpin();
                    this.saveEmail();
                }else {
                    this.showError = true;
                }
            },
            saveEmail(){
              let id = db.collection('wofEmails').doc().id;
              db.collection('wofEmails')
                .doc(id)
                .set({email: this.email, created: Date.now(), name: 'Wheel of Fortune'})
                .then(() => {
                })
            },
            startSpin(){
                this.rotation = this.randNum();
                var winNum = -(this.rotation % 360) + 360;
                this.findPrize(winNum);
            },
            randNum() {
                this.rdm = Math.floor(Math.random() * Math.floor(360));
                var num =  this.rdm + 360*9;
                if ( num % 10 === 0 ) {
                    num + 4;
                }
                return num
           },
            findPrize(num) {
                let vm = this;
                this.prizes.forEach(function(prize, i){
                    if ( num >= prize.min && prize.min +60 >= num ) {
                        vm.prize = prize;
                        vm.checkOdds(num);
                    }
                });
            },
            checkOdds(num) {
            if ( this.prize.chance ) { 
                this.worsenOdds(num) 
            }else {
                this.showPrize(num);
            }
           },
           worsenOdds( num ) {
            var randomNum = Math.floor(Math.random() * Math.floor(this.prize.chanceNum));
            if ( randomNum == 0 ) {
            }else {
                num = Math.floor(Math.random() * Math.floor(360));
            }
            this.findPrize(num)
           },
           showPrize(num) {
            let rotate = ((360-num) + (360*9));
            let vm = this;
            this.spinReady = true;
            setTimeout(function(){
                vm.spin = rotate;
            }, 500);
                setTimeout(function(){
                    vm.award = true;
                    setTimeout(function(){
                        window.location = '/';
                    }, 10000)
                }, 8500);
            }
        },
        watch: {
            showWheel(){
                // this.show = true;
                console.log(this.showWheel)
            }
        }
    }
</script>

<style type="text/css">
    .wheel_promo {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(14, 58, 108, 0.75);
  width: 1920px;
  height: 1080px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: background-color 1s;
}

.wheel_promo .close {
  position: fixed;
  top: 0;
  right: 0;
  background-color: white;
  padding: 25px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wheel_promo .close p {
  margin: 0;
  color: #1e79c4;
  font-weight: bold;
}

.wheel_promo img {
  height: 90%;
  margin-left: -1000px;
  position: relative;
  -webkit-animation: spin 5s infinite;
  transition: margin 1s, transform 1s;
}

@-webkit-keyframes spin {
  0%, 100%  { -webkit-transform: rotate(0deg); }
  50% { -webkit-transform: rotate(90deg); }
}

.wheel_promo.active img {
   margin-left: -486px;
}

.wheel_promo.wheel_active img {
  animation: none;
  transform: rotate(0deg);
}

.wheel_promo.wheel_active.active img.spin_ready {
  margin-top: 0;
}

.wheel_promo.active img.spin_ready {
  animation: none;
  transition-timing-function: ease;
  transition-timing-function: cubic-bezier(0, 0, 0, 1);
  -webkit-transition: transform 7s, margin 1s;
}

.wheel_promo > p {
  margin-left: 150px;
  font-weight: normal;
}

.wheel_promo p {
  color: white;
  font-size: 40px;
}

.wheel_promo p span {
  font-size: 100px;
  display: block;
  font-weight: bold;
  -webkit-animation: enlarge 3s infinite;
}

@-webkit-keyframes enlarge {
  0%, 40%  { font-size: 100px; }
  20% { font-size: 120px; }
}

.cover_wheel {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 101;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.fade_quick-enter-active, .fade_quick-leave-active {
  transition: opacity .3s;
}
.fade_quick-enter, .fade_quick-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}




/*===========================  WHEEL OF FORTUNE  =============================*/
.wheel_promo {
  overflow: hidden;
}

.wheel_promo.wheel_active {
    background-color: rgba(14, 58, 108, 1);
}

.wheel_promo.wheel_active > img {
  margin-left: 486px;
  margin-top: 1091px;
}

.email_entry {
  position: absolute;
  left: 50%;
  display: flex;
  flex-direction: column;
  transform: translateX(-50%);
  top: 50px;
  justify-content: center;
  align-items: center;
}

.email_entry .btn {
  width: 100%;
  padding: 20px;
  color: white;
  outline: none;
  border: none;
  font-size: 25px;
  margin-top: 20px;
  font-weight: bold;
  background-color: #f78650;
}

.inactive {
  pointer-events: none;
}

.email_entry p {
  text-align: center;
}

.email_entry input {
  width: 100%;
  margin-top: 50px;
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: 2px solid white;
  color: white;
  padding: 10px;
  box-sizing: border-box;
  font-size: 30px;
  transition: border .3s;
}

.email_entry input:focus {
  border-color: #f78650;
}

.email_entry input::placeholder {
  opacity: .5;
}

.email_entry .error {
  font-size: 20px;
  font-weight: normal;
  position: absolute;
  bottom: -60px;
}

.home_wheel {
  height: 1920px;
  overflow: hidden;
  position: absolute;
  width: 100%;
}

.home_wheel .main {
  background-color: #ea352d;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home_wheel .intro {
  font-size: 119px;
  color: white;
  font-weight: bold;
  line-height: 1;
  margin-bottom: 0;
  padding: 0;
  margin-top: 280px;
  text-align: center;
  -webkit-animation: enlarge infinite 5s;
}

@-webkit-keyframes enlarge{
  0%, 20% { transform: scale(1); opacity: 1;}
  10% { transform: scale(.1); opacity: 0;}
}

.pre_spin {
  margin-top: -850px;
}

.home_wheel .intro p {
  margin: 2px;
  font-family: 'nobel';
  font-weight: 400;
  font-size: 150px;
}

p.script {
  font-family: 'claire_handregular' !important;
}

.home_wheel .intro p.script {
  font-size: 40px;
}

.email_wheel {
  font-family: 'nobel';
  padding: 30px;
  font-size: 37px;
  background: transparent;
  border: none;
  color: white;
  border-bottom: 3px solid white;
  margin-top: 75px;
  padding-bottom: 17px;
  outline: none;
  display: block;
  width: 400px;
}

.email_wheel::placeholder {
  color: rgba(255, 255, 255, 0.58);
}

.home_wheel .button {
  color: #ea352d;
  background: white;
  padding: 30px 74px;
  font-size: 35px;
  font-weight: 400;
  border: none;
  margin-top: 21px;
  width: 460px;
  outline: none;
  font-family: 'nobel';
}

.wheel {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  width: 100%;
  transition: margin 1s, width 1s;
}

.home_wheel .main.resting .wheel {
  margin-top: 920px;
  width: 140%;
}

.home_wheel .main.resting .wheel .spin {
  transition: transform 1s;
  -webkit-animation: slowSpin infinite 10s;
}

@-webkit-keyframes slowSpin{
  0%, 100% { transform: rotate(-120deg); }
  50% { transform: rotate(120deg); }
}

.home_wheel .main .wheel .spin.ready {
  transition-timing-function: ease;
  transition-timing-function: cubic-bezier(0, 0, 0, 1);
  transition: transform 7s;
  -webkit-animation: none;
}

.wheel .back {
  width: 100%;
}

.wheel .pointer {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  top: -30px;
}

.wheel img {
    width: 90%;
}

.wheel .ticker {
    position: absolute;
    width: 1080px;
    left: 50%;
    transform: translateX(-50%);
}

.home_wheel {
  overflow: hidden;
}

.prize {
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 102;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: white;
  font-weight: bold;
}

.prize > div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.prize p {
  font-size: 45px;
  font-weight: 400;
  color: white;
  text-align: center;
}

.prize p.script {
  color: #645347;
  margin-bottom: -28px;
  font-size: 36px;
}

.prize .desc {
  color: #64534B;
  font-weight: 400;
  max-width: 700px;
  font-size: 35px;
}

.prize img {
  margin-bottom: 71px;
}

.prize span {
  display: block;
  font-size: 100px;
  margin-top: -17px;
}
</style>