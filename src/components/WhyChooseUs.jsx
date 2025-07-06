import React from "react";
import { ShieldCheck, Clock, Users, MapPinned } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="text-sky-600" />,
    title: "Safe & Secure",
    desc: "Your safety is our top priority with verified drivers and vehicles.",
  },
  {
    icon: <Clock className="text-sky-600" />,
    title: "On Time, Every Time",
    desc: "Punctual pickups and hassle-free travel across all states.",
  },
  {
    icon: <Users className="text-sky-600" />,
    title: "Friendly Support",
    desc: "24/7 support from real humans who care about your journey.",
  },
  {
    icon: <MapPinned className="text-sky-600" />,
    title: "Local Experts",
    desc: "Our drivers and planners know the terrain — local, safe, and trusted.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-peacockBlue mb-8">
          Why Choose Us?
        </h3>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 mb-3">{f.icon}</div>
              <h4 className="text-lg font-semibold text-peacockBlue mb-1">
                {f.title}
              </h4>
              <p className="text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
