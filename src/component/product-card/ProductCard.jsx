import PropTypes from 'prop-types'
import './ProductCard.css'
export const ProductCard = ({product}) => {
  return (
    <div className="productCard-container">
        <img src={product.link} className="productCard-image"></img>
        <div className='productCard-discription'>
            <div className='productCard-discription-brandname'>
                {product.brand}
            </div>
            <div className='productCard-discription-productname'>{product.name} </div>
            <div className='productCard-discription-price'>{product.price} Rs</div>
        </div>
    </div>
  )
}
ProductCard.propTypes = {
  product: PropTypes.shape({
    link: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
  }).isRequired
}