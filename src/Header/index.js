import {Link} from 'react-router-dom'
import  CartContext from '../context';
import { HiHome } from "react-icons/hi2";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";


import Logo from './Logo.png'

import './index.css'

const Header = () => (
  <CartContext.Consumer>
    {value => {
      const {CartList} = value
      return (
        <nav>
          <div className="headerCard">
            <div className="LogoContainer">
              <Link to="/" style={{textDecoration: 'none'}}>
                <i className="headerE">My E-commerce</i>
              </Link>
            </div>
            <div className="HomeLogoContainer">
              <Link to="/" style={{textDecoration: 'none'}}>
                <img src={Logo} alt="logo" className='HomeLogo'/>
              </Link>
            </div>
            
            <div className="productsHomeCard">
              <Link to="/" style={{textDecoration: 'none'}} className="lapHome">
                <h1 className="headerEn">
                  <i>Home</i>
                </h1>
              </Link>
              <Link to="/" className="HomeHome">
              <HiHome size={30} className='HomeHomeCart' />
            </Link>
              <Link to="/products" style={{textDecoration: 'none'}} className="lapProduct">
                <h1 className="headerEn">
                  <i>Products</i>
                </h1>
              </Link>
              <Link to="/products" className="HomeProduct">
              <MdProductionQuantityLimits size={30} className='HomeHomeCart'/>
            </Link>
              <Link to="/cart" className="HomeCart">
             <FaCartShopping size={30} className='HomeHomeCart' />
             <i><sub className='CartLength'>{CartList.length}</sub></i>
            </Link>
              <Link to="/cart" style={{textDecoration: 'none'}} className="lapCart">
                <h1 className="headerEn">
                  <i >
                    Cart <sub className='CartLength'>{CartList.length}</sub>
                  </i>
                </h1>
              </Link>
            </div>
          </div>
        </nav>
      )
    }}
  </CartContext.Consumer>
)

export default Header