import './Header.css'

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


import Drawer from '../Drawer/Drawer'
// import Drawer from '../../common/platform/LeftDrawer'

import Cart from '../../platform/Cart/Cart'
import Menu from '../../platform/Menu/Menu'
import Account from '../../platform/Account/Account'

import MenuIcon from '@material-ui/icons/Menu';


function Header(props) {

    return (
        <div className="header">
            <div className="headerContainer">
                <div className="left" >
                    <div className="drawer" >
                        <Drawer anchor="left" label={MenuIcon} color="#eee">
                            <Menu />
                        </Drawer> 
                    </div>
                    <a href="/" className="link" >
                        <h1 className="logoh1">Ecommerce</h1>
                    </a>
                    {/* <ShoppingCartIcon fontSize="large" />    */}
                </div>
                <div className="middle">
                    <input type="text"
                        className="headerInput"
                        placeholder="Buscar"/>
                </div>
                <div className="right">
                    {/* <img src="/images/logoBelight.png" alt="" className={img} /> */}
                    <div className="center" >
                        {/* <Conta label="Conta"/> */}
                        <Drawer anchor="right" label={AccountCircleIcon} color="#eee" title="Conta">
                            <Account title="Conta" />
                        </Drawer>
                    </div>
                    <div className="center" >
                        {/* <Cart label="Carrinho">
                            <ShoppingCartIcon />
                        </Cart>  */}
                        <Drawer anchor="right" label={ShoppingCartIcon} color="#eee" title="Carrinho">
                            <Cart label="Carrinho" icon={ShoppingCartIcon} />
                        </Drawer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header


