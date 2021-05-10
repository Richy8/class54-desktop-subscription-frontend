<template>
  <div v-if="modal" id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <span id="close" @click="close">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.295 5.705C17.9056 5.31564 17.2744 5.31564 16.885 5.705L12 10.59L7.115 5.705C6.72564 5.31564 6.09436 5.31564 5.705 5.705C5.31564 6.09436 5.31564 6.72564 5.705 7.115L10.59 12L5.74803 16.842C5.3349 17.2551 5.3349 17.9249 5.74803 18.338C6.11363 18.7036 6.70637 18.7036 7.07197 18.338L12 13.41L16.885 18.295C17.2744 18.6844 17.9056 18.6844 18.295 18.295C18.6844 17.9056 18.6844 17.2744 18.295 16.885L13.41 12L18.295 7.115C18.6844 6.72564 18.6844 6.09436 18.295 5.705Z" fill="#343A40" />
        </svg>
      </span>
      <div class="mailicon">
        <img src="/images/mailIcon.png" alt="">
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
</template>
