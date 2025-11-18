import React from 'react'
import { TrendingDown, TrendingUp } from 'lucide-react'
import './ProductCard.css'

function ProductCard({ product, onClick }) {
  const savingsPercent = ((product.highestPrice - product.lowestPrice) / product.highestPrice * 100).toFixed(0)

  return (
    <div className="product-card" onClick={onClick}>
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        {savingsPercent > 10 && (
          <div className="discount-badge">
            <TrendingDown size={16} />
            {savingsPercent}% OFF
          </div>
        )}
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <div className="price-info">
          <div className="price-row">
            <span className="price-label">Best Price:</span>
            <span className="best-price">${product.lowestPrice}</span>
          </div>
          <div className="price-range">
            <span className="price-label">Range:</span>
            <span className="price-value">${product.lowestPrice} - ${product.highestPrice}</span>
          </div>
        </div>
        <div className="stores-count">
          Available at {product.stores.length} stores
        </div>
      </div>
    </div>
  )
}

export default ProductCard
