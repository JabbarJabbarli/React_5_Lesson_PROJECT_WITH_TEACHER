import "./style.scss";
import React from "react";
import { Header } from "../../Components/Header";
import { ProductsHeading } from "../../Components/productsHeading"
import { MiniCard } from "../../Components/MiniCard"
import { products } from "../../Data/products"
import RatingCard from "../../Components/ratingCard";
import { featuredProducts } from "../../Data/featuredProducts";
import Hero from "../../Components/Hero";



export const HomePage = () => {
  return (
    <div className="homePage">
      <Header />

      <Hero />

      <section className="category-section">
        <ProductsHeading title={"Explore Categories"} />

        <section className="category-cards">
          <div className="container">
            {

              products.map(item => (
                <MiniCard

                  img={item.img}
                  name={item.title}
                  stockCount={item.stockCount}
                  bgColor={item.bgColor}
                />
              ))
            }

          </div>
        </section>
      </section>


      <section className="featured">

        <ProductsHeading title={"Featured Products"} />

        <section className="featured-products">
          <div className="container">
            {
              featuredProducts.map(item => (
                <RatingCard

                  img={item.img}
                  title={item.title}
                  name={item.name}
                  producer={item.producer}
                  price={item.price}
                  discountPrice={item.discountPrice}
                  btnImg={item.btnImg}

                />
              ))
            }

          </div>
        </section>
      </section>



    </div>
  );
};
