import React from 'react';
import { MapPin, Users, Star, ArrowRight } from 'lucide-react';

export default function VenueCard({ name, location, image, capacity, rating, price }: any) {
    return (
        <div className="bg-white rounded-[2rem] overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col items-center">
            <div className="relative h-64 w-full overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                    <Star className="w-3 h-3 text-primary-600 fill-primary-600" />
                    {rating}
                </div>
            </div>
            <div className="p-8 w-full text-center">
                <div className="flex items-center justify-center gap-2 text-primary-600 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest">{location}</span>
                </div>
                <h3 className="text-xl font-black tracking-tight mb-4">{name}</h3>
                <div className="flex justify-between items-center text-gray-500 text-xs font-bold uppercase tracking-wider mb-6">
                    <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{capacity} Seats</span>
                    </div>
                    <div>{price}</div>
                </div>
                <button className="w-full py-4 border-2 border-gray-100 rounded-full text-[10px] font-black uppercase tracking-widest group-hover:border-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all flex items-center justify-center gap-2">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
