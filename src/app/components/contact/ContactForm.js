// components/contact/ContactForm.js
'use client';
import { useState } from 'react';
import Recaptcha from './Recaptcha';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    celular: '',
    cargo: '',
    institucion: '',
    comentarios: ''
  });
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!captchaVerified) {
      alert('Por favor verifica que no eres un robot');
      return;
    }

    // Build WhatsApp message
    const message = `Nuevo contacto desde la web:%0A%0A` +
      `*Nombre:* ${formData.nombre}%0A` +
      `*Correo:* ${formData.correo}%0A` +
      `*Celular:* ${formData.celular || 'No proporcionado'}%0A` +
      `*Cargo:* ${formData.cargo || 'No proporcionado'}%0A` +
      `*Institución/Empresa:* ${formData.institucion || 'No proporcionado'}%0A` +
      `*Comentarios:* ${formData.comentarios}`;

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/56998787894?text=${message}`, '_blank');
    
    // Reset form
    setFormData({
      nombre: '',
      correo: '',
      celular: '',
      cargo: '',
      institucion: '',
      comentarios: ''
    });
    setCaptchaVerified(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      {/* Nombre completo */}
      <div>
        <label className="block text-gray-700 mb-2">
          Nombre completo <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f99963] focus:border-transparent"
          placeholder="Ingresa tu nombre completo"
        />
      </div>

      {/* Correo */}
      <div>
        <label className="block text-gray-700 mb-2">
          Correo <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f99963] focus:border-transparent"
          placeholder="ejemplo@correo.com"
        />
      </div>

      {/* Celular */}
      <div>
        <label className="block text-gray-700 mb-2">
          Celular
        </label>
        <input
          type="tel"
          name="celular"
          value={formData.celular}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f99963] focus:border-transparent"
          placeholder="+56 9 1234 5678"
        />
      </div>

      {/* Cargo */}
      <div>
        <label className="block text-gray-700 mb-2">
          Cargo
        </label>
        <input
          type="text"
          name="cargo"
          value={formData.cargo}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f99963] focus:border-transparent"
          placeholder="Tu cargo o posición"
        />
      </div>

      {/* Institución/Empresa */}
      <div>
        <label className="block text-gray-700 mb-2">
          Institución/Empresa
        </label>
        <input
          type="text"
          name="institucion"
          value={formData.institucion}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f99963] focus:border-transparent"
          placeholder="Nombre de tu organización"
        />
      </div>

      {/* Comentarios */}
      <div>
        <label className="block text-gray-700 mb-2">
          Cuéntanos sobre tu proyecto <span className="text-red-500">*</span>
        </label>
        <textarea
          name="comentarios"
          value={formData.comentarios}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f99963] focus:border-transparent resize-none"
          placeholder="Describe brevemente tu proyecto o necesidades..."
        />
      </div>

      {/* reCAPTCHA */}
      <div className="py-4">
        <Recaptcha onVerify={setCaptchaVerified} />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!captchaVerified}
        className={`w-full py-3 px-6 rounded-full font-bold uppercase transition-colors ${
          captchaVerified
            ? 'bg-[#f99963] text-white hover:bg-orange-600'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        Enviar por WhatsApp
      </button>

      <p className="text-sm text-gray-500 text-center">
        Al enviar, serás redirigido a WhatsApp para completar el contacto.
      </p>
    </form>
  );
};

export default ContactForm;