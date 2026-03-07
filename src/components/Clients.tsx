import { Globe, Building2, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function Clients() {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const handleImageError = (index: number) => {
    setImageErrors((prev) => new Set([...prev, index]));
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  const getLogoColor = (index: number) => {
    const colors = [
      "bg-gradient-to-br from-purple-500 to-pink-500",
      "bg-gradient-to-br from-blue-500 to-cyan-500",
      "bg-gradient-to-br from-green-500 to-emerald-500",
      "bg-gradient-to-br from-orange-500 to-red-500",
      "bg-gradient-to-br from-indigo-500 to-purple-500",
      "bg-gradient-to-br from-pink-500 to-rose-500",
      "bg-gradient-to-br from-teal-500 to-green-500",
      "bg-gradient-to-br from-violet-500 to-fuchsia-500",
      "bg-gradient-to-br from-amber-500 to-orange-500",
      "bg-gradient-to-br from-cyan-500 to-blue-500",
      "bg-gradient-to-br from-red-500 to-pink-500",
      "bg-gradient-to-br from-green-500 to-teal-500",
    ];
    return colors[index % colors.length];
  };

  const clients = [
    {
      name: "Mailchimp",
      location: "Mumbai, India",
      logo: "https://cdn.worldvectorlogo.com/logos/mailchimp-freddie-icon.svg",
    },
    {
      name: "Zendesk",
      location: "Pune, India",
      logo: "https://cdn.worldvectorlogo.com/logos/zendesk-1.svg",
    },
   
    {
      name: "Trello",
      location: "Delhi, India",
      logo: "https://cdn.worldvectorlogo.com/logos/trello.svg",
    },
    {
      name: "Asana",
      location: "Hyderabad, India",
      logo: "https://cdn.worldvectorlogo.com/logos/asana-logo.svg",
    },
   
    {
      name: "Airtable",
      location: "Austin, USA",
      logo: "https://cdn.worldvectorlogo.com/logos/airtable-1.svg",
    },
      {
    name: "Spotify",
    location: "Sweden",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
  },
    {
    name: "Shopify",
    location: "Canada",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
  },
    {
    name: "Slack",
    location: "USA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
  },

  ];

  const countries = [
    { name: "India", flag: "https://flagcdn.com/w80/in.png" },
    { name: "UAE", flag: "https://flagcdn.com/w80/ae.png" },
    { name: "Singapore", flag: "https://flagcdn.com/w80/sg.png" },
    { name: "United Kingdom", flag: "https://flagcdn.com/w80/gb.png" },
    { name: "United States", flag: "https://flagcdn.com/w80/us.png" },
    { name: "Australia", flag: "https://flagcdn.com/w80/au.png" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="pt-32 pb-20 px-8">
        <div className="max-w-7xl mx-auto">

          {/* HEADER */}

          <div className="text-center mb-16">
            <div
              id="header"
              data-animate
              className={`flex items-center justify-center gap-3 mb-6 transition-all duration-1000 ${
                visibleElements.has("header")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <Globe className="w-12 h-12 text-purple-600" />

              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Our Clients
              </h1>
            </div>

            <p
              id="subtitle"
              data-animate
              className={`text-xl text-gray-700 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
                visibleElements.has("subtitle")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              At Daflitech Technologies, we are proud to have worked with
              forward-thinking companies across industries, delivering
              high-performance web and digital solutions.
            </p>
          </div>

          {/* CLIENTS SECTION */}

          <div className="mb-20">
            <div
              id="clients-header"
              data-animate
              className={`flex items-center gap-3 mb-8 transition-all duration-1000 ${
                visibleElements.has("clients-header")
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <Building2 className="w-8 h-8 text-purple-600" />
              <h2 className="text-3xl font-bold text-gray-900">
                Featured Clients
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clients.map((client, index) => (
                <div
                  key={index}
                  id={`client-${index}`}
                  data-animate
                  className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-700 hover:-translate-y-1 border border-gray-100 ${
                    visibleElements.has(`client-${index}`)
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-12 scale-95"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    {imageErrors.has(index) ? (
                      <div
                        className={`w-12 h-12 rounded-lg ${getLogoColor(
                          index
                        )} flex items-center justify-center text-white font-bold text-lg shadow-md`}
                      >
                        {getInitials(client.name)}
                      </div>
                    ) : (
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="w-12 h-12 object-contain"
                        onError={() => handleImageError(index)}
                      />
                    )}

                    <h3 className="font-bold text-lg text-gray-900">
                      {client.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{client.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* INTERNATIONAL PRESENCE */}

          <div
            id="international-section"
            data-animate
            className={`bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl p-12 text-white transition-all duration-1000 ${
              visibleElements.has("international-section")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-16"
            }`}
          >
            <div
              id="international-header"
              data-animate
              className={`flex items-center gap-3 mb-8 transition-all duration-1000 delay-200 ${
                visibleElements.has("international-header")
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <Globe className="w-8 h-8" />
              <h2 className="text-3xl font-bold">International Presence</h2>
            </div>

            <p
              id="international-text"
              data-animate
              className={`text-lg mb-8 text-gray-200 transition-all duration-1000 delay-400 ${
                visibleElements.has("international-text")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              We've successfully delivered projects for clients in:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {countries.map((country, index) => (
                <div
                  key={index}
                  id={`country-${index}`}
                  data-animate
                  className={`bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center hover:bg-white/20 transition-all duration-700 ${
                    visibleElements.has(`country-${index}`)
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-8 scale-90"
                  }`}
                  style={{ transitionDelay: `${600 + index * 150}ms` }}
                >
                  <img
                    src={country.flag}
                    alt={country.name}
                    className="w-10 h-6 mx-auto mb-2 object-cover rounded"
                  />

                  <div className="text-sm font-medium">{country.name}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Clients;