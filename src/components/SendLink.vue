<template>
    <div>
      <div @click='sendLink = true' class='send_btn'>
        <img class='white_icon' src="../assets/img/share.png">
        <p>Send Page</p>
      </div>
      <transition name='fade'>
        <div v-if='sendLink' class='popup'>
            <div class='offclick' @click='sendLink = false'></div>
            <div class='holder'>
                <p class='close' @click='sendLink = false'>x</p>
                <h3>Send this page to look at later</h3>
                <p>Type in your email below and we'll send this page for you to browse on your own time!</p>
                <div class='input'>
                  <label>First Name</label>
                  <input type='text' v-model='first_name' placeholder='First name...'>
                </div>
                <div class='input'>
                  <label>Last Name</label>
                  <input type='text' v-model='last_name' placeholder='Lsst name...'>
                </div>
                <div class='input'>
                  <label>Email Address</label>
                  <input type="email" v-model='email' placeholder='Your email here...'>
                </div>
                <button @click='validate()' class='btn' :class="{inactive: !btnActive}">SHARE THE LINK!</button>
                <div class='loader' :class="{active: !btnActive }">
                    <img src="../assets/img/loader.gif">
                </div>
                <transition name='fade'>
                    <p class='success_txt' v-if='success'>Link is on it's way!</p>
                </transition>
            </div>
        </div>
      </transition>
    </div>
</template>

<script type="text/javascript">
    import axios from 'axios';
    require('es6-promise').polyfill();
    const fb = require('../firebaseConfig.js');
    const db = fb.default.db;

    export default {
        props: ['link'],
        data(){
            return {
                mandrillKey: 'lfBGkNw39MvrqzkmQuhvAg',
                success: null,
                email: '',
                sendLink: false,
                showCover: true,
                homepage: true,
                nextPage: true,
                hideNav: true,
                btnActive: true,
                first_name: '',
                last_name: ''
            }
        },
        methods: {
            saveEmail(){
              let vm = this;
              let id = db.collection('pageSends').doc().id;
              let kioskId = localStorage.getItem('id');
              db.collection('pageSends')
                .doc(id)
                .set({
                  email: this.email, 
                  timeRefs: this.calcTimes(), 
                  page: this.$route.name, 
                  created: Date.now(), 
                  name: 'Page Share',
                  first_name: this.first_name,
                  last_name: this.last_name, 
                  kiosk: this.$route.params.kioskId, 
                  kioskId: kioskId })
                .then(() => {
                    vm.success = true;
                    setTimeout(function(){
                      vm.sendLink = false;
                    }, 5000);
                })
            },
            validate(){
              let valid = true;
              if (this.first_name.length < 1) {
                alert('Please enter your first name!');
                valid = false;
              }

              if (this.last_name.length < 1 && valid) {
                alert('Please enter your last name!');
                valid = false;
              }

              if (this.email.length < 1 && valid) {
                alert('Please enter a valid email address!');
              }

              if (valid){
                this.sendEmail();
              }

            },
            sendEmail(){
                this.btnActive = false;
                let vm = this;
              var data = {
                key: this.mandrillKey,
                template_name: 'braunability-page-share',
                template_content: {},
                message: {
                  from_email: 'braunability@popshap.com',
                  to: [
                    {
                      email: this.email,
                      type: 'to',
                    },
                  ],
                  global_merge_vars: [
                    {
                      name: 'link',
                      content: this.link,
                    },
                  ],
                },
                merge: true,
              };

              axios
                .post(
                  'https://mandrillapp.com/api/1.0/messages/send-template.json',
                  data
                )
                .then(function(response) {
                  vm.saveEmail();
                  vm.btnActive = true;
                })
                .catch(function(error) {
                  console.log(error)
                  alert('Please enter a valid email address');
                  vm.btnActive = true;
                });
            },
        },
        created(){
        }
    }
</script>

<style>
    .inactive {
        pointer-events: none;
    }

    .holder {
        padding-bottom: 0 !important;
    }

    .loader{
        width: 100%;
        text-align: center;
    }

    .loader img {
        height: 100px;
        opacity: 0;
        transition: opacity .3s;
    }

    .loader.active img {
        opacity: 1;
    }
</style>

