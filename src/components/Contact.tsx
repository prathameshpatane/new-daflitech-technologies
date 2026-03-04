import { Mail, MapPin, Clock, Send, User, MessageSquare, Building2 } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

function Contact() {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');

    setTimeout(() => {
      setFormStatus('idle');
      setFormData({
        name: '',
        email: '',
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
      details: ["daflitechtechnologies@gmail.com"],
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["Silicon Valley, CA"],
      color: "from-pink-600 to-pink-800"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Mon - Sat: 9:00 AM - 6:00 PM"],
      color: "from-indigo-600 to-indigo-800"
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
      <section className="relative pt-32 pb-20 px-8 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 
            id="hero-title"
            data-animate
            className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
              visibleElements.has('hero-title') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            Let's Build Something Amazing Together
          </h1>
          <p 
            id="hero-subtitle"
            data-animate
            className={`text-xl text-gray-200 transition-all duration-1000 delay-300 ${
              visibleElements.has('hero-subtitle') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            Have a project in mind? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                id={`contact-info-${index}`}
                data-animate
                className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 ${
                  visibleElements.has(`contact-info-${index}`) 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-12 scale-95'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
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

      {/* Contact Form */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <div 
            id="contact-form"
            data-animate
            className={`bg-white rounded-2xl shadow-xl p-8 transition-all duration-1000 ${
              visibleElements.has('contact-form') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-16'
            }`}
          >
            <h2 
              id="form-title"
              data-animate
              className={`text-3xl font-bold mb-2 text-gray-900 transition-all duration-1000 delay-200 ${
                visibleElements.has('form-title') 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-8'
              }`}
            >
              Send Us a Message
            </h2>
            <p 
              id="form-subtitle"
              data-animate
              className={`text-gray-600 mb-8 transition-all duration-1000 delay-400 ${
                visibleElements.has('form-subtitle') 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
            >
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div 
                id="form-fields"
                data-animate
                className={`transition-all duration-1000 delay-600 ${
                  visibleElements.has('form-fields') 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >

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
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600"
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
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600"
                      placeholder="john@example.com"
                    />
                  </div>
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
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600"
                    placeholder="Your Company"
                  />
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600"
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
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
              </div>

              </div>

              <button
                type="submit"
                id="submit-button"
                data-animate
                className={`w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-1000 delay-800 ${
                  visibleElements.has('submit-button') 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
              >
                <Send className="w-5 h-5 inline mr-2" />
                Send Message
              </button>

              {formStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

            </form>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Contact;