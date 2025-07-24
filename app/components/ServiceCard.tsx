'use client'

import Image from "next/image";
import { usePathname } from "next/navigation";

type ServiceProps = {
  title: string;
  description: string;
  image?: string;
};

export default function ServiceCard({ title, description, image }: ServiceProps) {
  const pathname = usePathname();
  return (
    <div className={`p-4 text-foreground rounded-xl shadow space-y-2 ${
        pathname === '/services' ? 'bg-body' : 'bg-background'
      }`}>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-muted-foreground text-sm">{description}</p>
      <div className="service-img !h-[200px] mt-4 rounded-xl overflow-hidden">
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            className="mx-auto w-full h-full object-cover object-center"
          />
        )}
      </div>
    </div>
  );
}
