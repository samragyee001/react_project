import React from 'react'

export default function Necklaces() {
 const products = [
    {
      id: 1,
      name: " Forever Infinity Necklace",
      price: "Rs 1000",
      image: "/images/n1.jpeg",
    },
    {
      id: 2,
      name: "Crystal Bloom Necklace",
      price: "Rs 1100",
      image: "/images/n2.jpeg",
    },
    {
      id: 3,
      name: "Golden Drop Necklace",
      price: "Rs 1300",
      image: "/images/n3.jpeg",
    },
    {
      id: 4,
      name: "Sweetheart Shine Necklace",
      price: "Rs 600",
      image: "/images/n4.jpeg",
    },
    {
      id: 5,
      name: "Classic Pearl Charm",
      price: "Rs 500",
      image: "/images/n5.jpeg",
    },
    {
      id: 6,
      name: "Golden Leaf Trail",
      price: "Rs 900",
      image: "/images/n6.jpeg",
    },
    {
      id: 7,
      name: "Nature Loop Necklace",
      price: "Rs 1500",
      image: "/images/n7.jpeg",
    },
    {
      id: 8,
      name: "Golden Hearts Chain",
      price: "Rs 700",
      image: "/images/n8.jpeg",
    },
    {
      id: 9,
      name: "Trio Pearl Layers",
      price: "Rs 1200",
      image: "/images/n9.jpeg",
    },
    {
      id: 10,
      name: "Antler Glow Necklace",
      price: "Rs 900",
      image: "/images/n10.jpeg",
    },
    {
      id: 11,
      name: "Moonlight Choker",
      price: "Rs 1500",
      image: "/images/n11.jpeg",
    },
    {
      id: 12,
      name: "Bridal Blossom Necklace",
      price: "Rs 2000",
      image: "/images/n12.jpeg",
    },
   
    
  ];

  // Optional: handle Add to Cart click
  const handleAddToCart = (product) => {
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="container py-5 text-center">
      <h2 className="fw-bold mb-3">Our Featured Necklaces</h2>
      <p className="text-muted mb-4">Discover elegance that shines forever</p>
      <div className="row g-4">
        {products.map((item) => (
          <div key={item.id} className="col-md-3 col-sm-12  ">
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
 
