import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent successfully!');
    e.target.reset();
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <article className="animate-fade-in pb-24 xl:pb-0">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-text-primary relative inline-block pb-4">
          Contact
          <span className="absolute bottom-0 left-0 w-10 h-1 bg-accent rounded-full"></span>
        </h2>
      </header>

      <section className="mb-8">
        {/* Map placeholder (styling to look like an embedded map) */}
        <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden border border-cardBorder bg-[#2b2b2c] mb-8 grayscale hover:grayscale-0 transition-all duration-500">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117506.2307527627!2d72.45781326442651!3d23.020448154508493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-text-primary mb-6">Contact Form</h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input 
              type="text" 
              name="fullname" 
              placeholder="Full name" 
              required
              className="w-full bg-[#1c1c1d] border border-cardBorder rounded-xl px-4 py-4 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email address" 
              required
              className="w-full bg-[#1c1c1d] border border-cardBorder rounded-xl px-4 py-4 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
            />
          </div>
          <textarea 
            name="message" 
            placeholder="Your Message" 
            required
            rows="5"
            className="w-full bg-[#1c1c1d] border border-cardBorder rounded-xl px-4 py-4 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
          ></textarea>
          
          <div className="flex justify-end">
            <button 
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-[#2b2b2c] text-accent border border-cardBorder px-6 py-4 rounded-xl font-medium hover:bg-accent hover:text-background transition-colors w-full md:w-auto shadow-sm"
            >
              <FiSend />
              <span>Send Message</span>
            </button>
          </div>
          {status && <p className="text-green-500 text-sm mt-2 text-right">{status}</p>}
        </form>
      </section>
    </article>
  );
}
