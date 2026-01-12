import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const SLIDES = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=1920",
        title: "Fresh Spring Blooms",
        subtitle: "Handpicked flowers for your special moments.",
        cta: "Shop Bouquets",
        color: "from-rose-500/80 to-pink-500/80"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&q=80&w=1920",
        title: "Wedding Arrangements",
        subtitle: "Elegant designs for your perfect day.",
        cta: "View Gallery",
        color: "from-green-500/80 to-emerald-500/80"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1463043254199-7a3efd782ad1?auto=format&fit=crop&q=80&w=1920",
        title: "Potted Plants",
        subtitle: "Bring nature inside your home.",
        cta: "Explore Plants",
        color: "from-teal-500/80 to-cyan-500/80"
    }
];

export function Hero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % SLIDES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

    return (
        <div className="relative h-[600px] w-full overflow-hidden bg-base-300">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <img
                        src={SLIDES[current].image}
                        alt={SLIDES[current].title}
                        className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-linear-to-r ${SLIDES[current].color} mix-blend-multiply opacity-60`} />
                    <div className="absolute inset-0 bg-black/30" />
                </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4 z-10">
                <div className="max-w-3xl">
                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={`title-${current}`}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-5xl md:text-7xl font-black mb-6 tracking-tight drop-shadow-lg"
                        >
                            {SLIDES[current].title}
                        </motion.h1>
                        <motion.p
                            key={`sub-${current}`}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl mb-8 opacity-90 font-light"
                        >
                            {SLIDES[current].subtitle}
                        </motion.p>
                        <motion.div
                            key={`btn-${current}`}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <Link to="/products" className="btn btn-primary btn-lg border-none shadow-xl hover:scale-105 transition-transform text-white">
                                {SLIDES[current].cta} <ArrowRight className="ml-2" />
                            </Link>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Controls */}
            <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 btn btn-circle btn-ghost text-white hover:bg-white/20 z-20">
                <ChevronLeft className="w-8 h-8" />
            </button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 btn btn-circle btn-ghost text-white hover:bg-white/20 z-20">
                <ChevronRight className="w-8 h-8" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {SLIDES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === current ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"}`}
                    />
                ))}
            </div>
        </div>
    );
}
