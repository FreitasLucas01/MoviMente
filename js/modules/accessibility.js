export default function initAccessibility() {
  const btn = document.querySelector("[data-menu='button']")
  const links = document.querySelectorAll("[data-menu='list'] li")
  const btnList = document.querySelector("[data-menu='list']")
  const btnBigLine = document.querySelectorAll("[data-menu='big-line']")
  const btnSmallLine = document.querySelector("[data-menu='small-line']")
  
  function handleClick(e) {
    if (e.type === "touchstart")
      e.preventDefault()
    btnList.classList.toggle("ativo")
    btnBigLine.forEach(itens => {
      itens.classList.toggle("ativo")
    })
    btnSmallLine.classList.toggle("ativo")
    const ativo = btnList.classList.contains("ativo")
    btn.setAttribute("aria-expanded", ativo)
    if (ativo)
      btn.setAttribute("aria-label", "Fechar Menu")
    else
      btn.setAttribute("aria-label", "Abrir Menu")
  }
  links.forEach(itens => {
    itens.addEventListener("click", handleClick)
  })
}