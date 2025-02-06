import { data } from './data.js'
import { tns } from "./tiny-slider/src/tiny-slider.js"

let pizzaCards = document.querySelector('.pizza__cards')
let comboCards = document.querySelector('.combo__cards')
let snacksCards = document.querySelector('.snacks__cards')
let dessertsCards = document.querySelector('.desserts__cards')
let drinksCards = document.querySelector('.drinks__cards')
let popularCards = document.querySelector('.popular__products')
let yearNow = document.querySelector('.help__copyright')
let modal = document.querySelector('.modal')
let additionally = modal.querySelectorAll('.card__additionally')
let svgAdditionally = modal.querySelectorAll('.additionally__svg')
let modalClose = document.querySelector('.modal__close')
let overlay = document.querySelector('.overlay')
let description = document.querySelector('.modal__selected')

function RenderPopular() {
    for (let index = 0; index < data.popular.length; index++) {
        let card = document.createElement('article')
        card.classList.add('products__card')
        card.classList.add('card')
        card.innerHTML = `<img class="card__img" src="${data.popular[index].img}" alt="${data.popular[index].name}">
                        <div class="card__info">
                            <p class="card__name">${data.popular[index].name}</p>
                            <p class="card__price">от ${data.popular[index].price} ₽</p>
                        </div>
                        `
        popularCards.appendChild(card)
    }
}
RenderPopular()

function RenderPizzas() {

    for (let index = 0; index < data.pizza.length; index++) {
        let card = document.createElement('article')
        card.classList.add('pizza__card')
        card.classList.add('card')
        card.innerHTML = `<img class="card__img" src="${data.pizza[index].img}" alt="${data.pizza[index].name}">
                        <div class="card__mobile">
                        <p class="card__title">${data.pizza[index].name}</p>
                        <p class="card__composition">${data.pizza[index].composition}</p>
                        <div class="card__buy">
                            <p class="card__price">от ${data.pizza[index]['minimal-price']} ₽</p>
                            <button class="card__button button_select">Выбрать</button>
                        </div>
                        </div>`
        toOpenModal(card.querySelector('button.card__button'))



        pizzaCards.appendChild(card)
    }

}
RenderPizzas()

function RenderCombo() {
    for (let index = 0; index < data.combo.length; index++) {
        let card = document.createElement('article')
        card.classList.add('combo__card')
        card.classList.add('card')
        card.innerHTML = `<img class="card__img" src="${data.combo[index].img}" alt="${data.combo[index].name}">
                        <div class="card__mobile">
                        <p class="card__title">${data.combo[index].name}</p>
                        <p class="card__composition">${data.combo[index].description}</p>
                        <div class="card__buy">
                            <p class="card__price">${data.combo[index]['price']} ₽</p>
                            <button class="card__button button_select">Выбрать</button>
                        </div>
                        </div>`
        toOpenModal(card.querySelector('button.card__button'))



        comboCards.appendChild(card)
    }
}
RenderCombo()

function RenderSnacks() {
    for (let index = 0; index < data.snacks.length; index++) {
        let card = document.createElement('article')
        card.classList.add('snacks__card')
        card.classList.add('card')
        card.innerHTML = `<img class="card__img" src="${data.snacks[index].img}" alt="${data.snacks[index].name}">
                        <div class="card__mobile">
                        <p class="card__title">${data.snacks[index].name}</p>
                        <p class="card__composition">${data.snacks[index].description}</p>
                        <div class="card__buy">
                            <p class="card__price">${data.snacks[index]['price']} ₽</p>
                            <button class="card__button button_select">Выбрать</button>
                        </div>
                        </div>
                        `
        toOpenModal(card.querySelector('button.card__button'))




        snacksCards.appendChild(card)
    }
}
RenderSnacks()

function RenderDesserts() {
    for (let index = 0; index < data.desserts.length; index++) {
        let card = document.createElement('article')
        card.classList.add('desserts__card')
        card.classList.add('card')
        card.innerHTML = `<img class="card__img" src="${data.desserts[index].img}" alt="${data.desserts[index].name}">
                        <div class="card__mobile">
                        <p class="card__title">${data.desserts[index].name}</p>
                        <p class="card__composition">${data.desserts[index].description}</p>
                        <div class="card__buy">
                            <p class="card__price">${data.desserts[index]['price']} ₽</p>
                            <button class="card__button button_select">Выбрать</button>
                        </div>
                        </div>`
        toOpenModal(card.querySelector('button.card__button'))




        dessertsCards.appendChild(card)
    }
}
RenderDesserts()

