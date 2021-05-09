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
            <form method="post" @submit.prevent="makePayment">
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
              <button type="submit" class="btn-primary proceed">
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
  computed: {
    reference () {
      let text = ''
      const possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      for (let i = 0; i < 10; i++) { text += possible.charAt(Math.floor(Math.random() * possible.length)) }
      return text
    }
  },
  mounted () {

  },
  methods: {
    async makePayment () {
      try {
        const tokenStr = 'pk_test_7ec5ca2a828fc887b0a394b93a6d814725d7c0e5'
        const formData = new FormData()
        formData.append('email', this.email)
        formData.append('amount', this.amount)
        await this.$axios.post('https://api.paystack.co/transaction/initialize',
          formData,
          {
            headers: {
              'Access-Control-Allow-Origin': '*',
              Authorization: `Bearer ${tokenStr}`,
              'Content-Type': 'application/json'
            }
          }
        )
        this.snackbar = {
          message: 'Book Saved Successfully',
          color: 'primary',
          show: true
        }
        this.$router.push({ name: 'books' })
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
