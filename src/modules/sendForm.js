const sendForm = () => {
  const form = document.querySelector('#callback form')
  const validateStatuses = form.querySelectorAll('.valStat')
  const statusBlock = document.createElement('div')
  const loadText = 'Идет отправка...'
  const errorText = 'Ошибка...'
  const successText = 'Отправлено'

  console.log(validateStatuses)

  const validate = (list) => {
    let success = true

    list.forEach(input => {

      if(input.name === "fio" && (/[^а-яА-Я ]/g.test(input.value) || input.value === "" ||input.value.length < 2)){
        validateStatuses[0].textContent = "Введите имя на кириллице(не менее 2 букв)"
        success = false;
      }

      if (input.name === "tel" && (!(/^[\+]?\(?([0-9]{4})\)?([-]?)([0-9]{3})\2([0-9]{4})+$/g.test(input.value)) || input.value === "")){
        validateStatuses[1].textContent = "Введите корректный номер телефона, пример: +79374564612"
        success = false;
      }
    })

    return success
  }

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json)
  }

  const submitForm = () => {
    const formData = new FormData(form)
    const formBody = {}
    const formElements = form.querySelectorAll('input')


    formData.forEach((val, key) => [
      formBody[key] = val
    ])

    if(validate(formElements)) {
      statusBlock.textContent = loadText
      form.append(statusBlock)
      sendData(formBody)
        .then(data => {
          statusBlock.textContent = successText

          formElements.forEach(input => {
            input.value = ''
            validateStatuses[0].textContent = ''
            validateStatuses[1].textContent = ''
          })
      })
        .catch(error => {
          statusBlock.textContent = errorText
        })
    }
  }

  try {
    if(!form) {
      throw new Error('Верните форму на место')
    }
    form.addEventListener('submit', (event) => {
      event.preventDefault()

      submitForm()
    })
  } catch (error) {
    console.log(error.message)
  }

}

export default sendForm;
