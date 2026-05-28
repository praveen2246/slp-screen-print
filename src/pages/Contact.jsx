import React, { useState, useRef } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import emailjs from '@emailjs/browser';
import SEO from '../components/layout/SEO';

const Contact = () => {
  const [formState, setFormState] = useState('idle'); // idle, sending, success, error
  const { t, language, getWhatsAppUrl, phoneNumber } = useLanguage();
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: t('bulkInquiry'),
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setFormState('sending');

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      name: formData.name,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFormState('success');
        setFormData({ name: '', phone: '', subject: t('bulkInquiry'), message: '' });
        setTimeout(() => setFormState('idle'), 5000);
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setFormState('error');
        setTimeout(() => setFormState('idle'), 5000);
      });
  };

  return (
    <div className="bg-brand-cream min-h-screen py-24">
      <SEO
        title={t('seoContactTitle')}
        description={t('seoContactDesc')}
        keywords={t('seoContactKeywords')}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-in fade-in slide-in-from-bottom duration-700">{t('contactTitle')}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg animate-in fade-in slide-in-from-bottom duration-700 delay-100">
            {t('contactSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info Card */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-brand-green/10">
              <h2 className="text-2xl font-bold mb-8 text-brand-green-dark">{t('businessDetails')}</h2>
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="bg-brand-yellow/20 p-4 rounded-2xl text-brand-green-dark">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{t('ourLocation')}</h3>
                    <p className="text-gray-600">
                      23/12 Solaialagupuram 2nd Street, <br />
                      Madurai - 625011, Tamil Nadu, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-brand-green/20 p-4 rounded-2xl text-brand-green-dark">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{t('callWhatsApp')}</h3>
                    <p className="text-gray-600">+91 {phoneNumber}</p>
                    <p className="text-gray-500 text-sm mt-1">Available 9 AM - 8 PM (Mon-Sat)</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-brand-yellow/20 p-4 rounded-2xl text-brand-green-dark">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{t('emailUs')}</h3>
                    <p className="text-gray-600">tbpraveen23@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-10 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:+91${phoneNumber}`}
                  className="flex-1 bg-brand-green-dark text-white font-bold py-4 px-6 rounded-full transition-all duration-300 hover:bg-brand-green shadow-lg flex items-center justify-center gap-2 text-lg"
                >
                  <Phone size={24} />
                  {t('callNow')}
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-primary py-4 text-lg"
                >
                  <MessageCircle size={24} />
                  {t('chatWhatsApp')}
                </a>
              </div>
            </div>

            {/* Google Map Section */}
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-brand-green-dark">{t('findOnMap')}</h2>
                <a
                  href="https://maps.app.goo.gl/tB8g7n8N8zR2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-green font-bold hover:underline flex items-center gap-1"
                >
                  {t('openInMaps')}
                  <ArrowRight size={16} />
                </a>
              </div>
              <div className="bg-white p-3 rounded-3xl shadow-xl border border-brand-green/10 overflow-hidden h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.34731388636!2d78.114704!3d9.90494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c50646011707%3A0x6b2401f807895e6f!2s23%2F12%2C%202nd%20St%2C%20Solai%20Alagupuram%2C%20Madurai%2C%20Tamil%20Nadu%20625011!5e0!3m2!1sen!2sin!4v1714285000000!5m2!1sen!2sin"
                  className="w-full h-full rounded-2xl"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sri Lakshmi Priya Screen Print Location"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-brand-green/10 animate-in fade-in slide-in-from-right duration-1000">
            <h2 className="text-2xl font-bold mb-8 text-brand-green-dark">{t('sendEnquiry')}</h2>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">{t('yourName')}</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-brand-cream/50 border border-brand-green/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green focus:bg-white transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">{t('phoneNumber')}</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 00000 00000"
                    className="w-full bg-brand-cream/50 border border-brand-green/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">{t('subject')}</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-brand-cream/50 border border-brand-green/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green focus:bg-white transition-all"
                >
                  <option>{t('bulkInquiry')}</option>
                  <option>{t('customQuote')}</option>
                  <option>{t('sampleRequest')}</option>
                  <option>{t('other')}</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">{t('yourMessage')}</label>
                <textarea
                  rows="5"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="..."
                  className="w-full bg-brand-cream/50 border border-brand-green/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green focus:bg-white transition-all"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formState === 'sending'}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 ${formState === 'success'
                    ? 'bg-green-500 text-white'
                    : formState === 'error'
                      ? 'bg-red-500 text-white'
                      : 'bg-brand-green-dark text-white hover:bg-brand-green'
                  }`}
              >
                {formState === 'idle' && (
                  <>
                    <Send size={20} />
                    {t('sendMessage')}
                  </>
                )}
                {formState === 'sending' && (
                  <>
                    <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>{language === 'ta' ? 'அனுப்பப்படுகிறது...' : 'Sending...'}</span>
                  </>
                )}
                {formState === 'success' && (
                  <>
                    <CheckCircle size={20} />
                    {t('messageSent')}
                  </>
                )}
                {formState === 'error' && (
                  <>
                    <AlertCircle size={20} />
                    {language === 'ta' ? 'தோல்வியுற்றது' : 'Failed to send'}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
