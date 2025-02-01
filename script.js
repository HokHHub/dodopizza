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

function toOpenModal(button) {
    button.addEventListener('click', () => {
        console.log('!click to open modal');
        // modal.style.display = 'block'
        modal.style.opacity = 1
        modal.style.left = '50%'
        modal.style.top = '50%'
        document.style.opacity = 0.2
    })
}