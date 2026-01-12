import { Star } from "lucide-react";

export function Testimonials() {
    const TESTIMONIALS = [
        {
            id: 1,
            name: "Olivia Rose",
            role: "Bride",
            text: "The flowers for my wedding were absolutely breathtaking. Bloom & Petal truly made my day magical with their arrangements.",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
        },
        {
            id: 2,
            name: "James Garden",
            role: "Loyal Customer",
            text: "I order a bouquet every month for my wife. The freshness lasts so long, and the designs are always unique and beautiful.",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
        },
        {
            id: 3,
            name: "Sophia Leaf",
            role: "Event Planner",
            text: "Professional, reliable, and incredibly talented. They are my go-to florist for all my corporate events and parties.",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100"
        }
    ];

    return (
        <section className="py-20 bg-base-200">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Love Notes</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((t) => (
                        <div key={t.id} className="card bg-base-100 shadow-xl border border-base-100 hover:-translate-y-2 transition-transform duration-300">
                            <div className="card-body">
                                <div className="flex gap-1 mb-4 text-warning">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                                </div>
                                <p className="mb-6 italic opacity-80">"{t.text}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="avatar">
                                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={t.avatar} alt={t.name} />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold">{t.name}</h4>
                                        <p className="text-xs opacity-60">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
