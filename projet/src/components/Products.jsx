// import "../styles/Products.css";
// import p1 from "../assets/product1.jpg";
// import p2 from "../assets/product2.jpg";
// import p3 from "../assets/product3.jpg";

function Products() {
  return (
    <section className="products">
      <h2>Browse Our Shop</h2>

      <div className="product-grid">
        {[p1, p2, p3].map((img, i) => (
          <div className="product-card" key={i}>
            <img src={img} />
            <p>Minimal Gold Ring</p>
            <span>$45.00</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
