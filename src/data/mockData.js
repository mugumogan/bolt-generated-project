export const mockProducts = [
  {
    id: 1,
    name: 'Sony WH-1000XM5 Wireless Headphones',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=300&fit=crop',
    lowestPrice: 349.99,
    highestPrice: 399.99,
    stores: [
      { name: 'Amazon', price: 349.99, inStock: true, url: '#' },
      { name: 'Best Buy', price: 379.99, inStock: true, url: '#' },
      { name: 'Walmart', price: 399.99, inStock: false, url: '#' },
      { name: 'Target', price: 389.99, inStock: true, url: '#' }
    ]
  },
  {
    id: 2,
    name: 'Apple AirPods Pro (2nd Gen)',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=300&fit=crop',
    lowestPrice: 199.99,
    highestPrice: 249.99,
    stores: [
      { name: 'Apple Store', price: 249.99, inStock: true, url: '#' },
      { name: 'Amazon', price: 219.99, inStock: true, url: '#' },
      { name: 'Best Buy', price: 199.99, inStock: true, url: '#' },
      { name: 'Costco', price: 209.99, inStock: true, url: '#' }
    ]
  },
  {
    id: 3,
    name: 'Samsung Galaxy S24 Ultra',
    category: 'Smartphones',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop',
    lowestPrice: 1099.99,
    highestPrice: 1299.99,
    stores: [
      { name: 'Samsung', price: 1199.99, inStock: true, url: '#' },
      { name: 'Amazon', price: 1099.99, inStock: true, url: '#' },
      { name: 'Best Buy', price: 1149.99, inStock: true, url: '#' },
      { name: 'AT&T', price: 1299.99, inStock: true, url: '#' }
    ]
  },
  {
    id: 4,
    name: 'Dell XPS 15 Laptop',
    category: 'Computers',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop',
    lowestPrice: 1499.99,
    highestPrice: 1799.99,
    stores: [
      { name: 'Dell', price: 1699.99, inStock: true, url: '#' },
      { name: 'Amazon', price: 1499.99, inStock: true, url: '#' },
      { name: 'Best Buy', price: 1599.99, inStock: true, url: '#' },
      { name: 'Newegg', price: 1799.99, inStock: false, url: '#' }
    ]
  },
  {
    id: 5,
    name: 'Canon EOS R6 Mark II',
    category: 'Cameras',
    image: 'https://images.unsplash.com/photo-1606980707986-e660c1e1d5e0?w=400&h=300&fit=crop',
    lowestPrice: 2399.99,
    highestPrice: 2699.99,
    stores: [
      { name: 'B&H Photo', price: 2399.99, inStock: true, url: '#' },
      { name: 'Amazon', price: 2499.99, inStock: true, url: '#' },
      { name: 'Adorama', price: 2449.99, inStock: true, url: '#' },
      { name: 'Best Buy', price: 2699.99, inStock: true, url: '#' }
    ]
  },
  {
    id: 6,
    name: 'Nintendo Switch OLED',
    category: 'Gaming',
    image: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400&h=300&fit=crop',
    lowestPrice: 299.99,
    highestPrice: 349.99,
    stores: [
      { name: 'Nintendo', price: 349.99, inStock: true, url: '#' },
      { name: 'Amazon', price: 299.99, inStock: true, url: '#' },
      { name: 'Best Buy', price: 319.99, inStock: true, url: '#' },
      { name: 'GameStop', price: 329.99, inStock: true, url: '#' }
    ]
  }
]

export const mockPriceHistory = {
  1: [
    { date: '1/1', price: 399.99 },
    { date: '1/8', price: 389.99 },
    { date: '1/15', price: 379.99 },
    { date: '1/22', price: 369.99 },
    { date: '1/29', price: 349.99 }
  ],
  2: [
    { date: '1/1', price: 249.99 },
    { date: '1/8', price: 239.99 },
    { date: '1/15', price: 229.99 },
    { date: '1/22', price: 219.99 },
    { date: '1/29', price: 199.99 }
  ],
  3: [
    { date: '1/1', price: 1299.99 },
    { date: '1/8', price: 1249.99 },
    { date: '1/15', price: 1199.99 },
    { date: '1/22', price: 1149.99 },
    { date: '1/29', price: 1099.99 }
  ],
  4: [
    { date: '1/1', price: 1799.99 },
    { date: '1/8', price: 1699.99 },
    { date: '1/15', price: 1599.99 },
    { date: '1/22', price: 1549.99 },
    { date: '1/29', price: 1499.99 }
  ],
  5: [
    { date: '1/1', price: 2699.99 },
    { date: '1/8', price: 2599.99 },
    { date: '1/15', price: 2499.99 },
    { date: '1/22', price: 2449.99 },
    { date: '1/29', price: 2399.99 }
  ],
  6: [
    { date: '1/1', price: 349.99 },
    { date: '1/8', price: 339.99 },
    { date: '1/15', price: 329.99 },
    { date: '1/22', price: 319.99 },
    { date: '1/29', price: 299.99 }
  ]
}
