import { useState } from "react";

export interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
    rating: number;
}

const MOCK_PRODUCTS: Product[] = [
    { id: 1, name: "Classic Red Roses", price: 59.99, category: "Bouquets", rating: 4.8, image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&q=80&w=500" },
    { id: 2, name: "Spring Tulip Mix", price: 45.50, category: "Bouquets", rating: 4.6, image: "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&q=80&w=500" },
    { id: 3, name: "Monstera Deliciosa", price: 35.00, category: "Potted Plants", rating: 4.9, image: "https://images.unsplash.com/photo-1614594975525-e45852b82481?auto=format&fit=crop&q=80&w=500" },
    { id: 4, name: "Peony Delight", price: 65.00, category: "Bouquets", rating: 5.0, image: "https://images.unsplash.com/photo-1527334188587-c30f4a86b359?auto=format&fit=crop&q=80&w=500" },
    { id: 5, name: "Snake Plant", price: 29.99, category: "Potted Plants", rating: 4.5, image: "https://images.unsplash.com/photo-1599598425947-630e0b35799a?auto=format&fit=crop&q=80&w=500" },
    { id: 6, name: "Bridal Bouquet", price: 120.00, category: "Wedding", rating: 4.9, image: "https://images.unsplash.com/photo-1550050720-3b4097df6be2?auto=format&fit=crop&q=80&w=500" },
    { id: 7, name: "Orchid Pot", price: 55.00, category: "Potted Plants", rating: 4.7, image: "https://images.unsplash.com/photo-1566938064504-a6998b21baae?auto=format&fit=crop&q=80&w=500" },
    { id: 8, name: "Gift Box Set", price: 85.00, category: "Gifts", rating: 4.8, image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=500" },
];

export function useProducts() {
    const [products] = useState<Product[]>(MOCK_PRODUCTS);
    const [filters, setFilters] = useState({
        category: "All",
        minPrice: 0,
        maxPrice: 1000,
        search: "",
    });

    const uniqueCategories = ["All", ...new Set(products.map((p) => p.category))];

    const filteredProducts = products.filter((product) => {
        const matchesCategory = filters.category === "All" || product.category === filters.category;
        const matchesPrice = product.price >= filters.minPrice && product.price <= filters.maxPrice;
        const matchesSearch = product.name.toLowerCase().includes(filters.search.toLowerCase());
        return matchesCategory && matchesPrice && matchesSearch;
    });

    return {
        products: filteredProducts,
        allProducts: products,
        categories: uniqueCategories,
        filters,
        setFilters,
    };
}
