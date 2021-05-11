<template>
  <div>
    <client-only>
      <div id="activateod">
        <Header />
        <div class="inner--cards entry--container-flex">
          <div class="card download-next">
            <div class="activate-download">
              <div class="activate_download--left">
                <p class="header-item">
                  Activate your App
                </p>
                <input v-model="amount" name="amount" hidden value="2000">
                <div class="form-group">
                  <input
                    id=""
                    class="btn-outline proceed"
                    type="text"
                    name="serial"
                    required
                    placeholder="e.g. W435-635-773"
                  >
                  <label for="serial">10-Digit unique serial number</label>
                </div>
                <div class="form-group">
                  <input
                    id=""
                    v-model="phone"
                    required
                    class="btn-outline proceed"
                    type="phone"
                    name="phone"
                    placeholder="0810242546"
                  >
                  <label for="serial">Phone number</label>
                </div>
                <paystack
                  :amount="amount * 100"
                  :email="phone + '@class54.com'"
                  :paystackkey="PUBLIC_KEY"
                  :reference="reference"
                  :callback="processPayment"
                  :close="close"
                  :embed="false"
                  class="btn-primary proceed"
                  :initialize="beforePayment"
                >
                  <i class="fas fa-money-bill-alt" />
                  Make Payment
                </paystack>
                <!-- <button type="submit" class="btn-primary proceed">Proceed</button> -->
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
    </client-only>
  </div>
</template>

<script>

// import paystack from 'vue-paystack'
// const paystack = require('vue-paystack')

export default {
  components: {
    paystack: () => {
      if (process.client) { return import('vue-paystack') }
    }
  },
  data: () => {
    return {
      amount: '2000',
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
    processPayment: () => {
      // this.afterPayment()
      // window.alert('Payment recieved')
      window.location = '/activatingpayment'
    },
    close: () => {
      // eslint-disable-next-line no-console
      console.log('You closed checkout page')
      window.location = '/paymentfailed'
    },
    async afterPayment () {
      try {
        const formData = new FormData()
        formData.append('email', this.email)
        await this.$axios.post('https://class54-backend.herokuapp.com/admin/desktop-subscription/payment/verification',
          formData
        ).then((response) => {
          console.log(response.data)
          this.modal = true
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
