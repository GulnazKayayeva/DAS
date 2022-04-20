let green = document.querySelector('.itemgreen')
let sil = document.querySelector('.itemsilver')
let gold = document.querySelector('.itemgold')
let graph = document.querySelector('.itemgraphite')
let bl = document.querySelector('.itemblue')
let a = document.querySelector('.first')

// let b = [green,sil,gold,graph,bl]

// for(let item of b){
//     item.onclick = () => {
//          if(item === green){
//              a.setAttribute('src','./img/iphone-13-pro-green-select.png')
//             item.classList.toggle('itemPlus')
//          } else {
//             a.setAttribute('src','./img/iphone-13-pro-silver-select.png')
//             item.classList.toggle('itemPlus')
//         }
//          }
//     }
// }

// green.onclick = () => {
   
// }

// sil.onclick = () => {
//     a.setAttribute('src','./img/iphone-13-pro-silver-select.png')
//     sil.classList.toggle('itemPlus')
// }

 
green.onclick = () => {
    a.setAttribute('src','./img/iphone-13-pro-green-select.png')
}

sil.onclick = () => {
    a.setAttribute('src','./img/iphone-13-pro-silver-select.png')
}

gold.onclick  = () => {
    a.setAttribute('src','./img/iphone-13-pro-gold-select.png')
}
graph.onclick  = () => {
    a.setAttribute('src','./img/iphone-13-pro-graphite-select.png')
}
bl.onclick = () => {
    a.setAttribute('src','./img/iphone-13-pro-blue-select.png')
}

