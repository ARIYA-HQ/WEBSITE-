import React from 'react';
import { MapPin } from 'lucide-react';

interface VenueCardProps {
    name: string;
    location: string;
    image: string;
    blurb: string;
    href: string;
}

export default function VenueCard({ name, location, image, blurb, href }: VenueCardProps) {
    return (
        <a href={href} className="group relative block rounded-[2.5rem] overflow-hidden">
            <div className="h-[400px] w-full relative">
                <img
                    src={image}
                    alt={`${name} in ${location}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                    <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-primary-600" />
                        <span className="text-xs font-bold uppercase tracking-widest">{location}</span>
                    </div>
                    <h3 className="text-2xl font-black mb-2">{name}</h3>
                    <p className="text-sm font-medium opacity-80">{blurb}</p>
                </div>
            </div>
        </a>
    );
}
