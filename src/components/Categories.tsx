import { useState, useEffect } from "react";
import Link from "next/link";

const Categories = () => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="mb-4 text-3xl font-bold">Categories</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => (
          <div
            key={category}
            className="rounded-lg bg-white p-4 shadow-lg transition-colors duration-300 hover:bg-gray-100"
          >
            <Link href={`/category/${category}`} passHref>
              <div className="text-xl font-semibold text-gray-800">
                {category}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
