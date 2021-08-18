import './style.css'

const div=document.querySelector('[data-js="app"]')
div.innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`
document.querySelector('[data-js="link"]').addEventListener('click',()=>{
  div.classList.toggle('off')
})