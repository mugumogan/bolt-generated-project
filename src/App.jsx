import React, { useState, useEffect } from 'react'
import { Search, Bell, TrendingDown, ExternalLink, AlertCircle } from 'lucide-react'
import SearchBar from './components/SearchBar'
import ProductCard from './components/ProductCard'
import PriceComparison from './components/PriceComparison'
import AlertsPanel from './components/AlertsPanel'
import { mockProducts, mockPriceHistory } from './data/mockData'
import './App.css'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [alerts, setAlerts] = useState([])
  const [showAlerts, setShowAlerts] = useState(false)

  useEffect(() => {
    // Simulate price drop alerts
    const initialAlerts = [
      {
        id: 1,
        productName: 'Sony WH-1000XM5',
        oldPrice: 399.99,
        newPrice: 349.99,
        discount: 12.5,
        store: 'Amazon',
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000)
      },
      {
        id: 2,
        productName: 'Apple AirPods Pro',
        oldPrice: 249.99,
        newPrice: 199.99,
        discount: 20,
        store: 'Best Buy',
        timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000)
      }
    ]
    setAlerts(initialAlerts)
  }, [])

  const filteredProducts = searchQuery
    ? mockProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : mockProducts

  const handleProductSelect = (product) => {
    setSelectedProduct(product)
  }

  const handleSetAlert = (product, targetPrice) => {
    const newAlert = {
      id: Date.now(),
      productName: product.name,
      targetPrice,
      currentPrice: product.lowestPrice,
      timestamp: new Date()
    }
    setAlerts([newAlert, ...alerts])
    alert(`Alert set! You'll be notified when ${product.name} drops to $${targetPrice}`)
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <TrendingDown size={32} />
            <h1>ShopScout</h1>
          </div>
          <button 
            className="alerts-button"
            onClick={() => setShowAlerts(!showAlerts)}
          >
            <Bell size={20} />
            {alerts.length > 0 && <span className="badge">{alerts.length}</span>}
          </button>
        </div>
      </header>

      <main className="main">
        <div className="hero">
          <h2>Find the Best Deals Across the Web</h2>
          <p>Compare prices from top retailers and get instant alerts on discounts</p>
        </div>

        <SearchBar 
          value={searchQuery}
          onChange={setSearchQuery}
        />

        {showAlerts && (
          <AlertsPanel 
            alerts={alerts}
            onClose={() => setShowAlerts(false)}
          />
        )}

        {selectedProduct ? (
          <PriceComparison 
            product={selectedProduct}
            priceHistory={mockPriceHistory[selectedProduct.id]}
            onBack={() => setSelectedProduct(null)}
            onSetAlert={handleSetAlert}
          />
        ) : (
          <div className="products-grid">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id}
                product={product}
                onClick={() => handleProductSelect(product)}
              />
            ))}
          </div>
        )}

        {filteredProducts.length === 0 && searchQuery && (
          <div className="no-results">
            <AlertCircle size={48} />
            <h3>No products found</h3>
            <p>Try searching for something else</p>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>© 2024 ShopScout. Helping you save money, one deal at a time.</p>
      </footer>
    </div>
  )
}

export default App
