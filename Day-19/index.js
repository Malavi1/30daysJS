  const scriptURL = 'https://script.google.com/macros/s/AKfycby7a4hOvhjpk7NDIR9jkah9W2fdv49TNJ6aSCyXJ5W2kzVZDfYdm3cGxqbu3ERCJVk_mg/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
