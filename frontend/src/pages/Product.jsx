import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { useState } from 'react';

import Carousel, { Dots } from '@brainhubeu/react-carousel';
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import { ShoppingCart } from '@material-ui/icons'
import Zoom from 'react-img-zoom'

// import Breadcrumbs from '../components/common/Breadcrumbs/Breadcrumbs'

import '@brainhubeu/react-carousel/lib/style.css';
import './Product.css'

// import Card from "../components/Card";
import { addToCart } from '../store/actions/cart'


function Product(props) {
    
    const [ valor, setValor ] = useState(0)
    
    const { _id } = useParams()
    const product = props.products[_id - 1] ? props.products[_id - 1] : props.products[0]

    const onChange = value => setValor(value);

    const handleButtonClick = () => {
        // e.preventDefault()
        props.addToCart(product)
        console.log(props.cart)
    }

    // console.log(props.products[0])

    return (
        <div className="productPage">
            <div className="breadcrumbs">
                {/* <Breadcrumbs /> */}
            </div>
            <div className="product">
                {/* <div>
                    <Zoom
                    img="/images/paoDeAcucar.jpg"
                    zoomScale={3}
                    width={800}
                    height={600}
                    />
                </div> */}
                <div className="carouselContainer">
                    <Carousel slidesPerPage={1} value={valor} onChange={onChange}>
                        <Zoom
                        img={product.imageSrc}
                        zoomScale={3}
                        width={450}
                        height={400}
                        />
                        <Zoom
                        img={product.imageSrc}
                        zoomScale={3}
                        width={450}
                        height={400}
                        />
                    </Carousel>
                    <Dots
                    value={valor}
                    onChange={onChange}
                    thumbnails={[
                        (<img key={2} className="img-example-small" src={product.imageSrc} className="carouselImageSmall" alt={product.name} />),
                        (<img key={3} className="img-example-small" src={product.imageSrc} className="carouselImageSmall" alt={product.name} />),
                        // (<img key={2} className="img-example-small" src="/images/catedral.jpg" className="carouselImageSmall" />),
                    ]}
                    />
                </div>
                <div className="productDescription">
                    <h2 className="title">{product.name}</h2>
                        <Divider />
                    <div className="description">{product.shortDescription}</div>
                        <Divider />
                    <p className="price">Por apenas R$ <strong>{product.price}</strong></p>
                    <Button variant="contained" color="primary" fullWidth size="large" onClick={() => handleButtonClick()}>
                    <ShoppingCart style={{ marginRight: "10px"}} />  Adicionar ao carrinho
                    </Button>
                </div>
            </div> 
            <div className="bigDescription">
                
            </div>   
        </div>
    )
}

const mapStateToProps = state => ({
    products: state.products.list,
    cart: state.cart.products
  })
  
  const mapDispatchToProps = dispatch => ({
    addToCart(product) {
        const action = addToCart(product)
        dispatch(action)
    }
  })

export default connect(mapStateToProps, mapDispatchToProps)(Product)