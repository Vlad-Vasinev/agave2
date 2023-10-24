import JustValidate from 'just-validate';
import Inputmask from "inputmask";
import { disableScroll } from '.././functions/disable-scroll';
import { enableScroll } from '.././functions/enable-scroll';

openModalInit('[js-modal-open][data-modal-name="sale-modal"]', (t, m) => { beforeSaleModal(t, m); additionalFormInputs(t, m) }, undefined, () => { appointFormInit(`.modal[data-modal-name="${name}"] form`) })
// находим все модальные окна с формами, затем вешаем на их триггеры дополнительный коллбек при первом открытии
document.querySelectorAll('.modal form').forEach((el) => {
  const name = el.closest('.modal').dataset.modalName
  openModalInit(`[js-modal-open][data-modal-name="${name}"]`, additionalFormInputs, undefined, () => { appointFormInit(`.modal[data-modal-name="${name}"] form`) })
})
openModalInit('[js-modal-open]')
closeModalInit('[js-modal-close]')


window.openModal = openModal
window.closeModal = closeModal
const grecaptchaScript = document.querySelector('script[src*="www.google.com/recaptcha"]')


// document.querySelector('header [data-modal-name="form-modal"]')?.click()

async function openModal(triggerEl, modal, beforeCallback = async () => { }, afterCallback = async () => { }, firstOpenCallback = async () => { }) {
  await beforeCallback(triggerEl, modal)

  if (!modal.classList.contains('first-opened')) {
    await firstOpenCallback(triggerEl, modal)
    modal.classList.add('first-opened')
  }

  modal.classList.add('opened')
  disableScroll(triggerEl, modal)

  await afterCallback(triggerEl, modal)
}
function closeModal() {
  document.querySelectorAll('.modal.opened').forEach((item) => {
    item.classList.remove('opened')
  })

  enableScroll()
}

function beforeSaleModal(triggerEl, modal) {
  if (triggerEl.dataset.modalHeader) {
    try {
      modal.querySelector('.modal__top span.form-request').innerText = triggerEl.dataset.modalHeader

    }
    catch (error) {
      console.error("modal header failed")
      console.error(error)
    }
  }
  if (triggerEl.dataset.modalDesc) {
    try {
      modal.querySelector('.modal__top span.h5').innerText = triggerEl.dataset.modalDesc
    }
    catch (error) {
      console.error("modal desc failed")
      console.error(error)
    }
  }
  if (triggerEl.dataset.saleId) {
    try {
      modal.querySelector('form input[name="sale-id"]').value = triggerEl.dataset.saleId
      modal.querySelector('form input[name="sale-id"]').setAttribute('value', triggerEl.dataset.saleId)
    }
    catch (error) {
      console.error("form sale-id failed")
      console.error(error)
    }
  }
}
function additionalFormInputs(triggerEl, modal) {
  if (triggerEl.dataset.formAdditional) {
    const form = modal.querySelector('form');
    form.querySelectorAll('.additional-field').forEach((el) => { el.remove() })
    try {
      const additional = JSON.parse(triggerEl.dataset.formAdditional);


      for (const key in additional) {
        if (Object.hasOwnProperty.call(additional, key)) {
          const element = additional[key];
          const input = document.createElement('input');
          input.name = key;
          input.classList.add('additional-field')
          input.style.display = 'none';
          input.setAttribute('value', element);
          form.appendChild(input);
        }
      }


    }
    catch (error) {
      console.error("additional inputs failed")
      console.error(error)
    }
  }
}

function openModalInit(selector, beforeCallback = undefined, afterCallback = undefined, firstOpenCallback = undefined) {
  document.querySelectorAll(selector).forEach((triggerEl) => {
    const modal = document.querySelector(`.modal[data-modal-name="${triggerEl.dataset.modalName}"]`)
    if (modal && !triggerEl.classList.contains('_lstr-att')) {
      triggerEl.addEventListener('click', async (e) => {
        openModal(triggerEl, modal, beforeCallback, afterCallback, firstOpenCallback)
      })
      !triggerEl.classList.add('_lstr-att')
      modal.classList.add('_inited')
    }
  })
}

function closeModalInit(selector) {
  document.querySelectorAll(selector).forEach((el) => {
    el.addEventListener('click', (e) => {
      closeModal()
    })
  })
}

// function openModalInit() {
//   document.querySelectorAll('[js-modal-open]').forEach((el) => {
//     const modal = document.querySelector(`.modal[data-modal-name="${el.dataset.modalName}"]`)
//     if (modal) {
//       el.addEventListener('click', (e) => {
//         modal.classList.add('opened')
//         modal.addEventListener('transitionend', (e) => {

//           disableScroll()
//         }, {once: true})


//       })
//       modal.classList.add('_inited')
//     }
//   })
//   document.querySelectorAll('[js-modal-close]').forEach((el) => {
//     if (el.classList.contains('modal-background') && isMobile()) {
//       return
//     }
//     el.addEventListener('click', (e) => {
//       console.log('modal close origin', e.target)
//       document.querySelectorAll('.modal.opened').forEach((item) => {
//         item.classList.remove('opened')
//         if (item.videoBannerHref) {
//           item.querySelector('.modal__body').innerHTML = ''
//         }
//       })
//       enableScroll()
//     })
//   })
// }

