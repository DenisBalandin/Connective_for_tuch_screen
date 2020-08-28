<template>
	<div class='not_found'>
      <transition name='fade'>
        <div class='popup top_flow'>
            <div class='holder'>
                <h3>Please select a kiosk below</h3>
                <div class='kiosks'>
                  <div 
                  v-for='k in kiosks'
                  class='kiosk'
                  @click='startKiosk(k)'>
                    <div>
                      <p>{{k.name}}</p>
                      <p>{{k.description}}</p>
                    </div>
                    <img class='arr' src="../assets/img/arr.svg">
                  </div>
                </div>
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
    var firestore = db;


    export default {
        props: ['link'],
        data(){
            return {
                btnActive: true,
                kiosks: null,

            }
        },
        methods: {
            startKiosk(k){
              this.$router.push({ path: '/kiosk/'+k.slug+'/home' });
            }
        },
        firestore: function () {
          return {
              kiosks: firestore.collection('kiosks')
          }
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

    .not_found .popup {
      background-color: #e2e7f3;
    }

    .popup.top_flow {
      align-items: flex-start;
    }

    .popup.top_flow .holder {
      width: 800px;
      background-color: transparent;
    }

    .kiosks { 
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
    }

    .kiosks .kiosk {
      background-color: white;
      box-shadow: 0px 0px 7px #80808033;
      padding: 30px;
      margin-bottom: 10px;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    .kiosks .kiosk p {
      margin: 0;
      font-size: 17px;
    }
    .kiosks .kiosk p:first-child {
      font-weight: bold;
      margin-bottom: 5px;
      font-size: 22px;
    }

    .kiosks .kiosk .arr {
      height: 30px;
      filter: brightness(0.9);
    }
</style>