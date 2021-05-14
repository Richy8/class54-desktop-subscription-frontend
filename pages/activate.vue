<template>
  <div>
    <client-only>
      <div v-if="payment" id="activateod">
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
                <div class="form-group" style="margin-bottom: 3px">
                  <input
                    id=""
                    v-model="phone"
                    required
                    class="btn-outline proceed"
                    :class="{ error: errorclass }"
                    type="tel"
                    name="phone"
                    placeholder="0810242546"
                    min-length="11"
                    maxlength="11"
                    @input="acceptNumber"
                  >
                  <label for="serial">Phone number</label>
                </div>
                <p v-if="error" class="error">
                  Phone number must be a minimum of 11 digits
                </p>
                <paystack
                  :amount="amount * 100"
                  :email="phone + '@class54.com'"
                  :paystackkey="PUBLIC_KEY"
                  :reference="reference"
                  :callback="processPayment"
                  :close="close"
                  :embed="false"
                  class="btn-disabled proceed"
                  :class="{ btnprimary : btnprimary }"
                  :initialize="beforePayment"
                  style="margin-top: 28px"
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
    <Loader v-if="loader">
      <template slot="col-4">
        {{ loadertext }}
      </template>
    </Loader>
    <Activationcode
      v-if="activation"
    >
      <template slot="col-1">
        {{ activation_code }}
      </template>
      <template slot="col-2">
        <span v-if="tooltip" class="tooltiptext">Copied</span>
      </template>
      <template slot="col-3">
        <img id="clipselect" src="/clipboard.svg" alt="" height="20" @click="clipimage">
      </template>
    </Activationcode>
    {{ $route.params.serial }}
  </div>
</template> />

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
      PUBLIC_KEY: 'pk_test_7ec5ca2a828fc887b0a394b93a6d814725d7c0e5',
      payment: true,
      loader: false,
      error: false,
      errorclass: false,
      disabled: false,
      activation_code: '',
      activation: false,
      tooltip: false,
      loadertext: '',
      btnprimary: false
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
  // http://localhost:3000/activate?serial=sddsdsds&machine=sdsdsd
  mounted () {
    this.$router.push({
      path: '/activate',
      query: { serial: this.$route.params.serial, machine: this.$route.params.machine }
    })
    // this.$router.push({ path: '/activate', query: { serial: this.$route.params.serial, machine: this.$route.params.machine } })
  },
  methods: {
    async processPayment (data) {
      console.log(data.status)
      if (data.status === 'success') {
        this.payment = false
        this.loader = true
        this.loadertext = 'Kindly wait while we automatically activate your App'
        await this.beforePayment()
        await this.afterPayment()
        this.loader = false
        this.activation = true
        // window.location = '/confirmation'
        // this.$router.push(`/activation_code/:id?${this.activation_code}`)
      } else {
        window.location = '/paymentfailed'
      }
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
          this.activation_code = response.data.activation_code
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
    async beforePayment () {
      try {
        const formData = new FormData()
        formData.append('transaction_ref', this.reference)
        formData.append('serial', 'J8F8-F73-C61')
        formData.append('machineid', 'YUIHBH7876JJl')
        formData.append('amount', this.amount)
        formData.append('phone_no', this.phone)
        formData.append('transaction_ref', this.reference)
        await this.$axios.post('https://class54-backend.herokuapp.com/admin/activate',
          formData
          // eslint-disable-next-line no-console
        ).then((response) => {
          console.log(response.data.activation_code)
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
    acceptNumber () {
      if (this.phone.length < 11) {
        this.error = true
        this.errorclass = true
      } else if (this.phone.length === 11) {
        this.error = false
        this.errorclass = false
        this.disabled = true
        this.btnprimary = true
      }
    },
    clipimage () {
      setTimeout(() => {
        this.tooltip = true
      }, 1000)
    }
  }
}
</script>
