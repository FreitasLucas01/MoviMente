export default function initModal() {
  const video = document.querySelector("[data-modal='video-img']")
  const modal = document.querySelector("[data-modal='video-container']")
  const btnClose = document.querySelector("[data-modal='close']")
  const events = ["touchstart", "click"]

  function handleOpen(e) {
    if (e.type === "touchstart")
      e.preventDefault()
    modal.classList.add("ativo")
  }

  events.forEach(allEvents => {
    video.addEventListener(allEvents, handleOpen)
  })

  function handleClose(e) {
    if (e.type === "touchstart")
      e.preventDefault()
    modal.classList.remove("ativo")
  }

  events.forEach(allEvents => {
    btnClose.addEventListener(allEvents, handleClose)
  })
}