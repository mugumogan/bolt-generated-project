import React, { useState } from 'react'
import { ArrowLeft, ExternalLink, Bell, TrendingDown } from 'lucide-react'
import './PriceComparison.css'

function PriceComparison({ product, priceHistory, onBack, onSetAlert }) {
  const [targetPrice, setTargetPrice] = useState(product.lowestPrice * 0.9)

  return (
    <div className="price-comparison">
      <button className="back-button" onClick={onBack}>
        <ArrowLeft size={20} />
        Back to Products
      </button>

      <div className="comparison-header">
        <div className="product-details">
          <img src={product.image} alt={product.name} className="product-image-large" />
          <div>
            <h2>{product.name}</h2>
            <p className="category">{product.category}</p>
          </div>
        </div>
      </div>

      <div className="price-alert-section">
        <h3>Set Price Alert</h3>
        <div className="alert-form">
          <input
            type="number"
            value={targetPrice}
            onChange={(e) => setTargetPrice(parseFloat(e.target.value))}
            step="0.01"
            className="price-input"
          />
          <button 
            className="set-alert-button"
            onClick={() => onSetAlert(product, targetPrice)}
          >
            <Bell size={18} />
            Set Alert
          </button>
        </div>
        <p className="alert-hint">We'll notify you when the price drops to ${targetPrice.toFixed(2)}</p>
      </div>

      <div className="stores-comparison">
        <h3>Price Comparison Across Stores</h3>
        <div className="stores-list">
          {product.stores.map((store, index) => (
            <div key={index} className="store-item">
              <div className="store-info">
                <div className="store-name">{store.name}</div>
                <div className="store-price">${store.price}</div>
              </div>
              <div className="store-actions">
                {store.inStock ? (
                  <span className="in-stock">In Stock</span>
                ) : (
                  <span className="out-of-stock">Out of Stock</span>
                )}
                <a 
                  href={store.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="visit-button"
                >
                  Visit Store
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="price-history">
        <h3>Price History (Last 30 Days)</h3>
        <div className="chart">
          {priceHistory.map((point, index) => {
            const maxPrice = Math.max(...priceHistory.map(p => p.price))
            const minPrice = Math.min(...priceHistory.map(p => p.price))
            const height = ((point.price - minPrice) / (maxPrice - minPrice)) * 100
            
            return (
              <div key={index} className="chart-bar-container">
                <div 
                  className="chart-bar"
                  style={{ height: `${height}%` }}
                  title={`$${point.price} on ${point.date}`}
                >
                  <span className="bar-label">${point.price}</span>
                </div>
                <span className="bar-date">{point.date}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PriceComparison
