import React from 'react';
import { MapPin, Users, Star, ArrowRight } from 'lucide-react';

export default function VenueCard({ name, location, image, capacity, rating, price }: any) {
    return (
        <div className="group relative rounded-[2.5rem] overflow-hidden cursor-pointer">
            {/* Image */}
            <div className="h-[400px] w-full relative">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                    <div className="flex justify-between items-end">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <MapPin className="w-4 h-4 text-primary-600" />
                                <span className="text-xs font-bold uppercase tracking-widest">{location}</span>
                            </div>
                            <h3 className="text-2xl font-black mb-2">{name}</h3>
                            <div className="flex gap-4 text-sm font-medium opacity-80">
                                <span>{capacity} Guests</span>
                                <span>•</span>
                                <span>{price}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                            <Star className="w-3 h-3 fill-primary-600 text-primary-600" />
                            <span className="text-xs font-bold">{rating}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
