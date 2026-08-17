import React, { useState } from 'react';
import { Send, Mail, Phone, Copy, Check, AlertCircle, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'Please fill in all required fields (Name, Email, and Message).',
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'Please enter a valid email address.',
      });
      return;
    }

    setStatus({ submitting: true, success: false, error: false, message: '' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'e01f609e-0120-4108-8e6f-fb966f3630f5',
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim() || `Portfolio Contact from ${formData.name}`,
          message: formData.message.trim(),
          to_email: personalInfo.email,
        }),
      });

      const result = await response.json();

      if (response.ok && (result.success || result.status === 200)) {
        setStatus({
          submitting: false,
          success: true,
          error: false,
          message: "Message sent successfully. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
          formData.subject || 'Portfolio Inquiry'
        )}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
        
        setStatus({
          submitting: false,
          success: true,
          error: false,
          message: "Message prepared! Your email client opened to complete sending directly to Prasad.",
        });
      }
    } catch (err) {
      window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry'
      )}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
      
      setStatus({
        submitting: false,
        success: true,
        error: false,
        message: "Message prepared in your default mail app.",
      });
    }
  };

  return (
    <section id="contact" className="py-20 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-3">
            <Mail size={13} />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-sm text-slate-400 max-w-md mt-2">
            Have an opportunity, project, or collaboration in mind? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <Sparkles size={20} className="text-sky-400" />
                <span>Contact Details</span>
              </h3>

              <div className="space-y-4">
                {/* Email Direct */}
                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-mono text-slate-400 uppercase">Email</div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-semibold text-slate-200 hover:text-sky-400 transition-colors truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-sky-400 hover:bg-slate-700 transition-all flex-shrink-0 cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Phone Direct */}
                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase">Phone</div>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                      className="text-sm font-semibold text-slate-200 hover:text-sky-400 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* LinkedIn Direct */}
                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 flex-shrink-0">
                    <LinkedinIcon size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-mono text-slate-400 uppercase">LinkedIn</div>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-slate-200 hover:text-sky-400 transition-colors truncate block"
                    >
                      linkedin.com/in/prasad-aware-41590627b
                    </a>
                  </div>
                </div>

                {/* GitHub Direct */}
                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 flex-shrink-0">
                    <GithubIcon size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-mono text-slate-400 uppercase">GitHub</div>
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-slate-200 hover:text-sky-400 transition-colors truncate block"
                    >
                      github.com/Prasadaware8125
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800">
              <h3 className="text-xl font-bold text-slate-100 mb-6">
                Send a Direct Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins"
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 text-sm focus:border-sky-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. sarah@company.com"
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 text-sm focus:border-sky-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Software Engineering Opportunity / Collaboration"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 text-sm focus:border-sky-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 mb-1">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Prasad, I reviewed your portfolio and would like to discuss..."
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 text-sm focus:border-sky-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Status Notifications */}
                {status.success && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                    <Check size={16} className="flex-shrink-0" />
                    <span>{status.message}</span>
                  </div>
                )}

                {status.error && (
                  <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
                    <AlertCircle size={16} className="flex-shrink-0" />
                    <span>{status.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white shadow-lg shadow-sky-500/20 disabled:opacity-50 transition-all cursor-pointer"
                >
                  <Send size={16} />
                  <span>{status.submitting ? 'Sending Message...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
