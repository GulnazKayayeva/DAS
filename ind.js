let green = document.querySelector('.itemgreen')
let sil = document.querySelector('.itemsilver')
let gold = document.querySelector('.itemgold')
let graph = document.querySelector('.itemgraphite')
let bl = document.querySelector('.itemblue')
let a = document.querySelector('.first')
 
green.onclick = () => {
    a.setAttribute('src','./img/iphone-13-pro-green-select.png')
    green.classList.add('itemPlus')
    sil.classList.remove('itemPlus')
    gold.classList.remove('itemPlus')
    graph.classList.remove('itemPlus')
    bl.classList.remove('itemPlus')

}

sil.onclick = () => {
    a.setAttribute('src','./img/iphone-13-pro-silver-select.png')
    sil.classList.add('itemPlus')
    green.classList.remove('itemPlus')
    gold.classList.remove('itemPlus')
    graph.classList.remove('itemPlus')
    bl.classList.remove('itemPlus')

}

gold.onclick  = () => {
    a.setAttribute('src','./img/iphone-13-pro-gold-select.png')
    gold.classList.add('itemPlus')
    green.classList.remove('itemPlus')
    sil.classList.remove('itemPlus')
    graph.classList.remove('itemPlus')
    bl.classList.remove('itemPlus')
}
graph.onclick  = () => {
    a.setAttribute('src','./img/iphone-13-pro-graphite-select.png')
    graph.classList.add('itemPlus')
    green.classList.remove('itemPlus')
    gold.classList.remove('itemPlus')
    gold.classList.remove('itemPlus')
    bl.classList.remove('itemPlus')
}
bl.onclick = () => {
    a.setAttribute('src','./img/iphone-13-pro-blue-select.png')
    bl.classList.add('itemPlus')
    green.classList.remove('itemPlus')
    gold.classList.remove('itemPlus')
    graph.classList.remove('itemPlus')
    sil.classList.remove('itemPlus')
}

