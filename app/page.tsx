"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, Dog, Cat, Heart, Phone, Mail, Star, MapPin, Download, CheckCircle2 } from 'lucide-react';

export default function BarksNBubblesDemo() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  // PWA Logic: Catch the install prompt
  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') setDeferredPrompt(null);
    } else {
      alert("To install: Tap 'Share' then 'Add to Home Screen' 📲");
    }
  };

  const services = [
    {
      title: "Full Spa Grooming",
      price: "$65+",
      image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=400",
      desc: "Deep bath, breed-specific haircut, and nail trimming.",
      icon: <Scissors size={20} />
    },
    {
      title: "The Refresh",
      price: "$40+",
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=400",
      desc: "Premium wash, blow-dry, and ear cleaning. No cut.",
      icon: <Dog size={20} />
    },
    {
      title: "Feline Luxe",
      price: "$75+",
      image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=400",      desc: "Gentle cat grooming including Lion Cuts.",
      icon: <Cat size={20} />
    }
  ];

  return (
    <div className="max-w-md mx-auto bg-slate-50 min-h-screen pb-32 font-sans antialiased text-slate-900">
      
      {/* 1. Glassmorphism Hero */}
      <header className="relative h-72 rounded-b-[3.5rem] overflow-hidden shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80" 
          className="absolute inset-0 w-full h-full object-cover brightness-75"
          alt="Happy dog"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-sky-900/40" />
        
        <div className="relative z-10 p-8 h-full flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
              <h1 className="text-3xl font-black italic tracking-tighter text-white">BARKS N BUBBLES</h1>
              <p className="text-sky-200 text-xs font-bold tracking-[0.2em] uppercase">West Ashley, SC</p>
            </motion.div>
            <button onClick={handleInstall} className="bg-white/20 backdrop-blur-md p-3 rounded-2xl text-white">
              <Download size={20} />
            </button>
          </div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 p-5 rounded-3xl"
          >
            <div className="flex items-center gap-2 mb-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#fbbf24" className="text-yellow-400" />)}
              <span className="text-white text-xs font-bold ml-1">4.8 (Google)</span>
            </div>
            <h2 className="text-xl font-extrabold text-white leading-tight">Charleston's Choice for Stress-Free Grooming</h2>
          </motion.div>
        </div>
      </header>

      {/* 2. Services Grid */}
      <main className="p-6">
        <h3 className="text-lg font-black uppercase tracking-tight text-slate-800 mb-6 px-1">Professional Care</h3>
        <div className="space-y-6">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileTap={{ scale: 0.97 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 flex flex-col"
            >
              <img src={service.image} className="h-40 w-full object-cover" alt={service.title} />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <span className="p-2 bg-sky-50 text-sky-600 rounded-xl">{service.icon}</span>
                    <h4 className="font-bold text-slate-800">{service.title}</h4>
                  </div>
                  <span className="text-sky-600 font-black tracking-tighter">{service.price}</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. The Promise (High Trust) */}
        <section className="mt-10 bg-sky-600 rounded-[2.5rem] p-8 text-white relative overflow-hidden">
          <Heart className="absolute -top-6 -right-6 text-white/10 w-32 h-32" />
          <h4 className="text-lg font-black mb-4 flex items-center gap-2">
            <CheckCircle2 size={24} /> OUR GENTLE PROMISE
          </h4>
          <p className="text-sky-100 text-sm leading-relaxed font-medium">
            We specialize in slow-paced appointments for high-anxiety and senior pets. No cages, no rush—just the one-on-one attention your best friend deserves.
          </p>
        </section>
      </main>

      {/* 4. Sticky Mobile Bar */}
      <nav className="fixed bottom-6 left-6 right-6 z-50">
        <div className="bg-slate-900/95 backdrop-blur-2xl rounded-[2.5rem] p-3 flex items-center justify-between border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          <a href="tel:+18432243694" className="w-14 h-14 flex items-center justify-center text-white/70 hover:text-white transition-colors">
            <Phone size={24} />
          </a>
          
          <button 
            onClick={() => window.open('mailto:bookings@barksnbubbles.com?subject=Grooming Request')}
            className="bg-sky-500 hover:bg-sky-400 text-white flex-1 mx-2 py-4 rounded-3xl font-black text-sm tracking-widest shadow-lg shadow-sky-500/20 active:scale-95 transition-all"
          >
            BOOK NOW
          </button>

          <a href="https://maps.google.com/?q=846+Dupont+Rd+Charleston+SC" className="w-14 h-14 flex items-center justify-center text-white/70 hover:text-white transition-colors">
            <MapPin size={24} />
          </a>
        </div>
      </nav>
    </div>
  );
}
