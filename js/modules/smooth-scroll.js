export default function initScrollSuave() {
  const links = document.querySelectorAll("[data-scroll='smooth']");

  function handleClick(e) {
    e.preventDefault()
    const href = this.getAttribute("href")
    const sections = document.querySelector(href)
    const topSection = sections.offsetTop - 420

    window.scrollTo({
      top: topSection,
      behavior: "smooth"
    })
  }

  links.forEach((itens) => {
    itens.addEventListener("click", handleClick)
  })
}