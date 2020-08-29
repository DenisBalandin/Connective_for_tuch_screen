<template> 
    <div>
      <transition name='fade'>
      <section v-if='showMemory && !gameComplete' class='promo' :class="{active: showMemory}">
        <div @click="close()" class='close'>
            <p>X</p>
        </div>
        <div @click='startTimer()' class='game' :class="{ attract: gameActive}">
            <template v-for='o in options'>
              <vue-flip  :active-click='true' :bindWithMe='o.active' width="350px" height="250px" :class="{no_flip: checkIfFlippable(o), complete: o.complete, hover: o.hover}">
                  <div slot="front" >
                      <div @click='flip(o)'></div>
                  </div>
                  <div slot="back">
                      <div class='card_content'>
                        <img :src="require('../assets/img/'+o.img)">
                          <p>{{o.title}}</p>
                      </div>
                  </div>
              </vue-flip>
            </template>
        </div>
        <div class='intro_txt'>
            <p class='title'>Match all squares to be entered in a raffle for a<span> $20 Amazon Gift Card!</span></p>
            <!-- <div class='scoreboard'>
                <p class='leader_title'>Leaderboard</p>
                <div class='leaders'>
                    <div class='leader' v-for='score in top3'>
                        <p>{{score.fullName}}</p>
                        <p>{{score.time}} sec.</p>
                    </div>
                </div>
            </div> -->
        </div>
      </section>
      </transition>
      <transition name='fade'>
        <section v-if='showMemory && gameComplete' class='game_complete promo'>
            <div @click="close()" class='close'>
                <p>X</p>
            </div>
            <div class='complete_holder'>
                <p class='title'>Congrats!<span>You completed in {{timer}} seconds</span></p>
                <p class='email_txt'>Enter your email below to qualify to win a $20.00 gift card!</p>
                <transition name='slide'>
                    <p v-if='error' class='error'>{{errorMsg}}</p>
                    <p v-if='success' class='error'>You've been entered, thanks!</p>
                </transition>
                <input type="text" v-model='name' placeholder='Enter your name here...'>
                <input type="email" v-model='email' placeholder='Enter your email here...'>
                <transition name='fade'>
                    <button
                    @click='checkEmail()'
                    v-if='!hideBtn'
                    class='btn'>QUALIFY TO WIN</button>
                </transition>
                <p @click='close()' class='home'><img class='white_icon' src="../assets/img/home.svg">Return home</p>
            </div>
        </section>
      </transition>
  </div>
</template>

