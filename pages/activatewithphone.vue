<template>
  <div>
    <client-only>
      <div id="activateod">
        <Header />
        <div class="inner-container entry--container-flex">
          <div class="enter-phone">
            <div class="enter-phone__content">
              <p class="header-item">
                Enter your phone number to continue
              </p>
              <!-- <form action="/pending.html" method="get"> -->
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
                @click="beforePayment"
              >
                <i class="fas fa-money-bill-alt" />
                Make Payment
              </paystack>
              <!-- </form> -->
            </div>
          </div>
          <div class="footer">
            <p class="ft-center">
              Copyright  © 2021. Class54 Education LTD.
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
    async processPayment (data) {
      console.log(data, this)
      await this.afterPayment()
      window.alert('Payment recieved')
    //   window.location = '/activatingpayment'
    },
    close: () => {
      // eslint-disable-next-line no-console
      console.log('You closed checkout page')
      window.location = '/paymentfailed'
    },
    async afterPayment () {
      try {
        const formData = new FormData()
        formData.append('transaction_ref', this.reference)
        await this.$axios.post('https://class54-backend.herokuapp.com/admin/desktop-subscription/payment/verification',
          formData
          // eslint-disable-next-line no-console
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
    },
    beforePayment () {
      console.log('sdsdsd')
    }
  }
}
</script>
