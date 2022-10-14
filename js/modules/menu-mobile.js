export default function initMenuMobile() {
  const btn = document.querySelector("[data-menu='button']")
  const btnList = document.querySelector("[data-menu='list']")
  const btnBigLine = document.querySelectorAll("[data-menu='big-line']")
  const btnSmallLine = document.querySelector("[data-menu='small-line']")
  const events = ["touchstart", "click"]

  function handleButton(e) {
    if (e.type === "touchstart")
      e.preventDefault()
    btnList.classList.toggle("ativo")
    btnBigLine.forEach(itens => {
      itens.classList.toggle("ativo")
    })
    btnSmallLine.classList.toggle("ativo")
    const ativo = btnList.classList.contains("ativo")
    e.currentTarget.setAttribute("aria-expanded", ativo)
    if (ativo)
      e.currentTarget.setAttribute("aria-label", "Fechar Menu")
    else
      e.currentTarget.setAttribute("aria-label", "Abrir Menu")
  }

  events.forEach(allEvents => {
    btn.addEventListener(allEvents, handleButton)
  })
}