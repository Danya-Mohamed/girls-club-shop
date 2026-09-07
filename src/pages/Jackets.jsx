import React, { useState, useEffect } from "react";

import PageLayout from "../components/PageLayout";
import FilterSidebar from "../components/FilterSidebar";
import JacketCard from "../components/JacketCard";

const Jackets = () => {
  const [products, setProducts] = useState([]);

  const [filters, setFilters] = useState({
    category: "jackets",
    sizes: [],
    price: 500,
  });

  // ✅ FETCH API (RESTORED)
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const femaleJackets = data.filter(
          (item) =>
            item.category === "women's clothing" &&
            (item.title.toLowerCase().includes("jacket") ||
              item.title.toLowerCase().includes("coat"))
        );

        const formatted = femaleJackets.map((item) => ({
          id: item.id,
          name: item.title,
          price: item.price,
          size: "M",
          image: item.image,
        }));

        setProducts(formatted);
      });
  }, []);

  return (
    <PageLayout>
      {(search) => {

        const filteredProducts = products
          // 🔍 SEARCH
          .filter((p) =>
            p.name.toLowerCase().includes(search.toLowerCase())
          )

          // 🎯 FILTERS
          .filter((p) => {
            const sizeMatch =
              filters.sizes.length === 0 ||
              filters.sizes.includes(p.size);

            const priceMatch = p.price <= filters.price;

            return sizeMatch && priceMatch;
          });

        return (
          <div className="shop-layout">

            {/* FILTER SIDEBAR */}
            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
            />

            {/* CONTENT */}
            <div className="shop-content">

              <h2
                style={{
                  fontFamily: "Playfair Display",
                  fontWeight: 300,
                  letterSpacing: "3px",
                  marginBottom: "30px",
                }}
              >
                JACKETS COLLECTION
              </h2>

              <div className="fashion-grid">

                {filteredProducts.map((item) => (
                  <JacketCard key={item.id} item={item} />
                ))}

              </div>

            </div>

          </div>
        );
      }}
    </PageLayout>
  );
};

export default Jackets;