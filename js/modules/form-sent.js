export default function initAccessibility() {
  const btnForm = document.querySelector("[data-form='btn']")
  const divThank = document.querySelector("[data-form='thank']")
  const events = ["touchstart", "click"]

  function handleButton(e) {
    if (e.type === "touchstart")
      e.preventDefault()

    e.preventDefault()
    divThank.classList.add("ativo")
  }

  events.forEach(allEvents => {
    btnForm.addEventListener(allEvents, handleButton)
  })
}