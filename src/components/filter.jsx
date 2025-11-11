import { useEffect, useState } from "react";

function Filter({ data, setSelectedCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (!data || data.length === 0) return;
    const unique = ['all', ...new Set(data.map(item => item.category))];
    setCategories(unique);
  }, [data]);

  return (
    <div className="mb-4">
      <select
        onChange={e => setSelectedCategory(e.target.value)}
        className="border px-3 py-2 rounded focus:outline-(--Brand-Green)"
      >
        {categories.map(cat => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;