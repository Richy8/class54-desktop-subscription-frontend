<template>
  <div>
    <Header />
    <div class="inner-contaidner">
      <div class="inner--cards">
        <div class="card jamb">
          <div class="jamb--head">
            <img src="/jamb.png" alt="">
            <p class="content header-item">
              Offline JAMB CBT Software (2021)
            </p>
          </div>
          <div class="jamb--body">
            Class54’s JAMB CBT PRACTICE SOFTWARE, is a Computer Testing & Preparatory Software, designed to help candidates prepare for and familiarize themselves with the coming JAMB CBT examination. We have error-free questions based on JAMB/UTME past and Expert-curated questions from 2000 to 2021. The software, which is totally offline (does NOT require internet connection to work), tracks the user, mark and score with detailed explanation and statistics of area of strength and weaknesses in all card topics the mock examination.
          </div>
          <div class="jamb--footer">
            <div class="box">
              <img src="/download-icon.png" alt="">
              <p>23,726 <span>Download</span></p>
            </div>
            <div class="box">
              <img src="/memory-icon.png" alt="">
              <p>124MB</p>
            </div>
            <button class="btn-primary downloadbtn">
              Download Now
            </button>
          </div>
        </div>
        <div class="faq-faq">
          <p class="faq--head header-item">
            Frequently asked questions
          </p>
          <div class="card" />

          <main>
            <div class="card topic">
              <div class="open">
                <h2 class="question">
                  What is Purple Seamoss?<span class="ptag">SIEBEL</span>
                </h2>
                <span class="faq-t" />
              </div>
              <p class="answer">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div class="card topic">
              <div class="open">
                <h2 class="question">
                  How do I use Purple Seasmoss?
                </h2><span class="faq-t" />
              </div>
              <p class="answer">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div class="card topic">
              <div class="open">
                <h2 class="question">
                  What are the benefits if using Purple Seasmoss?
                </h2><span class="faq-t" />
              </div>
              <p class="answer">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div class="card topic">
              <div class="open">
                <h2 class="question">
                  Where does the Purple Seamoss come from?
                </h2><span class="faq-t" />
              </div>
              <p class="answer">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </main>
        </div>
        <div class="footer">
          <p class="ft-center">
            Copyright  © 2021. Class54 Education LTD.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import jQuery from 'jquery'

export default {
  mounted: () => {
    /* FAQ Accordion */
    $('.open').click(function () {
      const container = $(this).parents('.topic')
      const answer = container.find('.answer')
      const trigger = container.find('.faq-t')

      answer.slideToggle(200)

      if (trigger.hasClass('faq-o')) {
        trigger.removeClass('faq-o')
      } else {
        trigger.addClass('faq-o')
      }

      if (container.hasClass('expanded')) {
        container.removeClass('expanded')
      } else {
        container.addClass('expanded')
      }
    })

    jQuery(document).ready(function ($) {
      $('.question').each(function () {
        $(this).attr('data-search-term', $(this).text().toLowerCase() + $(this).find('ptag').text().toLowerCase())
      })

      $('.live-search-box').on('keyup', function () {
        const searchTerm = $(this).val().toLowerCase()

        $('.question').each(function () {
          if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
            $(this).parent().parent().show()
          } else {
            $(this).parent().parent().hide()
          }
        })
      })
    })
  }
}
</script>
