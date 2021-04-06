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