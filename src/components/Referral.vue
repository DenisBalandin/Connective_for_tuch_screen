<template>
    <div>
      <div v-if='showBtn' @click='$parent.showReferral = true' class='send_btn'>
        <img class='white_icon' src="../assets/img/share.png">
        <p>Referral</p>
      </div>
      <transition name='fade'>
        <div v-if='showReferral' class='popup'>
            <div class='offclick' @click='removeReferral()'></div>
            <div class='holder'>
                <p class='close' @click='removeReferral()'>x</p>
                <h3>Who helped you out today?</h3>
                <p>Let them know you appreciated the help!</p>
                <div class='input'>
                  <label>Employee Full Name</label>
                  <input type='text' v-model='referral' placeholder='Employee name here...'>
                </div>
                <!-- <div class='input'>
                  <label>Employee</label>
                  <div @click='employeeSelect = true' class='custom_select'>
                    <p v-if='!activeEmployee.name'>Select an Employee here...</p>
                    <div class='active_emp' v-if='activeEmployee.name'>
                      <p>{{activeEmployee.name}}</p>
                    </div>
                    <img class='arr' src="../assets/img/select_arr.svg">
                  </div>
                </div> -->
                <button @click='validate()' class='btn' :class="{inactive: !btnActive}">SAVE REFERRAL!</button>
                <div class='loader' :class="{active: !btnActive }">
                    <img src="../assets/img/loader.gif">
                </div>

                <transition name='fade'>
                    <p class='success_txt' v-if='success'>Referral has been saved!!</p>
                </transition>

                <!-- <transition name='fade'>
                  <div v-if='employeeSelect' class='employee_select'>
                    <p class='close' @click='removeReferral()'>x</p>
                    <p class='desc'>Select an employee below</p>
                    <div v-for='e in employees' @click='selectEmployee(e)' class='employee' :class="{active: activeEmployee.name == e.name}">
                      <div class='emp_img' :style="{backgroundImage: 'url('+require('../assets/img/img2.jpg')+')'}"></div>
                      <p>{{e.name}}</p>
                    </div>
                  </div>
                </transition> -->
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
        props: ['showReferral', 'showBtn'],
        data(){
            return {
                employeeSelect: false,
                success: null,
                email: '',
                referral: '',
                showCover: true,
                homepage: true,
                btnActive: true,
                employees: [
                  {
                    name: 'Andrew McCrink1',
                    position: 'Position name',
                    img: '../assets/img/img2.jpg'
                  },
                  {
                    name: 'Andrew McCrink2',
                    position: 'Position name',
                    img: '../assets/img/img2.jpg'
                  },
                  {
                    name: 'Andrew McCrink3',
                    position: 'Position name',
                    img: '../assets/img/img2.jpg'
                  },
                  {
                    name: 'Andrew McCrink4',
                    position: 'Position name',
                    img: '../assets/img/img2.jpg'
                  },
                  {
                    name: 'Andrew McCrink5',
                    position: 'Position name',
                    img: '../assets/img/img2.jpg'
                  },
                  {
                    name: 'Andrew McCrink6',
                    position: 'Position name',
                    img: '../assets/img/img2.jpg'
                  }
                ],
                activeEmployee: {
                  name: '',
                  img: '',
                  position: ''
                }
            }
        },
        methods: {
          removeReferral(){
            this.$parent.showReferral = false;
            this.activeEmployee = {
              name: '',
              img: '',
              position: ''
            }
            this.success = false,
            this.email = '';
            this.success_txt = false;
          },
          selectEmployee(e) {
            let vm = this;
            this.activeEmployee = e;
            setTimeout(function(){
              vm.employeeSelect = false;
            }, 300);
          },
          saveEmail(){
            let vm = this;
            let id = db.collection('referral').doc().id;
            let kioskId = localStorage.getItem('id');
            db.collection('referral')
              .doc(id)
              .set({
                referral: this.referral, 
                created: Date.now(), 
                name: 'Referral',
                timeRefs: this.calcTimes(), 
                kioskId: kioskId, 
                kiosk: vm.$route.params.kioskId })
              .then(() => {
                  vm.success = true;
                  setTimeout(function(){
                    vm.removeReferral()
                  }, 5000);
              })
          },
          validate(){
            let send = true;
            if (this.referral.length > 0) {
              this.saveEmail();
            }else {
              send = false;
              alert('Please type in a full name!')
            }
          }
        },
        created(){
            let vm = this;
            window.setTimeout(
                function() {
                    setTimeout(function(){
                        vm.$router.push({ name: 'Home' });
                }, 500);
            }, 300000);
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

    .custom_select {
      width: 100%;
      background-color: #e2e7f3;
      border: none;
      outline: none;
      padding: 20px 30px;
      font-size: 22px;
      color: black;
      margin-top: 30px;
      box-sizing: border-box;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      position: relative;
    }

    .custom_select p {
      margin: 0;
      font-size: 22px !important;
      opacity: .3;
    }

    .custom_select p.chosen {
      opacity: 1;
    }

    .arr {
      position: absolute;
      right: 30px;
      height: 15px;
    }

    .employee_select {
      height: 100%;
      width: 100%;
      z-index: 5;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      background-color: white;
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      overflow-y: auto;
    }


    .employee_select > p.desc {
      width: 100%;
      text-align: center;
      font-size: 20px;
      color: #1f479a;
      margin-top: 75px;
    }

    .employee_select .employee:nth-child(3) {
      border-top: 2px solid #eaeaea;
    }

    .employee {
      width: 100%;
      border: 1px solid #eaeaea;
      border-left: none;
      border-right: none;
      padding: 10px 30px;
      display: flex;
      box-sizing: border-box;
      align-items: center;
      position: relative;
      transition: background-color .3s, border-color .3s;
    }

    .employee.active {
      background-color: #f78650;
    }

    .employee p {
      margin: 0;
      font-size: 20px;
      margin-left: 30px;
      font-weight: bold;
    }

    .employee .emp_img {
      height: 80px;
      width: 80px;
      border-radius: 100%;
      background-position: center center;
      background-size: cover;
    }

    .employee.active {
      background-color: rgba(247, 122, 62, 0.27);
      border-color: #f78650;
      z-index: 2;
    }

    .active_emp .emp_img {

    }

    .active_emp p {
      opacity: 1;
    }
</style>

