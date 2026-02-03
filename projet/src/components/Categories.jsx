// import "../styles/Categories.css";

// function Categories() {
//   return (
//     <section className="categories">
//       <h2>Shop </h2>

//       <div className="category-grid">
//         <div className="card">Rings</div>
//         <div className="card">Bracelets</div>
//         <div className="card">Necklace</div>
//         <div className="card">Perfume</div>
//       </div>
//     </section>
//   );
// }

// export default Categories;

import "../styles/Categories.css";

function Categories({ setPage }) {
  return (
    <section className="categories">
      <h2
        className="shop-title"
        onClick={() => setPage("shop")}
      >
        Shop
      </h2>

      <div className="category-grid">
        <div className="card" onClick={() => setPage("rings")}>
          <img src="/images/rings.jpg" alt="Rings" />
          <span>Rings</span>
        </div>

        <div className="card" onClick={() => setPage("bracelets")}>
          <img src="/images/Aesthetic.jpg" alt="Bracelets" />
          <span>Bracelets</span>
        </div>

        <div className="card" onClick={() => setPage("necklace")}>
          <img src="/images/rings.jpg" alt="Necklace" />
          <span>Necklace</span>
        </div>
      </div>
    </section>
  );
}

export default Categories;







