import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // reset status
    setStatus({ loading: true, success: false, error: null, message: '' });

    try {
      // Make request directly to the local backend API server to ensure robust local submission
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form. Please verify your connection.');
      }

      // Success toast feedback state
      setStatus({
        loading: false,
        success: true,
        error: null,
        message: data.message || 'Thank you for reaching out, Priyanka will get back to you soon.'
      });

      // Clear input fields
      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: error.message,
        message: ''
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-literary-100/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-serif font-bold text-ink mb-4"
          >
            Get In <span className="text-literary-600">Touch</span>
          </motion.h2>
          <div className="w-20 h-0.5 bg-literary-400 mx-auto mb-6"></div>
          <p className="text-ink-muted text-base sm:text-lg leading-relaxed">
            Interested in academic discussions, writing opportunities, or professional roles? Feel free to leave a message.
          </p>
        </div>

        {/* Two Column Layout: Context Info vs Actual Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Reference Column Left */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-literary-200 shadow-sm flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-serif font-bold text-ink mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-literary-500 rounded-full"></span>
                Contact Information
              </h3>
              
              <p className="text-ink-muted text-sm sm:text-base leading-relaxed mb-8">
                I am actively seeking practical environments to bridge real-world operations with my advanced communication background. Let's arrange a chat!
              </p>

              <div className="space-y-6">
                
                {/* Email Row */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-literary-50 flex items-center justify-center text-literary-600 border border-literary-200/50 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-ink-muted uppercase tracking-wider">Email Address</div>
                    <a href="mailto:priyankakumarisingh1603@gmail.com" className="text-sm font-medium text-ink hover:text-literary-600 transition-colors break-all">
                      priyankakumarisingh1603@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone Row */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-literary-50 flex items-center justify-center text-literary-600 border border-literary-200/50 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-ink-muted uppercase tracking-wider">Phone Number</div>
                    <a href="tel:+919749338080" className="text-sm font-medium text-ink hover:text-literary-600 transition-colors">
                      +91 9749338080
                    </a>
                  </div>
                </div>

                {/* Address Row */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-literary-50 flex items-center justify-center text-literary-600 border border-literary-200/50 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-ink-muted uppercase tracking-wider">Location</div>
                    <div className="text-sm font-medium text-ink leading-relaxed">
                      Siliguri, Jalpaiguri, PIN-734008<br />
                      West Bengal, India
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Premium Response Info text */}
            <div className="mt-10 pt-6 border-t border-literary-100 text-center">
              <span className="text-xs text-ink-muted italic">
                Typical correspondence replies sent within 24–48 hours.
              </span>
            </div>
          </motion.div>

          {/* Form Column Right */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-7 bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-literary-200 shadow-sm"
          >
            <h3 className="text-xl font-serif font-bold text-ink mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-literary-500 rounded-full"></span>
              Send an Inquiry
            </h3>

            {/* Inline Toast Notifications */}
            {status.success && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold">Inquiry Sent Successfully!</div>
                  <div className="text-xs mt-0.5">{status.message}</div>
                </div>
              </motion.div>
            )}

            {status.error && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 flex items-start gap-3"
              >
                <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold">Error Submitting Form</div>
                  <div className="text-xs mt-0.5">{status.error}</div>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name input */}
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1.5">
                  Your Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Rabindranath Tagore"
                  className="w-full px-4 py-3 rounded-xl bg-literary-50/50 border border-literary-200 text-ink text-sm focus:outline-none focus:ring-2 focus:ring-literary-400 focus:bg-white transition-all"
                />
              </div>

              {/* Email input */}
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1.5">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="e.g. tagore@literature.org"
                  className="w-full px-4 py-3 rounded-xl bg-literary-50/50 border border-literary-200 text-ink text-sm focus:outline-none focus:ring-2 focus:ring-literary-400 focus:bg-white transition-all"
                />
              </div>

              {/* Message input */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1.5">
                  Your Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Share details regarding your discussion context or role requirements..."
                  className="w-full px-4 py-3 rounded-xl bg-literary-50/50 border border-literary-200 text-ink text-sm focus:outline-none focus:ring-2 focus:ring-literary-400 focus:bg-white transition-all resize-y"
                ></textarea>
              </div>

              {/* Submit Action Button */}
              <button
                type="submit"
                disabled={status.loading}
                className={`w-full py-3.5 rounded-xl text-literary-50 font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-sm ${
                  status.loading 
                    ? 'bg-literary-400 cursor-not-allowed' 
                    : 'bg-literary-600 hover:bg-literary-700 hover:shadow-md'
                }`}
              >
                {status.loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Inquiry...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Correspondence</span>
                  </>
                )}
              </button>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
