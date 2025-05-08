import React, { useEffect, useState } from 'react';
import { testimonials } from '../utils/constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    }, {
      threshold: 0.1
    });

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      fadeElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section id="temoignages" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="fade-in section-title">Ils ont vécu la transformation</h2>
          <p className="fade-in delay-100 section-subtitle max-w-2xl mx-auto">
            Découvrez comment Confiance Absolue™ a changé leur vie personnelle et professionnelle
          </p>
        </div>

        <div className="fade-in delay-200 max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl p-6 md:p-12 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-600 to-amber-500"></div>
            
            {/* Desktop Layout */}
            <div className="hidden md:grid grid-cols-3 gap-8">
              <div className="col-span-1">
                <div className="aspect-square overflow-hidden rounded-xl">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="col-span-2 flex flex-col justify-between">
                <div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-slate-600 text-lg italic mb-6">
                    "{testimonials[activeIndex].testimonial}"
                  </p>
                </div>
                
                <div>
                  <p className="font-heading font-bold text-xl text-slate-800">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="text-amber-600">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Mobile Layout */}
            <div className="md:hidden">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="text-center mb-4">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                
                <p className="text-slate-600 italic mb-6">
                  "{testimonials[activeIndex].testimonial}"
                </p>
                
                <p className="font-heading font-bold text-lg text-slate-800">
                  {testimonials[activeIndex].name}
                </p>
                <p className="text-amber-600">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      activeIndex === index ? 'bg-amber-500 w-6' : 'bg-slate-300'
                    }`}
                    aria-label={`Témoignage ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
                aria-label="Témoignage suivant"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;