import { data } from './data.js'
let pizzaCards = document.querySelector('.pizza__cards')
let comboCards = document.querySelector('.combo__cards')
let snacksCards = document.querySelector('.snacks__cards')
let dessertsCards = document.querySelector('.desserts__cards')
let drinksCards = document.querySelector('.drinks__cards')
let yearNow = document.querySelector('.help__copyright')
let sliderChange = document.querySelectorAll('.slider__dot')
// let slider = document.querySelector('.slider__all')
import { tns } from "./node_modules/tiny-slider/src/tiny-slider.js"

function RenderPizzas() {

    for (let index = 0; index < data.pizza.length; index++) {
        let card = document.createElement('article')
        card.classList.add('pizza__card')
        card.classList.add('card')
        card.innerHTML = `<img class="card__img" src="${data.pizza[index].img}" alt="${data.pizza[index].name}">
                        <p class="card__title">${data.pizza[index].name}</p>
                        <p class="card__composition">${data.pizza[index].composition}</p>
                        <div class="card__buy">
                            <p class="card__price">от ${data.pizza[index]['minimal-price']} ₽</p>
                            <button class="card__button button_select">Выбрать</button>
                        </div>`

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
                        <p class="card__title">${data.combo[index].name}</p>
                        <p class="card__composition">${data.combo[index].description}</p>
                        <div class="card__buy">
                            <p class="card__price">${data.combo[index]['price']} ₽</p>
                            <button class="card__button button_select">Выбрать</button>
                        </div>`

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
                        <p class="card__title">${data.snacks[index].name}</p>
                        <p class="card__composition">${data.snacks[index].description}</p>
                        <div class="card__buy">
                            <p class="card__price">${data.snacks[index]['price']} ₽</p>
                            <button class="card__button button_select">Выбрать</button>
                        </div>`

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
                        <p class="card__title">${data.desserts[index].name}</p>
                        <p class="card__composition">${data.desserts[index].description}</p>
                        <div class="card__buy">
                            <p class="card__price">${data.desserts[index]['price']} ₽</p>
                            <button class="card__button button_select">Выбрать</button>
                        </div>`

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
                        <p class="card__title">${data.drinks[index].name}</p>
                        <p class="card__composition">${data.drinks[index].description}</p>
                        <div class="card__buy">
                            <p class="card__price">${data.drinks[index]['price']} ₽</p>
                            <button class="card__button button_select">Выбрать</button>
                        </div>`

        drinksCards.appendChild(card)
    }
}
RenderDrinks()
yearNow.innerText = '© ' + new Date().getFullYear()

for (let index = 0; index < data.slider.length; index++) {
    let img = document.createElement('div')
    let slider = document.querySelector('.slider__all')
    img.innerHTML = `<img src="${data.slider[index].img}" alt="">`
    slider.appendChild(img)

}

let slider = tns({
    items: 3,
    controls: false,
    center: true,
    gutter: 30,
    autoWidth: true,
    container: ".slider__all",
    swipeAngle: false,
    speed: 400,
});