function RenderDrinks() {
    for (let index = 0; index < data.drinks.length; index++) {
        let card = document.createElement('article')
        card.classList.add('drinks__card')
        card.classList.add('card')
        card.innerHTML = `<img class="card__img" src="${data.drinks[index].img}" alt="${data.drinks[index].name}">
                        <div class="card__mobile">
                        <p class="card__title">${data.drinks[index].name}</p>
                        <p class="card__composition">${data.drinks[index].description}</p>
                        <div class="card__buy">
                            <p class="card__price">${data.drinks[index]['price']} ₽</p>
                            <button class="card__button button_select">Выбрать</button>
                        </div>
                        </div>`
        toOpenModal(card.querySelector('button.card__button'))


        drinksCards.appendChild(card)
    }
}
RenderDrinks()
yearNow.innerText = '© ' + new Date().getFullYear()

for (let index = 0; index < data.slider.length; index++) {
    let img = document.createElement('div')
    let slider = document.querySelector('.slider__all')
    img.innerHTML = `<img class="slider__img" src="${data.slider[index].img}" alt="">`
    slider.appendChild(img)

}


let slider = tns({
    items: 3,
    controls: false,
    gutter: 30,
    responsive: {
        0: {
            gutter: 10
        },
        800: {
            gutter: 20
        },
        1000: {
            gutter: 30
        }
    },
    center: true,
    autoWidth: true,
    container: ".slider__all",
    swipeAngle: false,
    speed: 400,
});
// console.log(description);

