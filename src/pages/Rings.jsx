// src/pages/Rings.jsx
import React from "react";

export default function Rings() {
  const products = [
    {
      id: 1,
      name: "Golden V-Curve Ring",
      price: "Rs 1200",
      image: "/images/r1.jpeg",
    },
    {
      id: 2,
      name: "Amethyst Blossom Ring",
      price: "Rs 2000",
      image: "/images/r2.jpeg",
    },
    {
      id: 3,
      name: "Promise Twist Ring",
      price: "Rs 1000",
      image: "/images/r3.jpeg",
    },
    {
      id: 4,
      name: "Unity Knot Ring",
      price: "Rs 900",
      image: "/images/r4.jpeg",
    },
    {
      id: 5,
      name: "Golden Vine Ring",
      price: "Rs 295",
      image: "/images/r5.jpeg",
    },
    {
      id: 6,
      name: "Twist Halo Ring",
      price: "Rs 1300",
      image: "/images/r6.jpeg",
    },
    {
      id: 6,
      name: "Symmetry Diamond Band",
      price: "Rs 2000",
      image: "/images/r7.jpeg",
    },
    {
      id: 6,
      name: "Golden Braid Band",
      price: "Rs 1600",
      image: "/images/r8.jpeg",
    },
    {
      id: 6,
      name: "Classic Solitaire Ring",
      price: "Rs1000",
      image: "/images/r9.jpeg",
    },
    {
      id: 6,
      name: "Modern Nail Ring",
      price: "Rs 1500",
      image: "/images/r10.jpeg",
    },
    {
      id: 6,
      name: "Nature’s Whisper Ring	",
      price: "Rs 900",
      image: "/images/r11.jpeg",
    },
    {
      id: 6,
      name: "Heart Loop Ring",
      price: "Rs 1500",
      image: "/images/r12.jpeg",
    },
    {
      id: 6,
      name: "Diamond Bloom Ring",
      price: "₨ 2,500",
      image: "/images/r13.jpeg",
    },
    {
      id: 6,
      name: "Amethyst Blossom Ring",
      price: "₨ 1,200",
      image: "/images/r14.jpeg",
    },
   
  ];

  // Optional: handle Add to Cart click
  const handleAddToCart = (product) => {
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="container py-5 text-center">
      <h2 className="fw-bold mb-3">Our Featured Rings</h2>
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
