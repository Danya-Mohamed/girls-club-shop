import { useState } from "react";

import PageLayout from "../components/PageLayout";
import FilterSidebar from "../components/FilterSidebar";

import TshirtCard from "../components/TShirtCard";

import russtee from "../assets/russtee.jpg";
import matchatee from "../assets/matchtee.jpg";
import hearttee from "../assets/heart_tee.jpg";

const Tshirts = () => {
  const [filters, setFilters] = useState({
    category: "tshirts",
    sizes: [],
    price: 500,
  });

  const products = [
    { id: 1, name: "Rus Tee", price: 25, size: "M", image: russtee },
    { id: 2, name: "Matcha Tee", price: 30, size: "L", image: matchatee },
    { id: 3, name: "Heart Tee", price: 28, size: "S", image: hearttee },
  ];

  return (
    <PageLayout>
      {(search) => {

        const filteredProducts = products
          // 🔍 SEARCH FILTER (NEW)
          .filter((p) =>
            p.name.toLowerCase().includes(search.toLowerCase())
          )

          // 🎯 SIZE + PRICE FILTER
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
                T-SHIRTS COLLECTION
              </h2>

              <div className="fashion-grid">
                {filteredProducts.map((item) => (
                  <TshirtCard key={item.id} item={item} />
                ))}
              </div>

            </div>

          </div>
        );
      }}
    </PageLayout>
  );
};

export default Tshirts;