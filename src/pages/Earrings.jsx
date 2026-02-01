import React from 'react'

export default function Earrings(){
const products = [
    {
      id: 1,
      name: "Vintage Bloom Earrings",
      price: "$120.00",
      image: "/images/e1.jpeg",
    },
    {
      id: 2,
      name: "Pearl Halo Earrings",
      price: "$89.00",
      image: "/images/e2.jpeg",
    },
    {
      id: 3,
      name: "Marble Heart Studs",
      price: "$110.00",
      image: "/images/e3.jpeg",
    },
    {
      id: 4,
      name: "Crystal Drop Hoops",
      price: "$150.00",
      image: "/images/e4.jpeg",
    },
    {
      id: 5,
      name: "Sparkle Loop Earrings",
      price: "$175.00",
      image: "/images/e5.jpeg",
    },
    {
      id: 6,
      name: "Vintage Ruby Ring",
      price: "$160.00",
      image: "/images/e6.jpeg",
    },
    {
      id: 6,
      name: "Gem Bow Hoops",
      price: "$160.00",
      image: "/images/e7.jpeg",
    },
    {
      id: 6,
      name: "Vintage Ruby Ring",
      price: "$160.00",
      image: "/images/e8.jpeg",
    },
    {
      id: 6,
      name: "Vintage Ruby Ring",
      price: "$160.00",
      image: "/images/e9.jpeg",
    },
    {
      id: 6,
      name: "Vintage Ruby Ring",
      price: "$160.00",
      image: "/images/e10.jpeg",
    },
    
    {
      id: 6,
      name: "Vintage Ruby Ring",
      price: "$160.00",
      image: "/images/e12.jpeg",
    },
    {
      id: 6,
      name: "Vintage Ruby Ring",
      price: "$160.00",
      image: "/images/e13.jpeg",
    },
    {
      id: 6,
      name: "Classic Pearl Circles",
      price: "$160.00",
      image: "/images/e14.jpeg",
    },
   
   
  ];

  // Optional: handle Add to Cart click
  const handleAddToCart = (product) => {
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="container py-5 text-center">
      <h2 className="fw-bold mb-3">Our Featured Earrings</h2>
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
 