function appointFormInit(selector) {
  console.log('appointFormInit' + selector)
  let forms = []
  if (typeof selector === 'string') {
    forms = document.querySelectorAll(selector)
  }
  else {
    forms.push(selector)
  }

  forms.forEach((form) => {
    if (form.classList.contains('validation-attached')) {
      // console.log('validation already att')
      return
    }
    const rules = [
      {
        ruleSelector: 'input[type="tel"]',
        rules: [
          {
            rule: 'required',
            errorMessage: 'Вы не ввели телефон'
          },
        ],
        tel: true,
        telError: 'Телефон указан неверно'
      },
      {
        ruleSelector: 'input[name="name"]',
        rules: [
          {
            rule: 'required',
            errorMessage: 'Вы не ввели Имя'
          },
        ],
      },
    ]

    if (grecaptchaScript) {

      let counter = 5
      function captchaInit(form, cId) {
        if (window.grecaptcha?.render) {
          const rId = window.grecaptcha?.render(cId)
          form.dataset.rId = rId
          // console.log('renderded captcha: ', rId);
        }
        else if (counter-- != 0) {
          setTimeout(captchaInit, 300, form, cId)

        }
      }
      const captchaId = form.querySelector('.g-recaptcha')?.getAttribute('id');
      if (captchaId) {
        captchaInit(form, captchaId)
      }
    }

    validateForms(form, rules)
    form.classList.add('validation-attached')
  })

}
function validateForms(formEl, rules) {

  const form = formEl;

  if (!form) {
    console.error('Нет такого селектора!');
    return false;
  }
  if (!rules) {
    console.error('Вы не передали правила валидации!');
    return false;
  }



  const telSelector = form?.querySelector('input[type="tel"]');
  const mailSelector = form?.querySelector('input[type="email"]');
  const formRequest = form.closest('.modal').querySelectorAll('.form-request');
  const formResponse = form.closest('.modal').querySelectorAll('.form-response');
  const formResponseMsg = form.closest('.modal').querySelector('.modal__body .form-response');


  if (telSelector) {
    const inputMask = new Inputmask({
      mask: '+7 (999) 999-99-99',
      showMaskOnHover: false,
    });
    inputMask.mask(telSelector);
    for (let item of rules) {
      if (item.tel) {
        item.rules.push({
          rule: 'function',
          validator: function () {
            const phone = telSelector.inputmask.unmaskedvalue();
            return phone.length === 10;
          },
          errorMessage: item.telError
        });
      }
    }
  }
  const validation = new JustValidate(form,
    {
      errorLabelCssClass: 'ui-input__error',
      errorLabelStyle: {},
      // errorsContainer: document.querySelector('.error-field'),
      errorFieldCssClass: 'has-error',
      successFieldCssClass: 'is-valid'
    }
  );

  validation.setCurrentLocale('ru')

  for (let item of rules) {
    validation
      .addField(item.ruleSelector, item.rules);
  }
  function clearForm() {
    form.reset();

    form.querySelectorAll(".ui-input.is-focused").forEach((el) => {
      el.classList.remove('is-focused')
    });

  }
  validation.onFail(function (fields) {
    console.log(fields);
  })
  // для тестов
  // validation.onSuccess(async (e) => {
  //   form.classList.add('loading')

  //   setTimeout((params) => {
  //     // form.classList.add('hidden');
  //     form.classList.add('hidden');
  //     form.classList.remove('loading');
  //     formRequest.forEach(el => {el.classList.remove('visible'); el.classList.add('hidden')})
  //     formResponse.forEach(el => {el.classList.remove('hidden'); el.classList.add('visible')})
  //     form.dataset.redirect ? window.location.replace(form.dataset.redirect) : undefined
  //     clearForm()
  //   }, 1000);
  // })
  function showResponse() {
    formRequest.forEach(el => { el.classList.remove('visible'); el.classList.add('hidden') })
    formResponse.forEach(el => { el.classList.remove('hidden'); el.classList.add('visible') })
  }
  validation.onSuccess(async (submitEvent) => {
    let captchaExist = !!(grecaptchaScript) || !!(window.grecaptcha) 


    const captchaId = form.dataset.rId;
    if (captchaId) {
      grecaptcha.execute(captchaId)
    }
    else if (captchaExist) {
      console.error('there is no captcha in form')
    }
    const interval = setInterval(function () {
      if ((captchaExist && grecaptcha.getResponse(captchaId)) || !captchaExist) {
        clearInterval(interval)
        const data = new FormData(submitEvent.target)

        form.classList.add('loading')
        const fetchUrl = form.getAttribute('action') ? form.getAttribute('action') : '/api'
        fetch(fetchUrl, {
          method: 'POST',
          body: data
        }).then(response => {
          if (!response.ok) {
            response.json()
              .catch(() => {
                if (formResponseMsg) formResponseMsg.textContent = 'Не удалось отправить форму'
                form.classList.add('hidden')
                form.classList.remove('loading')
                showResponse()
                throw new Error(response.status);
              })
              .then(({ message }) => {
                if (formResponseMsg) formResponseMsg.textContent = message
                throw new Error(message || response.status);
              });
            clearForm()
          }
          else {
            // if(formResponseMsg) formResponseMsg.textContent = response.json();
            // form.classList.add('hidden');
            // form.classList.remove('loading');
            // showResponse()
            form.dataset.redirect ? window.location.replace(form.dataset.redirect) : undefined
            clearForm()
          }

        });

      }
    }, 1000)
  })

};

