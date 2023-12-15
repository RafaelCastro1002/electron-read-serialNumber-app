const btn = document.getElementById('btn')
const filePathElement = document.getElementById('filePath')
const loading = document.getElementById('loading')
const alertError = document.getElementById('alert-error')

btn.addEventListener('click', async () => {
  filePathElement.innerText = ''
  try {
    loading.style.visibility = 'visible'
    const filePath = await window.electronAPI.getSerialNumber()
    filePathElement.innerText = filePath
    alertError.innerText = ''
  } catch (err) {
    const errorMessage = err.message.split('Error:')[1];
    alertError.innerText = errorMessage
  } finally {
    loading.style.visibility = 'hidden'
  }
})