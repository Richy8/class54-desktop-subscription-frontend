<template>
  <div>
    <Header />
    <div class="inner--cards entry--container-flex">
      <div class="card download-next">
        <div class="activate-download">
          <div class="activate_download--left">
            <p class="header-item">
              Activate your App
            </p>
            <form>
              <input v-model="amount" name="amount" hidden value="2000">
              <div class="form-group">
                <input
                  id=""
                  class="btn-outline proceed"
                  type="text"
                  name="serial"
                  placeholder="e.g. W435-635-773"
                >
                <label for="serial">10-Digit unique serial number</label>
              </div>
              <div class="form-group">
                <input
                  id=""
                  v-model="email"
                  required
                  class="btn-outline proceed"
                  type="email"
                  name="phone"
                  placeholder="0810242546|"
                >
                <label for="serial">Phone number</label>
              </div>
              <!-- <paystack
              :amount="amount * 100"
              :email="phone + '@class54.com'"
              :paystackkey="PUBLIC_KEY"
              :reference="reference"
              :callback="processPayment"
              :close="close"
              :embed="true"
            >
              <i class="fas fa-money-bill-alt" />
              Make Payment
            </paystack> -->
              <button type="button" class="btn-primary proceed" @click.prevent="makePayment">
                Proceed
              </button>
            </form>
          </div>
          <div class="activate_download--right">
            <p class="activate__head">
              How to Activate Software
            </p>
            <ul class="activate_list">
              <li>
                Download and follow the installation wizard till installation is
                completed.
              </li>
              <li>
                Upon successful installion, launch the app and navigate to
                activation.
              </li>
              <li>Copy the Unique serial number displayed and enter it here</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer">
        <p class="ft-center">
          Copyright © 2021. Class54 Education LTD.
        </p>
      </div>
    </div>
  </div>
</template>

<script>

// import { paystack } from 'vue-paystack'
// const paystack = require('vue-paystack')
import axios from 'axios'

export default {
  // components: {
  //   paystack
  // },
  data: () => {
    return {
      amount: 2500,
      email: 'zenzy56@gmail.com',
      phone: '',
      PUBLIC_KEY: 'pk_test_7ec5ca2a828fc887b0a394b93a6d814725d7c0e5'
    }
  },
  mounted () {

  },
  methods: {
    async makePayment () {
      try {
        const tokenStr = 'sk_test_0d8afd89ef1d30e9e7977ccf290c0e33f81d82c3'
        const formData = new FormData()
        formData.append('email', this.email)
        formData.append('amount', this.amount)
        await this.$axios.post('https://api.paystack.co/transaction/initialize',
          formData,
          {
            headers: {
              Authorization: `Bearer ${tokenStr}`,
              'Content-Type': 'application/json'
            }
          }
        ).then((response) => {
          console.log(response.data.data.authorization_url)
          window.location.href = response.data.data.authorization_url
        })
      } catch (e) {
        this.snackbar = {
          message: 'There was an error',
          color: 'error',
          show: true
        }
      }
    }
  }
}
</script>
