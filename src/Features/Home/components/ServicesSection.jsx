import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Book Appointments",
    description: "Book directly your desired appointment and get notified your book is done",
    image: "/assets/bookcard.jpg",
    page: "/appointments",
  },
  {
    title: "Health Products",
    description: "Discover doctor-approved supplements, vitamins, and essentials.",
    image: "/assets/as.jpg",
    page: "/store",
  },
  {
    title: "Wellness Tips",
    description: "Daily tips and lifestyle advice to stay active, energized, and stress-free.",
    image: "/assets/tipscard2.jpg",
    page: "/wellness",
  },
  {
    title: "Health Records",
    description: "Securely store and access your health records anytime, anywhere.",
    image: "/assets/records.jpg",
    page: "/records",
  }
];

const ServicesSection = () => {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center text-slate-900 sm:text-4xl">Our Services</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-6 text-slate-600 sm:text-base">
          Explore the parts of Klinica that help you book care, shop wellness products, and stay on
          top of your health.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Link key={service.title} to={service.page} className="group">
              <div
                className="relative h-72 overflow-hidden rounded-3xl bg-cover bg-center text-white shadow-md transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl sm:h-80"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6">
                  <h3 className="text-xl font-bold sm:text-2xl">{service.title}</h3>
                  <p className="mt-2 max-w-sm text-sm font-medium leading-6 text-slate-100 sm:text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