<script type="text/javascript">
    const fb = require('../firebaseConfig.js');
    const db = fb.default.db;
    var moment = require('moment');
    import VueFlip from 'vue-flip';

    export default {
        components: {
            'vue-flip': VueFlip
        },
        props: ['showMemory'],
        data(){
            return {
                hideBtn: false,
                gameComplete: false,
                timer: 0,
                timeStarted: false,
                error: false,
                errorMsg: 'Please enter a valid email',
                success: false,
                gameActive: false,
                email: '',
                name: '',
                flippable: true,
                flipped:[],
                count: 0,
                records: [],
                options: [
                    {
                        img: 'icon1.svg',
                        id: 1,
                        title: 'Office 365 Support',
                        active: null,
                        open: false,
                        complete: false
                    },
                    {
                        img: 'icon2.svg',
                        id: 2,
                        title: 'Google Apps Support',
                        active: null,
                        open: false,
                        complete: false
                    },
                    {
                        img: 'icon3.svg',
                        id: 3,
                        title: 'Cloud Application Hosting',
                        active: null,
                        open: false,
                        complete: false
                    },
                    {
                        img: 'icon4.svg',
                        id: 4,
                        title: 'Unified Communications & VoIP',
                        active: null,
                        open: false,
                        complete: false
                    },
                    {
                        img: 'icon5.svg',
                        id: 5,
                        title: 'Migration & Deployment',
                        active: null,
                        open: false,
                        complete: false
                    },
                    {
                        img: 'icon6.svg',
                        id: 6,
                        title: 'Virtualization Management',
                        active: null,
                        open: false,
                        complete: false
                    }
                ]
            }
        },
        computed: {
            top3() {
                let order = this.records.sort(function(a, b){return a.time-b.time});
                let top3 = order.slice(0, 3);
                return top3;
            }
        },
        mounted(){
        },
        firestore() {
            return {
              records: db.collection("matchingEmails"),
            };
          },
        created: function(){
            this.createShuffle();
            // this.resetGame();
        },
        methods: {
            checkEmail(){
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (re.test(this.email.toLowerCase())) {
                    this.checkName();
                }else {
                    this.error = true;
                    this.errorMsg = 'Please enter a valid email';
                    this.hideBtn = false;
                }
            },
            checkName(){
                if (this.name.length>0) {
                    this.hideBtn = true;
                    this.gameActive = true;
                    this.error = false;
                    this.success = true;
                    this.saveEmail();
                }else {
                    this.error = true;
                    this.errorMsg = 'Please enter a valid name'
                }
            },
            saveEmail(){
              let vm = this;
              let id = db.collection('matchingEmails').doc().id;
              db.collection('matchingEmails')
                .doc(id)
                .set({
                    fullName: this.name, 
                    time: this.timer,
                    email: this.email, 
                    created: Date.now(), 
                    name: 'Memory', 
                    timeRefs: this.calcTimes(), })
                .then(() => {

                    setTimeout(function(){
                        vm.$parent.showMemory = false;
                        vm.$emit('closeMemory');
                        vm.resetGame();
                        vm.hideBtn = false;
                        vm.success = false;
                    }, 5000);
                })
            },
            checkIfFlippable(o){
                if (!this.flippable || o.open || o.active) {
                    return true;
                }
                else {
                    return false;
                }
            },
            createShuffle(){
                let vm = this;
                let arr = JSON.parse(JSON.stringify(this.options));
                arr.forEach(function(o){
                    vm.options.push(o);
                });
                this.shuffle();
            },
            shuffle () {
                var currentIndex = this.options.length;
                var temporaryValue, randomIndex;

                while (0 !== currentIndex) {

                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;

                    temporaryValue = this.options[currentIndex];
                    this.options[currentIndex] = this.options[randomIndex];
                    this.options[randomIndex] = temporaryValue;
                }
            },
            flip(o){
                let l = this.flipped.length;
                if (l == 1) {
                    this.flipped.push(o);
                    this.flipped[1].open = true;
                    this.checkMatch();
                }else {
                    this.flipped.push(o);
                    this.flipped[0].open = true;
                }
            },
            checkMatch(){
                let vm = this;
                this.flippable = false;
                if (this.flipped[0].id == this.flipped[1].id) {
                    setTimeout(function(){
                        vm.flipped[1].active = true;
                        vm.flipped[0].active = true;
                        vm.flipped[1].complete = true;
                        vm.flipped[0].complete = true;
                        vm.flipped = [];
                        vm.count+=2;
                        vm.flippable = true;
                    }, 1000)
                }else {
                    setTimeout(function(){
                        vm.flipped[0].active = false;
                        vm.flipped[1].active = false;
                        vm.flipped[0].open = false;
                        vm.flipped[1].open = false;
                        let cards = document.getElementsByClassName('flip-container');
                        for (var i=0; i<cards.length; i++) {
                            if (!cards[i].classList.contains('complete')){
                                cards[i].classList.remove('hover');
                            }
                        }
                    }, 1000);

                    setTimeout(function(){
                        vm.flipped[0].active = null;
                        vm.flipped[1].active = null;
                    }, 1500);
                    setTimeout(function(){
                        vm.flipped[0].active = false;
                        vm.flipped[1].active = false;
                        vm.flipped = [];
                        vm.flippable = true;
                    }, 1600);
                }
                setTimeout(function(){
                    if ( vm.count == vm.options.length ) {
                        vm.gameComplete = true;
                        let start = vm.timer;
                        let end = moment(Date.now());
                        vm.timer = (end.diff(start)/1000).toFixed(2);
                    }
                }, 2000);
            },
            close(){
                this.$parent.showMemory = false;
                this.resetGame();
            },
            resetGame(){
                this.count = 0;
                this.flipped = [];
                this.options.forEach(function(o){
                    o.complete = false;
                    o.open = false;
                    o.active = false;
                });
                this.timeStarted = false;
                this.timer = 0;
                this.gameComplete = false;
                this.shuffle();
            },
            startTimer(){
                if (!this.timeStarted) {
                    this.timeStarted = true;
                    this.timer = moment(Date.now());
                }
            }
        }
    }
