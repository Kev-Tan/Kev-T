const hamburger = document.querySelector('.hamburger')
const mobileNavbar = document.querySelector('.mobile-navbar')
const exit = document.querySelector('.exit-navbar')
const mobileLinks = document.querySelectorAll('.mobile-link')

hamburger.addEventListener("click", () => {
  mobileNavbar.classList.toggle('move-in')
})

exit.addEventListener("click", () => {
  mobileNavbar.classList.toggle('move-in')
})

for (let i = 0; i < mobileLinks.length; i++) {
  mobileLinks[i].addEventListener("click", () => {
    mobileNavbar.classList.remove('move-in')
  })
}
