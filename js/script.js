// Função de Like dos Posts
const postLike = document.getElementsByClassName('post-content')
function like(value) {
    let heart = document.getElementById(value)
    postLike[value - 1].setAttribute('class', 'post-content liked')
    let classe = heart.classList[0]
    if (classe == 'fa-regular') {
        heart.removeAttribute('class', classe)
        heart.setAttribute('class', 'fa-solid fa-heart fa-xl')
    } else {
        heart.removeAttribute('class', classe)
        heart.setAttribute('class', 'fa-regular fa-heart fa-xl')
        postLike[value - 1].setAttribute('class', 'post-content')
    }

}
// Mostrar/Ocultar comentários
const comentario = document.getElementById('comment')
let mostrar = false
function vercomentario() {
    if (mostrar == false) {
        comentario.removeAttribute('class', 'hide')
        comentario.setAttribute('class', 'show')
        mostrar = true
    } else {
        comentario.removeAttribute('class', 'show')
        comentario.setAttribute('class', 'hide')
        mostrar = false
    }
}
// Relógio Funcional
setInterval(function Clock() {
    const relogio = document.getElementById('relogio')
    let d = new Date()
    let h = d.getHours()
    let hh = h
    let m = d.getMinutes()
    let mm = m
    let s = d.getSeconds()
    let ss = s
    if (h < 10) {
        hh = '0' + h
    }
    if (m < 10) {
        mm = '0' + m
    }
    if (s < 10) {
        ss = '0' + s
    }
    relogio.innerHTML = `${hh}:${mm}`
}, 1000)
