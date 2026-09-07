export default function FilterSidebar({ filters, setFilters }) {
  return (
    <div className="filter-sidebar">

      <div className="filter-section">
        <h4>CATEGORY</h4>

        {["all", "hoodies", "tshirts", "jackets"].map((cat) => (
          <label key={cat}>
            <input
              type="radio"
              checked={filters.category === cat}
              onChange={() => setFilters({ ...filters, category: cat })}
            />
            {cat}
          </label>
        ))}
      </div>

      <div className="filter-section">
        <h4>SIZE</h4>

        {["XS","S","M","L","XL"].map((size) => (
          <label key={size}>
            <input
              type="checkbox"
              checked={filters.sizes.includes(size)}
              onChange={() => {
                const updated = filters.sizes.includes(size)
                  ? filters.sizes.filter(s => s !== size)
                  : [...filters.sizes, size];

                setFilters({ ...filters, sizes: updated });
              }}
            />
            {size}
          </label>
        ))}
      </div>

      <div className="filter-section">
        <h4>PRICE</h4>

        <input
          type="range"
          min="0"
          max="500"
          value={filters.price}
          onChange={(e) =>
            setFilters({ ...filters, price: e.target.value })
          }
        />

        <p>Max ${filters.price}</p>
      </div>

    </div>
  );
}