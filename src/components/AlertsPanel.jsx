import React from 'react'
import { X, TrendingDown } from 'lucide-react'
import './AlertsPanel.css'

function AlertsPanel({ alerts, onClose }) {
  const formatTime = (timestamp) => {
    const now = new Date()
    const diff = now - timestamp
    const hours = Math.floor(diff / (1000 * 60 * 60))
    
    if (hours < 1) return 'Just now'
    if (hours === 1) return '1 hour ago'
    return `${hours} hours ago`
  }

  return (
    <div className="alerts-overlay" onClick={onClose}>
      <div className="alerts-panel" onClick={(e) => e.stopPropagation()}>
        <div className="alerts-header">
          <h3>Price Alerts</h3>
          <button className="close-button" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        
        <div className="alerts-list">
          {alerts.length === 0 ? (
            <div className="no-alerts">
              <TrendingDown size={48} />
              <p>No alerts yet</p>
              <span>Set price alerts to get notified of great deals!</span>
            </div>
          ) : (
            alerts.map(alert => (
              <div key={alert.id} className="alert-item">
                <div className="alert-icon">
                  <TrendingDown size={24} />
                </div>
                <div className="alert-content">
                  <h4>{alert.productName}</h4>
                  {alert.newPrice ? (
                    <>
                      <p className="alert-message">
                        Price dropped from <span className="old-price">${alert.oldPrice}</span> to{' '}
                        <span className="new-price">${alert.newPrice}</span>
                      </p>
                      <div className="alert-meta">
                        <span className="discount-tag">{alert.discount}% OFF</span>
                        <span className="store-tag">{alert.store}</span>
                        <span className="time">{formatTime(alert.timestamp)}</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="alert-message">
                        Alert set for <span className="target-price">${alert.targetPrice}</span>
                      </p>
                      <div className="alert-meta">
                        <span className="current-price-tag">Current: ${alert.currentPrice}</span>
                        <span className="time">{formatTime(alert.timestamp)}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default AlertsPanel
