'use client';

import { useEffect, useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import { services as serviceList } from '../lib/services';
import NavigationMenuDemo from '../components/Header';

type Service = {
  id: number;
  title: string;
  description: string;
  image?: string;
};

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    // Simulating API fetch
    setTimeout(() => {
      setServices(serviceList);
    }, 500);
  }, []);

  return (
    <div className="bg-background w-full min-h-screen font-[family-name:var(--font-geist-sans)]">
      <NavigationMenuDemo />
      <div className="services-section container flex flex-col mx-auto sm:gap-20 gap-12 px-4 md:py-16 lg:py-20 py-12">
        <h1 className="text-3xl font-bold">My Services</h1>

        {services.length === 0 ? (
          <p className="text-gray-500">Loading services...</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(service => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
