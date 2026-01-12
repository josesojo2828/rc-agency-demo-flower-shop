import { ProductCard } from "../ui/ProductCard";

const FEATURED_PRODUCTS = [
    { id: 101, name: "Luxury Red Roses", price: 89.99, category: "Bouquets", rating: 4.9, image: "https://images.unsplash.com/photo-1591886960571-74d43a5692f6?auto=format&fit=crop&q=80&w=500" },
    { id: 102, name: "White Orchid", price: 49.50, category: "Potted Plants", rating: 4.7, image: "https://images.unsplash.com/photo-1566938064504-a6998b21baae?auto=format&fit=crop&q=80&w=500" },
    { id: 103, name: "Wedding Centerpiece", price: 150.00, category: "Wedding", rating: 5.0, image: "https://images.unsplash.com/photo-1525258946800-98cfd641d0de?auto=format&fit=crop&q=80&w=500" },
    { id: 104, name: "Succulent Trio", price: 35.99, category: "Potted Plants", rating: 4.6, image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&q=80&w=500" },
];

export function FeaturedProducts() {
    return (
        <section className="py-16 bg-base-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Trending Now</h2>
                    <p className="text-base-content/60 max-w-2xl mx-auto">Discover the hottest products of the season. Handpicked for quality and style.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {FEATURED_PRODUCTS.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
