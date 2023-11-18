import turp from "../../src/assets/img/pictures/products/featuredProducts/turp.svg"
import potato from "../../src/assets/img/pictures/products/featuredProducts/potato.svg"
import tomatos from "../../src/assets/img/pictures/products/featuredProducts/tomatos.svg"
import broccoli from "../../src/assets/img/pictures/products/featuredProducts/broccoli.svg"
import beans from "../../src/assets/img/pictures/products/featuredProducts/beans.svg"
import cart from "../../src/assets/img/icons/cart.svg"

export const featuredProducts = [
    {
        id: 1,
        img: turp,
        title: "Vegetables",
        name: "Redish",
        ratingBy5:3,
        producer: "Mr.Food",
        hasDiscount:true,
        currentPrice: parseFloat(3.99),
        beforePrice: parseFloat(2).toFixed(2),
        btnImg: cart
    },
    {
        id: 2,
        img: potato,
        title: "Vegetables",
        ratingBy5:4,
        name: "Potato",
        producer: "Mr.Food",
        hasDiscount:true,
        currentPrice: parseFloat(1.99),
        beforePrice: parseFloat(1).toFixed(2),
        btnImg: cart
    },
    {
        id: 3,
        img: tomatos,
        title: "Fruits",
        ratingBy5:2,
        name: "Tomato",
        producer: "Mr.Food",
        hasDiscount:false,
        currentPrice: parseFloat(0.99),
        beforePrice:2,
        btnImg: cart
    },
    {
        id: 4,
        title: "Vegetables",
        img: broccoli,
        ratingBy5:4,
        name: "Broccoli",
        producer: "Mr.Food",
        hasDiscount:true,
        currentPrice: parseFloat(2.99) ,
        beforePrice: parseFloat(1.50).toFixed(2),
        btnImg: cart
    },
    {
        id: 5,
        img: beans,
        title: "Vegetables",
        ratingBy5:4,
        name: "Green Beans",
        producer: "Mr.Food",
        hasDiscount:false,
        currentPrice: parseFloat(1.99),
        beforePrice: null,
        btnImg: cart
    }

]
