import { useState } from 'react';
import SEO from '../components/SEO';

// Hero image - Contact us
const heroImage = 'https://res.cloudinary.com/dmofiy1up/image/upload/v1771283834/vecteezy_contact-us-business-concept-idea_4963818_1_ivkcke.jpg';

// Office locations data
const offices = [
  {
    id: 1,
    name: 'ACCRA OFFICE',
    address: 'East Legon, Accra, Ghana',
    phone: '+233 24 123 4567',
    email: 'accra@covenantterrains.com',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-[#F5F5F0]">
      <SEO
        title="Contact"
        description="Get in touch with Covenant Terrains. We're here to assist with all your real estate inquiries and project needs."
        path="/contact"
      />

      {/* Hero Section - Contact */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Contact us"
            className="w-full h-full object-cover"
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero Title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif italic text-white tracking-wide">
        
          </h1>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Left Column - Contact Form */}
            <div className="flex flex-col justify-center">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="FULL NAME"
                    className="w-full px-4 py-4 bg-transparent border border-gray-300 text-gray-700 placeholder-gray-500 text-sm tracking-wider focus:outline-none focus:border-[#8B7355] transition-colors"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="EMAIL ADDRESS"
                    className="w-full px-4 py-4 bg-transparent border border-gray-300 text-gray-700 placeholder-gray-500 text-sm tracking-wider focus:outline-none focus:border-[#8B7355] transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    id="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="MESSAGE"
                    className="w-full px-4 py-4 bg-transparent border border-gray-300 text-gray-700 placeholder-gray-500 text-sm tracking-wider focus:outline-none focus:border-[#8B7355] transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white font-semibold py-4 px-8 text-sm tracking-widest uppercase hover:bg-[#8B7355] transition-colors duration-300"
                >
                  Book A Call
                </button>
              </form>
            </div>

            {/* Right Column - Office Locations */}
            <div className="space-y-8">
              {offices.map((office) => (
                <div key={office.id} className="group">
                  {/* Office Image */}
                  <div className="relative h-48 md:h-56 overflow-hidden rounded-lg mb-4">
                    <img
                      src={office.image}
                      alt={office.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Office Details */}
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 tracking-wide">
                        {office.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {office.address}
                      </p>
                    </div>
                    <div className="text-left md:text-right">
                      <p className="text-gray-900 text-sm">
                        T: {office.phone}
                      </p>
                      <p className="text-gray-900 text-sm">
                        E: {office.email}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Map Section */}
              <div className="h-48 md:h-56 rounded-lg overflow-hidden mt-8">
                <iframe
                  title="Office Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127066.69829098516!2d-0.2630934!3d5.5912134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1640000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer Divider */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 pb-8">
        <hr className="border-gray-300" />
      </div>
    </div>
  );
};

export default Contact;
