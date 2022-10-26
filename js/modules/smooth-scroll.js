export default function initScrollSuave() {
  const navItens = document.querySelectorAll("[data-scroll='smooth']")

  navItens.forEach((itens) => {
    itens.addEventListener("click", (e) => {
      e.preventDefault()
      const href = e.currentTarget.getAttribute("href")
      const sections = document.querySelector(href)
      console.log(sections)

      sections.scrollIntoView({
        behavior: "smooth",
        block: "end"
      })
    })
  })
}