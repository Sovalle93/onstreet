// components/common/FloatingContactButton.js
'use client';
import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef(null);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual API call)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      setShowSuccess(false);
      setIsOpen(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50" ref={formRef}>
      {/* Contact Form Popup */}
      <div 
        className={`
          absolute bottom-20 right-0 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden
          transition-all duration-300 transform origin-bottom-right
          ${isOpen 
            ? 'opacity-100 scale-100 pointer-events-auto' 
            : 'opacity-0 scale-95 pointer-events-none'
          }
        `}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#fb5103] to-[#fd7b3c] p-4">
          <div className="flex justify-between items-center">
            <h3 className="text-white font-bold text-lg">¿Cómo podemos ayudarte?</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          <p className="text-white/90 text-sm mt-1">
            Déjanos tus datos y te contactaremos a la brevedad
          </p>
        </div>

        {/* Success Message */}
        {showSuccess ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8 text-green-500" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">¡Mensaje enviado!</h4>
            <p className="text-gray-600">Te contactaremos pronto</p>
          </div>
        ) : (
          <>
            {/* Quick Contact Options */}
            <div className="grid grid-cols-3 gap-2 p-4 bg-gray-50 border-b">
              <a 
                href="tel:+56998787894"
                className="flex flex-col items-center p-2 rounded-lg hover:bg-white transition-colors group"
              >
                <div className="w-10 h-10 bg-[#fb5103]/10 rounded-full flex items-center justify-center mb-1 group-hover:bg-[#fb5103]/20 transition-colors">
                  <Phone size={18} className="text-[#fb5103]" />
                </div>
                <span className="text-xs text-gray-600">Llamar</span>
              </a>
              <a 
                href="https://wa.me/56998787894"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-2 rounded-lg hover:bg-white transition-colors group"
              >
                <div className="w-10 h-10 bg-[#fb5103]/10 rounded-full flex items-center justify-center mb-1 group-hover:bg-[#fb5103]/20 transition-colors">
                  <MessageCircle size={18} className="text-[#fb5103]" />
                </div>
                <span className="text-xs text-gray-600">WhatsApp</span>
              </a>
              <a 
                href="mailto:ventas@onstreet.com"
                className="flex flex-col items-center p-2 rounded-lg hover:bg-white transition-colors group"
              >
                <div className="w-10 h-10 bg-[#fb5103]/10 rounded-full flex items-center justify-center mb-1 group-hover:bg-[#fb5103]/20 transition-colors">
                  <Mail size={18} className="text-[#fb5103]" />
                </div>
                <span className="text-xs text-gray-600">Email</span>
              </a>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="p-4 space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Tu nombre"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fb5103]/50 focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Tu email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fb5103]/50 focus:border-transparent"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="¿En qué podemos ayudarte?"
                  rows="3"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fb5103]/50 focus:border-transparent resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#fb5103] text-white py-3 rounded-lg font-medium hover:bg-[#e64500] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Enviando...
                  </>
                ) : (
                  'Enviar mensaje'
                )}
              </button>
            </form>

            {/* Footer Note */}
            <div className="px-4 pb-4 text-center">
              <p className="text-xs text-gray-500">
                Te responderemos en menos de 24 horas
              </p>
            </div>
          </>
        )}
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          relative group flex items-center justify-center
          w-14 h-14 rounded-full shadow-lg transition-all duration-300
          ${isOpen 
            ? 'bg-gray-600 rotate-90' 
            : 'bg-[#fb5103] hover:bg-[#e64500] hover:scale-110'
          }
        `}
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <>
            <MessageCircle size={24} className="text-white" />
            
            {/* Tooltip on hover */}
            <span className="absolute right-16 whitespace-nowrap bg-gray-800 text-white text-sm py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              ¿Necesitas ayuda?
              <span className="absolute top-1/2 -right-1 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800"></span>
            </span>

            {/* Subtle pulse animation */}
            <span className="absolute inset-0 rounded-full bg-[#fb5103] animate-ping opacity-20"></span>
          </>
        )}
      </button>

      {/* Optional: Small badge for unread/unseen */}
      {!isOpen && (
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></span>
      )}
    </div>
  );
};

export default ContactButton;