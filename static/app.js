
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

// const hammobileicon = document.getElementById('hammobileicon')
// const closeicon = document.getElementById('closeicon')
// const menunav = document.getElementById('menunav')

// hammobileicon.onclick = function () {
//   // console.log('sdsds')
//   closeicon.classList.add('rotated')
//   closeicon.style.display = 'block'
//   menunav.style.display = 'grid'
//   hammobileicon.style.display = 'none'
// }
// closeicon.onclick = function () {
//   console.log('sdsds')
//   hammobileicon.classList.add('rotated')
//   hammobileicon.style.display = 'block'
//   menunav.style.display = 'none'
//   closeicon.style.display = 'none'
// }
