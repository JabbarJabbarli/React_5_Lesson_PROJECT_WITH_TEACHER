import logo from "../../assets/img/icons/LOGO.svg";
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
            </select>

            <div className="line"></div>
            <input type="text" placeholder="Search for items..." />
          </div>
          <button>Loupe</button>
        </div>
      </div>

      <div className="links-header"></div>
    </header>
  );
};
