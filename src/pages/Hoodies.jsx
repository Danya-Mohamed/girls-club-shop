import { useState } from "react";

import PageLayout from "../components/PageLayout";
import FilterSidebar from "../components/FilterSidebar";

import HoodiesCard from "../components/HoodiesCard";
import { hoodies } from "../data/hoodies";

const Hoodies = () => {
  const [filters, setFilters] = useState({
    category: "hoodies",
    sizes: [],
    price: 500,
  });

  const products = hoodies;

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
                HOODIES COLLECTION
              </h2>

              <div className="fashion-grid">
                {filteredProducts.map((item) => (
                  <HoodiesCard key={item.id} item={item} />
                ))}
              </div>

            </div>

          </div>
        );
      }}
    </PageLayout>
  );
};

export default Hoodies;