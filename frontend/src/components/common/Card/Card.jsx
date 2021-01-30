import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

import { connect } from 'react-redux'
import { addToCart } from '../../../store/actions/cart'

import './Card.css'

function Card(props) {


  const handleButtonClick = (e) => {
    e.preventDefault()
    props.addToCart(props.product)
  }

    return (
      <a href={`/produto/${props.product._id}`} style={{ textDecoration: 'none'}}>
        <Paper className="card" elevation={0}>
            {/* <Paper className="cardImageContainer" elevation={0} square>
            </Paper> */}
            <div className="cardImageContainer">
                <img src={props.product.imageSrc} alt="" className="cardImage" />
            </div>
            <article className="cardText">
                <div className="cardPrice">
                  <span className="oldPrice">De R${parseInt(props.product.price * 1.2) + 0.99}</span>
                  <br />
                  <strong className="newPrice">Por R${props.product.price}</strong>
                </div>
                <div >
                  <h3 className="cardTitle">{props.product.name}</h3>
                </div>
                <div className="cardSubtitle">
                  <span>{props.product.shortDescription}</span>
                </div>
                {/* <div className="cardButton">
                  <Button variant="contained" color="secondary" onClick={(e) => handleButtonClick(e)}><strong><ShoppingCartIcon /> Adicionar ao carrinho</strong></Button>
                </div> */}
            </article>
        </Paper>
      </a>
  )
}

const mapStateToProps = state => ({
  products: state.products,
})

const mapDispatchToProps = dispatch => ({
  addToCart(product) {
      const action = addToCart(product)
      dispatch(action)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Card)