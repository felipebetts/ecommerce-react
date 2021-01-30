import Card from '../../components/common/Card/Card'
import './Browse.css'
import { categories } from '../../consts/categories'

import { addToCart } from '../../store/actions/cart'
import { connect } from 'react-redux'
import { Divider, List, ListItem, Paper } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function Browse(props) {

    let { categoria } = useParams()
    categoria = categoria ? categoria : ''

    const { products } = props
    const initialCategoryState = {
        Todos: false,
        Piso: false,
        Teto: false,
        Parede: false,
        Jardim: false
    }
    const [currentCategory, setCategory] = useState(initialCategoryState)

    // useEffect(filterByCategory(), [])

    return (
        <main>
            <div className="browsePage">
                <div className="navAside">
                    <Paper className="paper">
                        <div className="categories">
                            <a href="/produtos" className="categoriesTitle">
                                <h2>Categorias</h2>
                            </a>
                            {categories.map((category) => (
                                <h5 key={category} >
                                <a href={`/produtos/${category}`} 
                                    onClick={() => {
                                        setCategory({ ...initialCategoryState, [category]: true})
                                    }}
                                    className="category"
                                    >
                                    {category}
                                </a>
                                </h5>
                            ))}
                        </div>
                    </Paper>
                </div>
                <div className="gridContent browser">
                    {products.filter(product => {
                        if(categoria === '') {
                            return product
                        } else {
                            return product.category === categoria ? product : false
                        }}).map((product, index) => (
                        <Card product={product} key={index} className="card" />
                    ))}
                    {products.filter(product => {
                        if(categoria === '') {
                            return product
                        } else {
                            return product.category === categoria ? product : false
                        }}).map((product, index) => (
                        <Card product={product} key={index} className="card" />
                    ))}
                    {products.filter(product => {
                        if(categoria === '') {
                            return product
                        } else {
                            return product.category === categoria ? product : false
                        }}).map((product, index) => (
                        <Card product={product} key={index} className="card" />
                    ))}
                    {products.filter(product => {
                        if(categoria === '') {
                            return product
                        } else {
                            return product.category === categoria ? product : false
                        }}).map((product, index) => (
                        <Card product={product} key={index} className="card" />
                    ))}
                </div>
                {/* <CardCarousel /> */}
            </div>
        </main>
    )
}

const mapStateToProps = state => ({
    products: state.products.list,
    cart: state.cart.products
})

const mapDispatchToProps = dispatch => ({
    addToCart() {
        const action = addToCart()
        dispatch(action)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Browse)