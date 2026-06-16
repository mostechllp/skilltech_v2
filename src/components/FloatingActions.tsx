import React from 'react';
import { Phone, MessageCircle, MessageSquare, MonitorPlay } from 'lucide-react';
export function FloatingActions() {
  return (
    <div className="fixed right-4 top-3/4 -translate-y-1/2 flex flex-col gap-3 z-50">
      <a
        href="#"
        className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
        
        <MessageCircle className="w-5 h-5" />
      </a>
      <a
        href="#"
        className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
        
        <Phone className="w-5 h-5" />
      </a>
      <a
        href="#"
        className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
        
        <MonitorPlay className="w-5 h-5" />
      </a>
      <a
        href="#"
        className="w-10 h-10 rounded-full bg-pink-accent text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
        
        <MessageSquare className="w-5 h-5" />
      </a>
    </div>);

}