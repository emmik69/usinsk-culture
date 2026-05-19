import type {EventItem} from "../types/Event";

const events: EventItem[] = [
    { id: 1, title: "Йöлöга", image: "/yologa.jpg" },
    { id: 2, title: "Зарни сюр", image: "/zarni.jpg" },
    { id: 3, title: "Мырпом рöма", image: "/myrpom.jpg" },
    { id: 4, title: "Ми тани олам", image: "/mitany.jpg" },
    { id: 5, title: "Святая Троица", image: "/troica.jpg" },
];

const Events: React.FC = () => {
    return (
        <section className="px-32 py-10">
            <h2 className="text-2xl font-bold mb-6 pl-10">
                Культурные события
            </h2>

            <div className="flex justify-around">
                {events.map((event) => (
                    <div key={event.id} className="group cursor-pointer">

                        <div className="overflow-hidden rounded-xl">
                            <img
                                src={event.image}
                                alt={event.title}
                                className="min-w-72 h-32 object-cover group-hover:scale-110 transition duration-300"
                            />
                        </div>

                        <p className="mt-2 text-sm text-center">
                            {event.title}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Events;