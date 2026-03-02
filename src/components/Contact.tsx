import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare, Building2, Globe2 } from 'lucide-react';
import { useState, useEffect } from 'react';

function Contact() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set(prev).add(entry.target.id));
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });
    
    document.querySelectorAll('[data-animate]').forEach((element) => {
      observer.observe(element);
    });
    
    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('success');
    setTimeout(() => {
      setFormStatus('idle');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["info@daflitech.com", "support@daflitech.com"],
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      color: "from-purple-600 to-purple-800"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["123 Tech Street, Silicon Valley", "CA 94025, United States"],
      color: "from-pink-600 to-pink-800"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      color: "from-indigo-600 to-indigo-800"
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      country: "USA",
      address: "123 Tech Street, Silicon Valley, CA 94025",
      phone: "+1 (555) 123-4567",
      email: "sf@daflitech.com"
    },
    {
      city: "New York",
      country: "USA",
      address: "456 Innovation Ave, Manhattan, NY 10001",
      phone: "+1 (555) 234-5678",
      email: "ny@daflitech.com"
    },
    {
      city: "London",
      country: "UK",
      address: "789 Tech Lane, London, EC1A 1BB",
      phone: "+44 20 1234 5678",
      email: "london@daflitech.com"
    },
    {
      city: "Mumbai",
      country: "India",
      address: "101 Digital Plaza, Badlapur, Maharashtra",
      phone: "+91 22 1234 5678",
      email: "mumbai@daflitech.com"
    }
  ];

  const services = [
    "Web Development",
    "Mobile App Development",
    "AI & Machine Learning",
    "Blockchain Development",
    "Game Development",
    "Custom Software",
    "UI/UX Design",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-8 overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center text-white">
          <h1 
            id="hero-title"
            data-animate
            className={`text-6xl md:text-7xl font-bold mb-6 leading-tight transition-all duration-1000 ${
              visibleSections.has('hero-title') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            Let's Build Something <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Amazing Together</span>
          </h1>
          <p 
            id="hero-subtitle"
            data-animate
            className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-200 transition-all duration-1000 delay-200 ${
              visibleSections.has('hero-subtitle') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            Have a project in mind? We'd love to hear from you. Get in touch and let's turn your vision into reality.
          </p>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                id={`contact-info-${index}`}
                data-animate
                className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 ${
                  visibleSections.has(`contact-info-${index}`) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${info.color} text-white mb-4`}>
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div 
              id="contact-form"
              data-animate
              className={`transition-all duration-1000 ${
                visibleSections.has('contact-form') 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
                <h2 className="text-4xl font-bold mb-2 text-gray-900">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Interested In *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, idx) => (
                        <option key={idx} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-indigo-700 transition transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>

                  {formStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                      Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Additional Info */}
            <div 
              id="additional-info"
              data-animate
              className={`space-y-8 transition-all duration-1000 delay-200 ${
                visibleSections.has('additional-info') 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-10'
              }`}
            >
              {/* Why Contact Us */}
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
                <h3 className="text-3xl font-bold mb-4">Why Contact Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <span>Free consultation and project estimation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <span>Expert guidance from our technical team</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <span>24/7 customer support availability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <span>Quick response within 24 hours</span>
                  </li>
                </ul>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-2xl overflow-hidden h-64 relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-100">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-purple-600 mx-auto mb-2" />
                    <p className="text-gray-700 font-semibold">Interactive Map</p>
                    <p className="text-sm text-gray-600">123 Tech Street, Silicon Valley</p>
                  </div>
                </div>
              </div>

              {/* Social & Quick Links */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Connect With Us</h3>
                <div className="flex gap-4 mb-6">
                  <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center text-white hover:scale-110 transition transform">
                    <Globe2 className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 flex items-center justify-center text-white hover:scale-110 transition transform">
                    <Globe2 className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-600 to-pink-700 flex items-center justify-center text-white hover:scale-110 transition transform">
                    <Globe2 className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-700 flex items-center justify-center text-white hover:scale-110 transition transform">
                    <Globe2 className="w-6 h-6" />
                  </a>
                </div>
                <p className="text-gray-600 text-sm">
                  Follow us on social media for the latest updates, tech insights, and company news.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div 
            id="offices-title"
            data-animate
            className={`text-center mb-12 transition-all duration-1000 ${
              visibleSections.has('offices-title') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-5xl font-bold mb-4 text-gray-900">Our Global Offices</h2>
            <p className="text-xl text-gray-600">Visit us at any of our worldwide locations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <div 
                key={index}
                id={`office-${index}`}
                data-animate
                className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 ${
                  visibleSections.has(`office-${index}`) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-6 h-6 text-purple-600" />
                  <h3 className="text-xl font-bold text-gray-900">{office.city}</h3>
                </div>
                <p className="text-sm text-gray-500 mb-3">{office.country}</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    {office.address}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    {office.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    {office.email}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div 
            id="faq-title"
            data-animate
            className={`text-center mb-12 transition-all duration-1000 ${
              visibleSections.has('faq-title') 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-90'
            }`}
          >
            <h2 className="text-5xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How quickly can you start my project?",
                a: "We can typically begin within 1-2 weeks after the initial consultation and agreement on project scope."
              },
              {
                q: "Do you offer support after project completion?",
                a: "Yes! We provide ongoing maintenance and support packages tailored to your needs."
              },
              {
                q: "What is your development process?",
                a: "We follow agile methodology with regular sprints, client feedback sessions, and transparent communication throughout."
              },
              {
                q: "Can you work with my existing team?",
                a: "Absolutely! We're experienced in collaborating with in-house teams and can integrate seamlessly into your workflow."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                id={`faq-${index}`}
                data-animate
                className={`bg-gray-50 rounded-xl p-6 transition-all duration-700 ${
                  visibleSections.has(`faq-${index}`) 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

export default Contact;