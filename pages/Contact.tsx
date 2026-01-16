import React, { useState } from 'react';
import { BRAND, FAQS, getWhatsAppLink } from '../constants';
import { Icons } from '../components/Icons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    location: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, send to backend API here.
    // Redirect to WhatsApp after short delay
    setTimeout(() => {
        const message = `Name: ${formData.name}\nPhone: ${formData.phone}\nDate: ${formData.date}\nLocation: ${formData.location}\nMessage: ${formData.message}`;
        const url = `https://api.whatsapp.com/send?phone=${BRAND.whatsapp1}&text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    }, 2000);
  };

  return (
    <div className="bg-royal-ivory min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Form Side */}
          <div>
            <h1 className="font-serif text-4xl text-royal-navy mb-6">Let's Frame Your Story</h1>
            <p className="text-gray-600 mb-8">
              Fill out the form below to check availability. We typically reply within 24 hours.
            </p>

            {submitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-8 rounded text-center">
                <h3 className="font-bold text-xl mb-2">Thank you!</h3>
                <p>Redirecting you to WhatsApp to finalize your inquiry...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-royal-navy mb-2">Your Names</label>
                  <input required name="name" type="text" className="w-full p-3 border border-gray-300 focus:border-royal-gold outline-none transition-colors bg-white" placeholder="Bride & Groom Names" onChange={handleChange} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-royal-navy mb-2">Phone / WhatsApp</label>
                    <input required name="phone" type="tel" className="w-full p-3 border border-gray-300 focus:border-royal-gold outline-none transition-colors bg-white" placeholder="+977" onChange={handleChange} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-royal-navy mb-2">Event Date</label>
                    <input required name="date" type="date" className="w-full p-3 border border-gray-300 focus:border-royal-gold outline-none transition-colors bg-white" onChange={handleChange} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-royal-navy mb-2">Event Location</label>
                  <input required name="location" type="text" className="w-full p-3 border border-gray-300 focus:border-royal-gold outline-none transition-colors bg-white" placeholder="City, Venue Name" onChange={handleChange} />
                </div>
                <div>
                  <label className="block text-sm font-bold text-royal-navy mb-2">Tell us about your plans</label>
                  <textarea name="message" rows={4} className="w-full p-3 border border-gray-300 focus:border-royal-gold outline-none transition-colors bg-white" placeholder="Functions, Budget range, or specific vision..." onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="w-full bg-royal-navy text-white font-bold uppercase tracking-widest py-4 hover:bg-royal-gold hover:text-royal-navy transition-colors">
                  Check Availability
                </button>
              </form>
            )}

            <div className="mt-12 grid grid-cols-2 gap-4">
                <a href={`tel:${BRAND.phone1}`} className="flex items-center justify-center p-4 border border-gray-300 text-gray-600 hover:border-royal-navy hover:text-royal-navy transition-colors">
                    <Icons.Phone className="w-5 h-5 mr-2" /> Call Now
                </a>
                <a href={getWhatsAppLink()} className="flex items-center justify-center p-4 border border-gray-300 text-gray-600 hover:border-[#25D366] hover:text-[#25D366] transition-colors">
                    Chat WhatsApp
                </a>
            </div>
          </div>

          {/* Info Side */}
          <div className="space-y-12">
            
            {/* Map Placeholder */}
            <div className="bg-gray-200 h-64 w-full flex items-center justify-center text-gray-500">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31625951268!2d85.29111309325852!3d27.70895594444534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1709221234567!5m2!1sen!2snp" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
               </iframe>
            </div>

            {/* FAQ */}
            <div>
               <h3 className="font-serif text-2xl text-royal-navy mb-6">Frequently Asked Questions</h3>
               <div className="space-y-4">
                 {FAQS.map((faq, idx) => (
                    <div key={idx} className="bg-white p-6 shadow-sm border-l-4 border-royal-gold">
                        <h4 className="font-bold text-royal-navy mb-2">{faq.question}</h4>
                        <p className="text-sm text-gray-600">{faq.answer}</p>
                    </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};