import activities from "@/change_data/activities.json";

type Activity = {
  title: string;
  description: string;
  image: string;
};

export default function ActivitiesSection() {
  return (
    <section id="activities" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">Expériences & Activités techniques</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {(activities as Activity[]).map((activity, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden bg-white/10 border border-white/10 shadow-lg"
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{activity.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}