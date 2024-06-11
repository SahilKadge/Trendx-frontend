import { ProductCard } from '../product-card/ProductCard';
import './MainSellingPage.css';
import PropTypes from 'prop-types';

export const MainSellingPage = ({ products, path }) => {
  return (
    <div className="mainSellingPage-div">
      <div className='mainSellingPage-content'><span>Home / Man /</span><span>{path}</span></div>
      <div className='mainSellingPage-filter-sort'>
        <div className='mainSellingPage-filter'>FILTER</div>
        <div className='mainSellingPage-sort'>SORT</div>
      </div>
      <div className='mainSellingPage-cards'>
        {products.map(product => (
          <ProductCard key={product.key} product={product} />
        ))}
      </div>
    </div>
  );
};

MainSellingPage.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ).isRequired,
  path: PropTypes.string.isRequired,
};
