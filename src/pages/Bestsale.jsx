// src/pages/Rings.jsx
import React from "react";

export default function Rings() {
  const products = [
    {
      id: 1,
      name: " Forever Infinity Necklace",
      price: "Rs 1000",
      image: "/images/n1.jpeg",
    },
    {
      id: 2,
      name: "Amethyst Blossom Ring",
      price: "Rs 2000",
      image: "/images/r2.jpeg",
    },
    {
      id: 3,
      name: "Marble Heart Studs",
      price: "$110.00",
      image: "/images/e3.jpeg",
    },
    {
      id: 3,
      name: "Blossom Spark Bracelet",
      price: "Rs 1000",
      image: "/images/b3.jpeg",
    },
    {
      id: 4,
      name: "Unity Knot Ring",
      price: "Rs 900",
      image: "/images/r4.jpeg",
    },
    {
      id: 5,
      name: "Sweetheart Shine Necklace",
      price: "Rs 600",
      image: "/images/n4.jpeg",
    },
    {
      id: 6,
      name: "Twist Halo Ring",
      price: "Rs 1300",
      image: "/images/r6.jpeg",
    },
     {
      id: 1,
      name: "Vintage Bloom Earrings",
      price: "$120.00",
      image: "/images/e1.jpeg",
    },
    {
      id: 7,
      name: "Symmetry Diamond Band",
      price: "Rs 2000",
      image: "/images/r7.jpeg",
    },
    {
      id: 8,
      name: "Golden Leaf Trail",
      price: "Rs 900",
      image: "/images/n6.jpeg",
    },
     {
      id: 6,
      name: "Gem Bow Hoops",
      price: "$160.00",
      image: "/images/e7.jpeg",
    },
    {
      id: 9,
      name: "Nature Loop Necklace",
      price: "Rs 1500",
      image: "/images/n7.jpeg",
    },
    {
      id: 10,
      name: "Amethyst Blossom Ring",
      price: "₨ 1,200",
      image: "/images/r14.jpeg",
    },
    {
      id: 11,
      name: "Sweetheart Chain Bracelet",
      price: "Rs 750",
      image: "/images/b6.jpeg",
    },
     {
      id: 6,
      name: "Vintage Ruby Ring",
      price: "$160.00",
      image: "/images/e9.jpeg",
    },
    {
      id: 12,
      name: "Daisy Trail Bracelet",
      price: "Rs 1000",
      image: "/images/b7.jpeg",
    },
    {
      id: 13,
      name: "Classic Solitaire Ring",
      price: "Rs1000",
      image: "/images/r9.jpeg",
    },
    {
      id: 14,
      name: "Modern Nail Ring",
      price: "Rs 1500",
      image: "/images/r10.jpeg",
    },
     {
      id: 15,
      name: "Rosy Charm Bracelet",
      price: "Rs 800",
      image: "/images/b13.jpeg",
    },{
      id: 16,
      name: "Vintage Ruby Ring",
      price: "$160.00",
      image: "/images/e12.jpeg",
    },
    {
      id: 17,
      name: "Vintage Ruby Ring",
      price: "$160.00",
      image: "/images/e13.jpeg",
    },
     {
      id: 6,
      name: "Nature’s Whisper Ring	",
      price: "Rs 900",
      image: "/images/r11.jpeg",
    },
    {
      id: 18,
      name: "Classic Pearl Circles",
      price: "$160.00",
      image: "/images/e14.jpeg",
    },
   
     {
      id: 19,
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
      <h2 className="fw-bold mb-3">Our Best sales</h2>
      <p className="text-muted mb-4">Discover elegance that shines forever</p>
      <div className="row g-4">
        {products.map((item) => (
          <div key={item.id} className="col-md-3 col-sm-20">
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
