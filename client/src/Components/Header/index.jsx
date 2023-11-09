import logo from "../../assets/img/icons/LOGO.svg";
import logoSearch from "../../assets/img/icons/li_search.svg";
import logoShoppingCart from "../../assets/img/icons/GroupSecond.svg";
import logoHeart from "../../assets/img/icons/GroupFirst.svg";
import ellipse from "../../assets/img/icons/ellipse.svg";
import arrowDown from "../../assets/img/icons/li_chevron-down.svg";
import buttonGrid from "../../assets/img/icons/li_layout-grid.svg";
import home from "../../assets/img/icons/home.png";
import hotdeals from "../../assets/img/icons/hotdeals.svg";
import phone from "../../assets/img/icons/li_megaphone.svg";
import call from "../../assets/img/icons/Call.svg";

import "./style.scss";

export const Header = () => {
  return (
    <header>

      <div className="main-header">

        <div className="header-logo">
          <img src={logo} alt="" />

          <div className="logo-txt">
            <h2>Groceyish</h2>
            <h3>GROCERY</h3>
          </div>

        </div>

        <div className="searching-wrapper">

          <div className="search-c">

            <select name="" id="">
              <option value="">All Categories</option>
              <option value="">All Cars</option>
              <option value="">All Clothes</option>
            </select>


            <div className="line"></div>

            <input type="text" placeholder="Search for items..." />
          </div>

          <button><img src={logoSearch} alt="" /></button>
        </div>
        <div className="my-counters">

          <div className="counter-box">
            <img src={logoHeart} alt="" />
            <div className="txt-wrapper">
              <h3>Wishlist</h3>
            </div>

          </div>
          <div className="counter-box">
            <img src={logoShoppingCart} alt="" />
            <div className="txt-wrapper">
              <h3>My cart</h3>
              <p>23$</p>
            </div>
          </div>
        </div>
        <div className="toggle-menu">
          <img src={ellipse} alt="" />
          <h3>Ramzi Cherif</h3>
          <img id="toggle-arrow" src={arrowDown} alt="" />
        </div>
      </div>

      <div className="links-header">
        <button className="browseAllCategory">
          <img src={buttonGrid} alt="" />
          Browse All Category
        </button>
        <ul>
          <li><img src={home} alt="" />
            Home
          </li>

          <li><img src={hotdeals} alt="" />
            Hot Deals
          </li>

          <li>
            %Promotions
          </li>

          <li><img src={phone} alt="" />
            New Products
          </li>

        </ul>

        <div className="contact-info">
          <img src={call} alt="" />
          <span>1233-7777</span>
          <p>24/7 Support center</p>
        </div>
      </div>
    </header>
  );
};