function toOpenModal(button) {
    // console.log(description);
    button.addEventListener('click', () => {
        overlay.addEventListener('click', () => {
            // console.log('!click OVERLAY to close modal');
            function forOverlayZero() {
                overlay.style.visibility = 'hidden'
                overlay.style.zIndex = -1
                modal.style.visibility = 'hidden'
            }
            modal.style.opacity = 0
            overlay.style.opacity = 0
            setTimeout(forOverlayZero, 150)

        })
        // console.log('!click to open modal');
        modal.style.visibility = 'visible'
        let modalTitle = document.querySelector('.modal__title')
        let modalImg = document.querySelector('.modal__img')
        let card = button.parentElement.parentElement.parentElement
        let cardTitle = card.querySelector('.card__title')
        let cardImg = card.querySelector('.card__img')
        let sizes = modal.querySelectorAll('.card__select')
        let dough = modal.querySelectorAll('.card__choose')
        let cost = modal.querySelector('.modal__buybtn')

        let composition = modal.querySelector('.modal__composition')
        // console.log(description, description.innerHTML, description.innerText);

        // console.log(description);
        for (let index = 0; index < data.pizza.length; index++) {
            // console.log(document.querySelector('.modal__selected'));

            if (data.pizza[index].name == cardTitle.innerText) {

                cost.innerText = `Добавить в корзину за ${data.pizza[index]['medium-price']} ₽`
                modalImg.setAttribute('src', data.pizza[index].modalImg[0])
                modalImg.classList.remove('modal__imgSmall')
                modalImg.classList.add('modal__imgMedium')
                modalImg.classList.remove('modal__imgBig')
                // console.log(description, description.innerHTML, description.innerText);

                let descr = document.querySelector('.modal__selected').innerHTML.split(' ')
                descr[4] = data.pizza[index].modalWeight[2]
                // console.log(descr);

                description.innerText = descr.join(' ')
            }
        }

        for (let index = 0; index < sizes.length; index++) {

            sizes[index].addEventListener('click', () => {
                let splitSize = description.innerText.split(' ')
                if (sizes[index].innerText[0] == 'М') {
                    // console.log(splitSize);
                    splitSize[0] = '25'
                    for (let index = 0; index < data.pizza.length; index++) {
                        if (data.pizza[index].name == cardTitle.innerText) {
                            modalImg.setAttribute('src', data.pizza[index].modalImg[0])
                            modalImg.classList.add('modal__imgSmall')
                            modalImg.classList.remove('modal__imgMedium')
                            modalImg.classList.remove('modal__imgBig')
                            cost.innerText = `Добавить в корзину за ${data.pizza[index]['minimal-price']} ₽`

                        }
                    }

                    description.innerText = splitSize.join(' ')
                } else if (sizes[index].innerText[0] == 'С') {
                    // console.log(splitSize);
                    splitSize[0] = '30'
                    for (let index = 0; index < data.pizza.length; index++) {
                        if (data.pizza[index].name == cardTitle.innerText) {
                            modalImg.setAttribute('src', data.pizza[index].modalImg[1])
                            modalImg.classList.add('modal__imgMedium')
                            modalImg.classList.remove('modal__imgBig')
                            modalImg.classList.remove('modal__imgSmall')
                            cost.innerText = `Добавить в корзину за ${data.pizza[index]['medium-price']} ₽`

                        }
                    }

                    description.innerText = splitSize.join(' ')
                } else {
                    // console.log(splitSize);
                    splitSize[0] = '35'
                    for (let index = 0; index < data.pizza.length; index++) {
                        if (data.pizza[index].name == cardTitle.innerText) {
                            modalImg.setAttribute('src', data.pizza[index].modalImg[2])
                            modalImg.classList.add('modal__imgBig')
                            modalImg.classList.remove('modal__imgMedium')
                            modalImg.classList.remove('modal__imgSmall')
                            cost.innerText = `Добавить в корзину за ${data.pizza[index]['big-price']} ₽`


                        }
                    }

                    description.innerText = splitSize.join(' ')
                }

            })
        }

        for (let index = 0; index < dough.length; index++) {
            dough[index].addEventListener('click', () => {
                let splitSize = description.innerText.split(' ')
                if (dough[index].innerText == 'Традиционное') {
                    // console.log(splitSize);
                    splitSize[2] = 'традиционное'

                    description.innerText = splitSize.join(' ')
                } else if (dough[index].innerText == 'Тонкое') {
                    // console.log(splitSize);
                    splitSize[2] = 'тонкое'

                    description.innerText = splitSize.join(' ')

                }

            })
        }

        for (let index = 0; index < data.pizza.length; index++) {
            if (data.pizza[index].name == cardTitle.innerText) {
                let compositionText = []
                for (let i = 0; i < data.pizza[index].modalComposition.length; i++) {
                    if (data.pizza[index].modalComposition[i][0] == '!') {
                        compositionText.push('<a class="card__candel" href="" onclick="event.preventDefault()">' + data.pizza[index].modalComposition[i].substring(1, data.pizza[index].modalComposition[i].length) + '<img class="card__delete" src="./images/mark/delete.svg" alt="">' + '</a>')
                    } else {
                        compositionText.push(data.pizza[index].modalComposition[i])
                    }
                    // console.log(compositionText);

                }
                composition.innerHTML = compositionText.join(', ')
            }
        }

        let deleteComposition = modal.querySelectorAll('.card__candel')
        let deleteCompositionBtn = modal.querySelectorAll('.card__delete')

        for (let index = 0; index < deleteComposition.length; index++) {
            deleteComposition[index].addEventListener('click', () => {
                // console.log('!!');
                deleteComposition[index].classList.toggle('card__candelDel')
                if (deleteCompositionBtn[index].getAttribute('src') == './images/mark/return.svg') {
                    deleteCompositionBtn[index].setAttribute('src', './images/mark/delete.svg')
                } else {
                    deleteCompositionBtn[index].setAttribute('src', './images/mark/return.svg')
                }

            })
        }
        // console.log(description);

        let additionally = modal.querySelectorAll('.card__additionally')
        for (let index = 0; index < additionally.length; index++) {
            let cost = modal.querySelector('.modal__buybtn')
            let el = additionally[index]
            let addCost = el.querySelector('.additionally__cost').innerHTML.split(' ')[0]
            let newCost = cost.innerHTML.split(' ')
            
            additionally[index].addEventListener('click', () => {
                if (additionally[index].classList.contains('card__additionallyActive')) {
                    newCost[4] = Number(newCost[4])
                    addCost = Number(addCost)
                    newCost[4] += Number(addCost)
                    console.log(addCost, newCost);
                    cost.innerHTML = newCost.join(' ')
                } else {
                    newCost[4] = Number(newCost[4])
                    newCost[4] -= Number(addCost)
                    cost.innerHTML = newCost.join(' ')
                    console.log(addCost, newCost);
                }

                // console.log(addCost, newCost);
            })
        }


        modalTitle.innerText = cardTitle.innerText
        modal.style.opacity = 1
        overlay.style.opacity = 1
        overlay.style.visibility = 'visible'
        overlay.style.zIndex = 2
    })
}

modalClose.addEventListener('click', () => {
    // console.log('!click to close modal');
    modal.style.opacity = 0
    overlay.style.opacity = 0
    overlay.style.zIndex = -1
    modal.style.visibility = 'hidden'
})

for (let index = 0; index < additionally.length; index++) {
    additionally[index].addEventListener('click', () => {
        additionally[index].classList.toggle('card__additionallyActive')
        svgAdditionally[index].classList.toggle('additionally__svgActive')
    })

}