</script>

<style scoped>
.promo {
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(14, 58, 108, 0.90);
   width: 100%;
  height: 100%; 
  /* display: flex; */
  align-items: center;
  justify-content: flex-start;
  transition: background-color 1s;
}

.promo.game_complete {
   background-color: rgba(0, 99, 190, 0.90); 
}

.promo .close {
  position: fixed;
  top: 0;
  right: 0;
  background-color: white;
  padding: 25px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.promo .close p {
  margin: 0;
  color: #1e79c4;
  font-weight: bold;
  font-size: 40px;
}

.promo .intro_txt {
    padding: 100px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 40%;
}

.promo .intro_txt p {
    color: white;
    font-size: 4vw!important;
}

.promo .intro_txt p span {
    color: #f0528a;
}

.promo .intro_txt p.title {
    font-weight: bold;
    margin: 0;
    font-size: 60px;
    margin-bottom: 30px;
    line-height: 1.3;
}

.game {
    width: 54%;
    padding: 0 2%;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}


.complete .back .card_content {
    background-color: #4abeb7 !important;
    background-blend-mode: multiply;
    opacity: .5;
}

.complete .back .card_content p {
    color: #17568a;
}


.back .card_content {
    background-size: cover;
    background-position: center center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: white !important;
    transition: background-color .5s, background-blend-mode .5s;
}

.back .card_content img {
    height: 125px;
}

.back .card_content p {
    color: #00468b;
    font-weight: bold; 
    padding: 20px;
    font-size: 25px;
    padding: 0 20px;
    margin: 0;
    margin-top: 15px;
}

.no_flip, .non_flip {
    pointer-events: none;
}

input {
    width: 100%;
    padding: 20px 20px;
    box-sizing: border-box;
    font-size: 25px;
    outline: none;
    border: none;
}

input::placeholder {
    opacity: .5;
}

.btn {
    width: 100%;
    padding: 15px 20px;
    font-weight: bold;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4abeb7;
    outline: none;
    border: none;
    font-size: 25px;
    margin-top: 10px;
}

p.error {
    transition: max-height 1s;
    font-size: 19px;
    width: 100%; 
    margin-bottom: 20px;
    font-weight: bold;
    color: #f0528a !important;
}

.slide-enter-to, .slide-leave {
   max-height: 80px;
   overflow: hidden;
}

.slide-enter, .slide-leave-to {
   overflow: hidden;
   max-height: 0;
}

.slide_big-enter-to, .slide_big-leave {
   max-height: 1000px;
   overflow: hidden;
   transition: max-height 1s;
}

.slide_big-enter, .slide_big-leave-to {
   overflow: hidden;
   max-height: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.attract {
    -webkit-animation: attract .5s linear;
}

@-webkit-keyframes attract {
  0%, 100%  { -webkit-transform: scale(1); }
  50% { -webkit-transform: scale(.8); }
}

.game_complete {
    display: flex;
    justify-content: center;
    align-items: center;
}

.complete_holder {
    width: 600px;
}

.complete_holder p {
    color: white;
    font-size: 25px;
    line-height: 1.2;
}

.complete_holder p.title{
    font-size: 70px;
    font-weight: bold;
    margin-bottom: 40px;
}

.complete_holder p.title span {
    display: block;
    font-size: 25px;
    margin-top: 20px;
    font-weight: normal;
}

.complete_holder input {
    margin-bottom: 20px !important;
}

.email_txt {
    font-size: 35px !important;
    font-weight: bold;
    margin-bottom: 40px;
}

.home {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    width: 100%;
}

.home img {
    height: 22px;
    margin-right: 14px;
}
.scoreboard {
    width: 100%;
}

.leader_title {
    text-align: left;
    font-size: 28px !important;
    margin-top: 50px;
    margin-bottom: 10px;
    font-weight: bold;
}

.leaders {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.leaders .leader {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    border-top: 1px solid white; 
    width: 100%;
}

.leaders .leader p {
    margin: 0;
    font-size: 20px !important;
}


</style>
