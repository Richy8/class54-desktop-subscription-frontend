<template>
  <div>
    <Header />
    <div class="inner-container entry--container-flex">
      <div class="enter-confirm">
        <div class="activate-confirm">
          <img src="/check.svg" alt="" class="checkmark">
          <p class="header-item">
            Your app is now activated
          </p>
          <p class="item_inner">
            For your reference, you can copy the generated activation code below
          </p>
          <div class="clipboard">
            <input
              id="copyinput"
              class="btn-outline"
              type="text"
              name="phone"
              value="JXYS-73H-U3J"
            >
            <div class="tooltip">
              <span class="tooltiptext">Copied</span>
              <img id="clipselect" src="/clipboard.svg" alt="" height="20">
            </div>
          </div>
        </div>
        <p class="item_inner thanks">
          Thank you for choosing Class54. You can now return to the app
        </p>
      </div>
      <div class="footer">
        <p class="ft-center">
          Copyright © 2021. Class54 Education LTD.
        </p>
      </div>
    </div>
  </div>
</template>
