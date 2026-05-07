import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import contact from '../data/profile';

const Contact = () => {
  return (
    <section id="contact" className="py-28 px-6 bg-slate-900">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">
          Get In Touch
        </h2>

        <p className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
          Open for full-time opportunities, freelance projects, and collaborations.
          Feel free to reach out anytime.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Email */}
          <div className="bg-slate-800 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 transition-all duration-300">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-3xl mb-6">
              <FaEnvelope />
            </div>

            <h3 className="text-2xl font-semibold mb-3">
              Email
            </h3>

            <a
              href={`mailto:${contact.email}`}
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 break-all"
            >
              {contact.email}
            </a>
          </div>

          {/* Phone */}
          <div className="bg-slate-800 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 transition-all duration-300">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 text-3xl mb-6">
              <FaPhoneAlt />
            </div>

            <h3 className="text-2xl font-semibold mb-3">
              Phone
            </h3>

            <a
              href={`tel:${contact.phone}`}
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300"
            >
              {contact.phone}
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-slate-800 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 transition-all duration-300">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400 text-3xl mb-6">
              <FaWhatsapp />
            </div>

            <h3 className="text-2xl font-semibold mb-3">
              WhatsApp
            </h3>

            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Address */}
          <div className="bg-slate-800 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 transition-all duration-300">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-red-500/10 flex items-center justify-center text-red-400 text-3xl mb-6">
              <FaMapMarkerAlt />
            </div>

            <h3 className="text-2xl font-semibold mb-3">
              Location
            </h3>

            <p className="text-gray-400">
              {contact.address}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;