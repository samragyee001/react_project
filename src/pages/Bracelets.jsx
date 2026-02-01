import React from 'react'

export default function Bracelets() {
  const products = [
    {
      id: 1,
      name: "Pearl Harmony Bracelet",
      price: "Rs 1200",
      image: "/images/b1.jpeg",
    },
    {
      id: 2,
      name: "Golden Butterfly Trail Necklace",
      price: "Rs 650",
      image: "/images/b2.jpeg",
    },
    {
      id: 3,
      name: "Blossom Spark Bracelet",
      price: "Rs 1000",
      image: "/images/b3.jpeg",
    },
    {
      id: 4,
      name: "Petal Parade Bracelet",
      price: "Rs 950",
      image: "/images/b4.jpeg",
    },
    {
      id: 5,
      name: "Crystal Line Bracelet",
      price: "Rs 1000",
      image: "/images/b5.jpeg",
    },
    {
      id: 6,
      name: "Sweetheart Chain Bracelet",
      price: "Rs 750",
      image: "/images/b6.jpeg",
    },
    {
      id: 6,
      name: "Daisy Trail Bracelet",
      price: "Rs 1000",
      image: "/images/b7.jpeg",
    },
    {
      id: 6,
      name: "Romantic Pearl Bracelet",
      price: "Rs 400",
      image: "/images/b8.jpeg",
    },
    {
      id: 6,
      name: "Double Love Bracelet Set",
      price: "Rs 1400",
      image: "/images/b9.jpeg",
    },
    {
      id: 6,
      name: "Pastel Garden Bracelet",
      price: "Rs 1000",
      image: "/images/b10.jpeg",
    },
    {
      id: 6,
      name: "Butterfly Bloom Bracelet",
      price: "Rs 1100",
      image: "/images/b11.jpeg",
    },
    {
      id: 6,
      name: "Pearl Bow Bracelet",
      price: "Rs 1300",
      image: "/images/b12.jpeg",
    },
    {
      id: 6,
      name: "Rosy Charm Bracelet",
      price: "Rs 800",
      image: "/images/b13.jpeg",
    },
     {
      id: 6,
      name: "Golden Rose Bracelet",
      price: "Rs 900",
      image: "/images/b14.jpeg",
    },
   
  ];

  // Optional: handle Add to Cart click
  const handleAddToCart = (product) => {
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="container py-5 text-center">
      <h2 className="fw-bold mb-3">Our Featured Bracelets</h2>
      <p className="text-muted mb-4">Discover elegance that shines forever</p>
      <div className="row g-4">
        {products.map((item) => (
          <div key={item.id} className="col-md-3 col-sm-6">
            <div className="card shadow-sm border-0 h-100">
              <img
                src={item.image}
                className="card-img-top"
                alt={item.name}
                style={{ height: "280px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">{item.name}</h5>
                  <p className="text-muted">{item.price}</p>
                </div>
                <button
                  className="btn btn-warning fw-semibold mt-2"
                  onClick={() => handleAddToCart(item)}
                >
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
 