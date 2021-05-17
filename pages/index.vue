<template>
  <div>
    <div v-if="homepage" class="homepage">
      <!-- <Notification v-if="notify" @click="closealert" /> -->
      <div v-if="notify" :class="{ leaveanime: notifyClassLeave }" class="alert">
        <div class="left">
          <div class="badge">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00033 1.99996C4.68662 1.99996 2.00033 4.68625 2.00033 7.99996C2.00033 11.3137 4.68662 14 8.00033 14C11.314 14 14.0003 11.3137 14.0003 7.99996C14.0003 4.68625 11.314 1.99996 8.00033 1.99996ZM0.666992 7.99996C0.666992 3.94987 3.95024 0.666626 8.00033 0.666626C12.0504 0.666626 15.3337 3.94987 15.3337 7.99996C15.3337 12.05 12.0504 15.3333 8.00033 15.3333C3.95024 15.3333 0.666992 12.05 0.666992 7.99996ZM8.00033 7.33329C8.36852 7.33329 8.66699 7.63177 8.66699 7.99996V10.6666C8.66699 11.0348 8.36852 11.3333 8.00033 11.3333C7.63214 11.3333 7.33366 11.0348 7.33366 10.6666V7.99996C7.33366 7.63177 7.63214 7.33329 8.00033 7.33329ZM8.00033 4.66663C7.63214 4.66663 7.33366 4.9651 7.33366 5.33329C7.33366 5.70148 7.63214 5.99996 8.00033 5.99996H8.00699C8.37518 5.99996 8.67366 5.70148 8.67366 5.33329C8.67366 4.9651 8.37518 4.66663 8.00699 4.66663H8.00033Z" fill="white" />
            </svg>
          </div>
          <p><strong>{{ messagestrong }} </strong>{{ message }}</p>
        </div>
        <div class="right" @click="closealert">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.1968 3.80331C11.9373 3.54374 11.5164 3.54374 11.2568 3.80331L8.00016 7.05998L4.7435 3.80331C4.48392 3.54374 4.06307 3.54374 3.8035 3.80331C3.54392 4.06289 3.54392 4.48374 3.8035 4.74331L7.06016 7.99998L3.83218 11.228C3.55676 11.5034 3.55677 11.9499 3.83218 12.2253C4.07591 12.4691 4.47108 12.4691 4.71481 12.2253L8.00016 8.93998L11.2568 12.1966C11.5164 12.4562 11.9373 12.4562 12.1968 12.1966C12.4564 11.9371 12.4564 11.5162 12.1968 11.2566L8.94016 7.99998L12.1968 4.74331C12.4564 4.48374 12.4564 4.06289 12.1968 3.80331Z" fill="#EB5757" />
          </svg>
        </div>
      </div>
      <img src="/logo.svg" alt="">
      <div class="entry--inner">
        <div class="entry--inner--left">
          <h1 class="inner--head">
            Class54 is a Personalised and adaptive learning platform that is
            optimised to help you prepare for examinations.
          </h1>
          <p class="inner--content">
            We are building a one-stop shop for examination preparations, School
            admissions for Pre-college, Undergraduate and Post-graduate levels.
          </p>
          <form
            method="post"
            @submit.prevent="checkForm"
          >
            <div class="inner--form">
              <p class="form--label">
                Signup below to get notified when we launch
              </p>
              <div class="form--group">
                <input
                  id="formemail"
                  v-model="email"
                  type="text"
                  name="formemail"
                  class="btn-outline"
                  placeholder="imoleolu2012@gmail.com"
                >
                <button id="notify" type="submit" class="formsubmit btn-primary">
                  Notify Me <i v-if="spinner" class="fas fa-spinner fa-spin" />
                </button>
              </div>
              <p class="enquiry">
                Have an enquiry? Email us at
                <span
                  class="email"
                ><a href="mailto:info@class54.com">info@class54.com</a></span>
              </p>
            </div>
          </form>
        </div>
        <img
          src="/herobanner.png"
          alt="Coming Soon on the following platform"
          class="herobanner"
        >
      </div>
      <p class="foot">
        Copyright © 2021. Class54 Education LTD.
      </p>
    </div>
    <div v-if="modal" id="myModal" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
        <span id="close" @click="close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.295 5.705C17.9056 5.31564 17.2744 5.31564 16.885 5.705L12 10.59L7.115 5.705C6.72564 5.31564 6.09436 5.31564 5.705 5.705C5.31564 6.09436 5.31564 6.72564 5.705 7.115L10.59 12L5.74803 16.842C5.3349 17.2551 5.3349 17.9249 5.74803 18.338C6.11363 18.7036 6.70637 18.7036 7.07197 18.338L12 13.41L16.885 18.295C17.2744 18.6844 17.9056 18.6844 18.295 18.295C18.6844 17.9056 18.6844 17.2744 18.295 16.885L13.41 12L18.295 7.115C18.6844 6.72564 18.6844 6.09436 18.295 5.705Z" fill="#343A40" />
          </svg>
        </span>
        <div class="mailicon">
          <img src="/mailIcon.png" alt="">
        </div>
        <p class="modal--head">
          Thank you!
        </p>
        <p class="modal--content">
          You will now be among the exclusive list of people to be notified once we launch soon.
        </p>
        <div class="okay" @click="close">
          <button class="btn-primary okaybtn">
            Okay
          </button>
        </div>
      </div>
    </div>
    <Loader v-if="loader">
      <template slot="col-4">
        {{ loadertext }}
      </template>
    </Loader>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      modal: false,
      errors: [],
      notify: false,
      notifyClassLeave: false,
      message: '',
      messagestrong: '',
      loader: false,
      homepage: true,
      loadertext: '',
      spinner: false
    }
  },
  methods: {
    checkForm (e) {
      if (this.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/)) {
        this.spinner = true
        this.sendEmail()
      } else {
        this.notify = true
        this.messagestrong = 'Invalid Email:'
        this.message = 'Kindly check and try again.'
        setTimeout(() => {
          this.notifyClassLeave = true
        }, 5000)
        setTimeout(() => {
          this.notify = false
          this.notifyClassLeave = false
        }, 6000)
      }
      e.preventDefault()
    },
    close () {
      this.modal = false
    },
    closealert () {
      this.notifyClassLeave = true
      setTimeout(() => {
        this.notify = false
        this.notifyClassLeave = false
      }, 100)
    },
    async sendEmail () {
      try {
        const formData = new FormData()
        formData.append('email', this.email)
        await this.$axios.post(`https://class54-backend.herokuapp.com/admin/notify/create?.${this.email}`,
          formData
        ).then((response) => {
          // console.log(response)
          // this.homepage = false
          // this.loadertext = 'Submitting...'
          // this.loader = true
          this.modal = true
          this.spinner = false
          // setTimeout(() => {
          //   if (response.data.sucess === true) {
          //     this.homepage = true
          //     this.loader = false
          //     this.modal = true
          //   }
          // }, 3000)

          this.email = ''
        })
      } catch (e) {
        console.log('Your email has been taken')
        this.notify = true
        this.messagestrong = 'Email has been taken:'
        this.message = 'Try with another email'
        setTimeout(() => {
          this.notifyClassLeave = true
        }, 5000)
        setTimeout(() => {
          this.notify = false
          this.notifyClassLeave = false
        }, 6000)
      }
    }
  }
}
</script>

<style>
body {
  background: url(/Patterns.png),
    linear-gradient(180deg, #e3fff1 -82.57%, #ffffff 100%);
  margin: 0;
  margin: 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100%;
  background-position: bottom 0 left -10px;
  overflow: auto;
}
</style>
