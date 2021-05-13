<template>
  <div class="navigation">
    <div class="inner-container inner--nav">
      <div class="logo">
        <nuxt-link to="/activate">
          <img src="/Logo_small.svg" alt="">
        </nuxt-link>
        <img
          v-if="hamburger"
          id="hammobileicon"
          src="/Hamburger.svg"
          alt=""
          :class="{ rotated: hamburgerClassLeave }"
          @click="openmenu"
        >
        <img
          v-if="close"
          id="closeicon"
          src="/Close.svg"
          alt=""
          :class="{ rotated: closeClassLeave }"
          @click="closemenu"
        >
      </div>
      <div id="menunav" class="menu desk">
        <ul>
          <li>
            <nuxt-link to="/download">
              Download App
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/activate">
              Activate App
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div v-if="menunav" id="menunav" class="menu">
        <ul>
          <li>
            <nuxt-link to="/download">
              Download App
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/activate">
              Activate App
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      hamburgerClassLeave: false,
      closeClassLeave: false,
      hamburger: true,
      close: false,
      menunav: false
    }
  },
  methods: {
    openmenu () {
      this.menunav = true
      this.hamburger = false
      this.close = true
      this.hamburgerClassLeave = true
    },
    closemenu () {
      this.menunav = false
      this.hamburger = true
      this.close = false
      this.closeClassLeave = true
    }
  }
}
</script>
