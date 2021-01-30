// import React, { useState } from 'react'
import { connect } from 'react-redux'


import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
// import ListItemIcon from '@material-ui/core/ListItemIcon'
// import ListItemText from '@material-ui/core/ListItemText'

import './Cart.css'

import { addToCart } from '../../../store/actions/cart'
// import { changeCurrentProduct } from '../../../store/actions/currentProduct'

function Cart(props) {
    
    const { cart } = props

    const Icon = props.icon
    
    if(cart[0]) {
        return (
            <List>
                <ListItem className="" >
                    <Icon />
                    <h3 >{props.label}</h3>
                </ListItem>
                <Divider />
                <ListItem key={'cart-titles'}>
                    <div className="cartItem">
                        <span className="cartItemName"><strong>Nome</strong></span>
                            <span className="cartItemPrice"><strong>Preço</strong></span>
                        {/* <div className="cartRight">
                            <span className="cartItemPrice"><strong>Quant.</strong></span>
                        </div> */}
                    </div>   
                </ListItem>
                <Divider/>
                {cart.map((item, index) => {
                    return (
                        <div key={index}>
                            <ListItem className="cartItem" >
                                <span className="cartItemName">{item.name}</span>
                                    <span className="cartItemPrice">R$ {item.price}</span>
                                {/* <div className="cartRight">
                                    <span className="cartItemPrice">Qu{item.amount}</span>
                                </div> */}
                            </ListItem>
                            <Divider />
                        </div>
                    )
                })}
                
            </List>
        )
    } else {
        return (
            <List>
                <ListItem className="" >
                    <Icon />
                    <h3 >{props.label}</h3>
                </ListItem>
                <ListItem>
                    <i>Ainda não há itens no carrinho.</i> 
                </ListItem>
            </List>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart.products,
    currentProduct: state.currentProduct
})

const mapDispatchToProps = dispatch => ({
    addToCart(product) {
        const action = addToCart(product)
        dispatch(action)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)