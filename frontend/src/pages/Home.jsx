import Carousel from '../components/common/Carousel/Carousel'
import Card from '../components/common/Card/Card'

import { addToCart } from '../store/actions/cart'
// import CardCarousel from '../components/CardCarousel/CardCarousel'
import { connect } from 'react-redux'

function Home(props) {

    const { products } = props

    return (
        <main>
            <Carousel />
            <div className="content">
                <div className="cards">
                    {products.map((product, index) => (
                        <Card product={product} key={index} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)