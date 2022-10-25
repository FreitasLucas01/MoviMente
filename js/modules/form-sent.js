export default function initSent() {
  const btnForm = document.querySelector("[data-form='btn']")
  const divThank = document.querySelector("[data-form='thank']")
  const inputText = document.querySelector("[data-form='input-email']")
  const events = ["touchstart", "click"]

  function handleButton(e) {
    if (e.type === "touchstart")
      e.preventDefault()

    const regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

    e.preventDefault()
    if (inputText.value.match(regex)) {
      divThank.innerHTML = "Obrigado por preencher o formulário!"
      divThank.style.color = "#FFFFFF"
      divThank.style.backgroundColor = "#70C770"
      divThank.classList.add("ativo")
      inputText.value = ""
    } else {
      divThank.innerHTML = "Favor inserir um e-mail válido"
      divThank.style.color = "#FFFFFF"
      divThank.style.backgroundColor = "#1C427E"
      divThank.classList.add("ativo")
    }
  }

  events.forEach(allEvents => {
    btnForm.addEventListener(allEvents, handleButton)
  })
}