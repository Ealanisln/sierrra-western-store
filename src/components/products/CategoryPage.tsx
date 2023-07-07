import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

interface Item {
  id: number;
  title: string;
  price: number;
  image: string;
}

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    if (category) {
      fetch(`https://fakestoreapi.com/products/category/${category.toString()}`)
        .then((res) => res.json())
        .then((json: Item[]) => setItems(json))
        .catch((error) => console.error("Error:", error));
    }
  }, [category]);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="mb-4 text-3xl font-bold">{category}</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-lg bg-white p-4 shadow-lg transition-colors duration-300 hover:bg-gray-100"
          >
            <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
            <p className="text-gray-600">${item.price}</p>
            <Image src={item.image} alt={item.title} width={300} height={300} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;