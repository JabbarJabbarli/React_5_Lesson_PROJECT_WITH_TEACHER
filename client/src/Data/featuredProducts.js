import turp from "../../src/assets/img/pictures/featuredProducts/turp.svg"
import potato from "../../src/assets/img/pictures/featuredProducts/potato.svg"
import tomatos from "../../src/assets/img/pictures/featuredProducts/tomatos.svg"
import broccoli from "../../src/assets/img/pictures/featuredProducts/broccoli.svg"
import beans from "../../src/assets/img/pictures/featuredProducts/beans.svg"
import cart from "../../src/assets/img/icons/cart.svg"

export const featuredProducts = [
    {
        id: 1,
        img: turp,
        title: "Vegetables",
        name: "Redish",
        producer: "Mr.Food",
        price: parseFloat(3.99),
        discountPrice: parseFloat(2).toFixed(2),
        btnImg: cart
    },
    {
        id: 2,
        img: potato,
        title: "Vegetables",
        name: "Potato",
        producer: "Mr.Food",
        price: parseFloat(1.99),
        discountPrice: parseFloat(1).toFixed(2),
        btnImg: cart
    },
    {
        id: 3,
        img: tomatos,
        title: "Fruits",
        name: "Tomato",
        producer: "Mr.Food",
        price: parseFloat(0.99),
        discountPrice:parseFloat(0.30).toFixed(2),
        btnImg: cart
    },
    {
        id: 4,
        title: "Vegetables",
        img: broccoli,
        name: "Broccoli",
        producer: "Mr.Food",
        price: parseFloat(2.99) ,
        discountPrice: parseFloat(1.50).toFixed(2),
        btnImg: cart
    },
    {
        id: 5,
        img: beans,
        title: "Vegetables",
        name: "Orange",
        producer: "Mr.Food",
        price: parseFloat(1.99),
        discountPrice: parseFloat(1).toFixed(2),
        btnImg: cart
    }

]
