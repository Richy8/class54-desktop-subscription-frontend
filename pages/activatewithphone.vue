<template>
  <div>
    <client-only>
      <div v-if="payment" id="activateod">
        <Header />
        <div class="inner-container entry--container-flex">
          <div class="enter-phone">
            <div class="enter-phone__content">
              <p class="header-item">
                Enter your phone number to continue
              </p>
              <!-- <form action="/pending.html" method="get"> -->
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
                  minlength="11"
                  maxlength="11"
                  @input="acceptNumber"
                />
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
                :class="{ btnprimary: btnprimary }"
                style="margin-top: 28px"
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
    <Activationcode v-if="activation">
      <template slot="col-1">
        {{ activation_code }}
      </template>
      <template slot="col-2">
        <span v-if="tooltip" class="tooltiptext">Copied</span>
      </template>
      <template slot="col-3">
        <img
          id="clipselect"
          src="/clipboard.svg"
          alt=""
          height="20"
          @click="clipimage"
        />
      </template>
    </Activationcode>
  </div>
</template>

<script>
// import paystack from 'vue-paystack'
// const paystack = require('vue-paystack')

export default {
  components: {
    paystack: () => {
      if (process.client) {
        return import("vue-paystack");
      }
    }
  },
  data: () => {
    return {
      amount: "2000",
      email: "zenzy56@gmail.com",
      phone: "",
      PUBLIC_KEY: "pk_test_7ec5ca2a828fc887b0a394b93a6d814725d7c0e5",
      payment: true,
      loader: false,
      error: false,
      errorclass: false,
      disabled: false,
      activation_code: "",
      activation: false,
      btnprimary: false,
      tooltip: false,
      loadertext: ""
    };
  },
  computed: {
    reference() {
      let text = "";
      const possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < 10; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    },
    serial() {
      return this.$route.query.serial;
    },
    machine() {
      return this.$route.query.machine;
    }
  },
  mounted() {
    this.$router.push({
      path: "/activatewithphone",
      query: {
        serial: this.$route.query.serial,
        machine: this.$route.query.machine
      },
      params: { errors: "123" }
    });
  },
  methods: {
    async processPayment(data) {
      console.log(data.status);
      if (data.status === "success") {
        this.payment = false;
        this.loader = true;
        this.loadertext =
          "Kindly wait while we automatically activate your App";
        await this.beforePayment();
        await this.afterPayment();
        this.loader = false;
        this.activation = true;
        // window.location = '/confirmation'
        // this.$router.push(`/activation_code/:id?${this.activation_code}`)
      } else {
        window.location = "/paymentfailed";
      }
    },
    close: () => {
      // eslint-disable-next-line no-console
      console.log("You closed checkout page");
      window.location = "/paymentfailed";
    },
    async afterPayment() {
      try {
        const formData = new FormData();
        formData.append("transaction_ref", this.reference);
        await this.$axios
          .post(
            "http://3.142.39.206/admin/desktop-subscription/payment/verification",
            formData
            // eslint-disable-next-line no-console
          )
          .then(response => {
            console.log(response.data);
            this.activation_code = response.data.activation_code;
            this.modal = true;
          });
      } catch (e) {
        this.snackbar = {
          message: "There was an error",
          color: "error",
          show: true
        };
      }
    },
    async beforePayment() {
      try {
        const formData = new FormData();
        formData.append("transaction_ref", this.reference);
        formData.append("serial", this.serial);
        formData.append("machineid", this.machine);
        formData.append("amount", this.amount);
        formData.append("phone_no", this.phone);
        formData.append("transaction_ref", this.reference);
        await this.$axios
          .post(
            "http://3.142.39.206/admin/activate",
            formData
            // eslint-disable-next-line no-console
          )
          .then(response => {
            console.log(response.data);
            this.modal = true;
          });
      } catch (e) {
        this.snackbar = {
          message: "There was an error",
          color: "error",
          show: true
        };
      }
    },
    acceptNumber() {
      if (this.phone.length < 11) {
        this.error = true;
        this.errorclass = true;
      } else if (this.phone.length === 11) {
        this.error = false;
        this.errorclass = false;
        this.disabled = true;
        this.btnprimary = true;
      }
    },
    clipimage() {
      setTimeout(() => {
        this.tooltip = true;
      }, 1000);
    }
  }
};
</script>
