import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CATEGORIES = [
    {
        id: 1,
        name: "Bouquets",
        image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&q=80&w=500",
        itemCount: "45+ Styles",
        size: "large"
    },
    {
        id: 2,
        name: "Potted Plants",
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=500",
        itemCount: "30+ Varieties",
        size: "small"
    },
    {
        id: 3,
        name: "Wedding",
        image: "https://images.unsplash.com/photo-1507646227500-4d389b0012be?auto=format&fit=crop&q=80&w=500",
        itemCount: "Custom Packages",
        size: "small"
    },
    {
        id: 4,
        name: "Gifts",
        image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=500",
        itemCount: "25+ Sets",
        size: "medium"
    },
];

export function Categories() {
    return (
        <section className="py-16 bg-base-100">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-2">Shop by Category</h2>
                        <p className="opacity-60">Explore our wide range of collections.</p>
                    </div>
                    <Link to="/products" className="btn btn-ghost hover:bg-base-200">
                        View All <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[500px]">
                    {CATEGORIES.map((cat, index) => (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative group overflow-hidden rounded-2xl cursor-pointer ${cat.size === 'large' ? 'md:col-span-2 md:row-span-2' :
                                cat.size === 'medium' ? 'md:col-span-2 md:row-span-1' : 'md:col-span-1 md:row-span-1'
                                }`}
                        >
                            <img
                                src={cat.image}
                                alt={cat.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

                            <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                                <h3 className="text-2xl font-bold mb-1 translate-y-2 group-hover:translate-y-0 transition-transform">{cat.name}</h3>
                                <p className="text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    {cat.itemCount}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
