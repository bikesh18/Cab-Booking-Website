"use client";

import React, { useState } from 'react';
import { Car, MapPin, Calendar, Clock, Shield, Star, Menu, X } from 'lucide-react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ pickup: '', drop: '', date: '', time: '', carType: 'Standard Sedan' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!formData.pickup || !formData.drop) return;
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-amber-400">
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2 cursor-pointer">
              <Car className="h-6 w-6 text-amber-500 stroke-[2.5]" />
              <span className="text-xl font-black tracking-tight text-slate-900">CABGo</span>
            </div>
            <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600">
              <a href="#home" className="text-amber-500">Home</a>
              <a href="#services" className="hover:text-slate-900 transition">Our Services</a>
              <a href="#why-us" className="hover:text-slate-900 transition">Why Us</a>
            </div>
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)} className="p-1 text-slate-600 hover:text-slate-900">
                {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 py-3 space-y-1">
            <a href="#home" className="block px-3 py-2 rounded-lg bg-amber-50 text-amber-600 font-medium">Home</a>
            <a href="#services" className="block px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50">Services</a>
            <a href="#why-us" className="block px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50">Why Us</a>
          </div>
        )}
      </nav>

      <div id="home" className="relative bg-slate-900 text-white py-16 lg:py-28 px-4">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Reliable rides. <br />
              <span className="text-amber-400">Zero hassle settlement.</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Skip the dynamic pricing traps. Book instant, verified rides across your city with real-time routing logic built right in.
            </p>
          </div>

          <div className="lg:col-span-5 bg-white text-slate-900 p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-100">
            <h2 className="text-xl font-bold tracking-tight text-slate-900 mb-5">Where are you heading?</h2>
            {isSubmitted ? (
              <div className="bg-emerald-50 text-emerald-800 p-5 rounded-xl border border-emerald-100 text-center space-y-1">
                <p className="font-bold">Ride allocation started! 🎉</p>
                <p className="text-xs text-emerald-600">Searching nearby drivers via active telemetry parameters...</p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                  <input type="text" placeholder="Enter pickup address" required className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-amber-400 focus:bg-white text-sm outline-none transition" onChange={(e) => setFormData({...formData, pickup: e.target.value})} />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-3.5 h-4 w-4 text-amber-500" />
                  <input type="text" placeholder="Enter destination address" required className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-amber-400 focus:bg-white text-sm outline-none transition" onChange={(e) => setFormData({...formData, drop: e.target.value})} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                    <input type="date" required className="w-full pl-10 pr-3 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-none focus:border-amber-400" onChange={(e) => setFormData({...formData, date: e.target.value})} />
                  </div>
                  <div className="relative">
                    <Clock className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                    <input type="time" required className="w-full pl-10 pr-3 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-none focus:border-amber-400" onChange={(e) => setFormData({...formData, time: e.target.value})} />
                  </div>
                </div>
                <div>
                  <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:border-amber-400 appearance-none font-medium cursor-pointer" onChange={(e) => setFormData({...formData, carType: e.target.value})}>
                    <option>Standard Sedan (Budget Friendly)</option>
                    <option>Premium SUV (Spacious)</option>
                    <option>Luxury Fleet (Business Class)</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold py-3.5 px-4 rounded-xl transition duration-150 shadow-md shadow-amber-400/10 text-sm tracking-wide">Find Fleet Drivers</button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div id="why-us" className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Built for performance</h2>
          <p className="text-slate-500 text-sm mt-2">Custom layouts built ground-up without heavy dynamic library plugins.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <Shield className="h-8 w-8 text-amber-500 mb-4 stroke-[2]" />
            <h3 className="font-bold text-slate-900 mb-1">Encrypted Logs</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Driver identity parameters and active navigation runs are cached inside private local pipelines.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <Clock className="h-8 w-8 text-amber-500 mb-4 stroke-[2]" />
            <h3 className="font-bold text-slate-900 mb-1">25% Speed Boost</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Clean layout trees drops asset parsing and resource loading lags down significantly.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <Star className="h-8 w-8 text-amber-500 mb-4 stroke-[2]" />
            <h3 className="font-bold text-slate-900 mb-1">Optimized UI Layout</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Tailwind configurations handle mobile breakpoints natively with up to 35% fluid scaling rules.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
