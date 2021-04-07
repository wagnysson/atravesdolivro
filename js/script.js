const sandwich = document.querySelector('.sandwich')
const menupc = document.querySelector('.itemmenu')
const menul = document.querySelector('.menul')
const menur = document.querySelector('.menur')
const menu = document.querySelector('.menu')
const fundomenu = document.querySelector('.fundomenu')


sandwich.addEventListener('click', function() {
    if (menupc.style.display !== 'flex') {
        menupc.style.display = 'flex'
        menul.style.display = 'flex'
        menur.style.display = 'flex'
        menu.style.height = '230px'
        fundomenu.style.display = 'block'
    } else {
        menupc.style.display = ''
        menul.style.display = ''
        menur.style.display = ''
        menu.style.height = ''
        fundomenu.style.display = ''
    }
})

// const tamanhodesc1 = document.querySelector('.anac')
// const tamanhodesc2 = document.querySelector('.debora')
// const tamanhodesc3 = document.querySelector('.wag')
// const tamanhopanac = document.querySelector('.anac p.text')
// const tamanhopdeb = document.querySelector('.debora p.text')
// const tamanhopwag = document.querySelector('.wag p.text')

// if (window.matchMedia("(max-width:1000px)").matches) {
//     if (tamanhodesc1.style.height != tamanhopanac.style.height) {
//         tamanhodesc1.style.height = tamanhopanac.style.height
//     }
// }

// if (window.matchMedia("(max-width:1000px)").matches) {
//     if (tamanhodesc2.style.height != tamanhopdeb.style.height) {
//         tamanhodesc2.style.height = tamanhopdeb.style.height
//     }
// }