import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="text-2xl font-heading font-bold text-primary-800">
          Confiance Absolue™
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#programme" className="text-slate-700 hover:text-amber-600 transition-colors">
            Programme
          </a>
          <a href="#pour-qui" className="text-slate-700 hover:text-amber-600 transition-colors">
            Pour qui
          </a>
          <a href="#benefices" className="text-slate-700 hover:text-amber-600 transition-colors">
            Bénéfices
          </a>
          <a href="#temoignages" className="text-slate-700 hover:text-amber-600 transition-colors">
            Témoignages
          </a>
          <a href="#offres" className="text-slate-700 hover:text-amber-600 transition-colors">
            Offres
          </a>
          <a href="#inscription" className="btn-primary">
            Je m'inscris
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a 
              href="#programme" 
              className="text-slate-700 hover:text-amber-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Programme
            </a>
            <a 
              href="#pour-qui" 
              className="text-slate-700 hover:text-amber-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pour qui
            </a>
            <a 
              href="#benefices" 
              className="text-slate-700 hover:text-amber-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Bénéfices
            </a>
            <a 
              href="#temoignages" 
              className="text-slate-700 hover:text-amber-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Témoignages
            </a>
            <a 
              href="#offres" 
              className="text-slate-700 hover:text-amber-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Offres
            </a>
            <a 
              href="#inscription" 
              className="btn-primary w-full text-center py-3"
              onClick={() => setIsMenuOpen(false)}
            >
              Je m'inscris
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;