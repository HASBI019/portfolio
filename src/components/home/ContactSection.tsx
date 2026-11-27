import { FormEvent, useState } from 'react';
import { motion } from 'motion/react';
import { Check, Copy, Github, Instagram, Linkedin, Mail, Phone, Send } from 'lucide-react';
import { profileData } from '../../data/profile';
import { EditorialDivider } from '../ui/EditorialDivider';

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorText, setErrorText] = useState('');

  const whatsappNumber = profileData.phone
    ? profileData.phone.replace(/\D/g, '').replace(/^0/, '62')
    : '';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorText('Mohon lengkapi nama, alamat email, dan pesan Anda terlebih dahulu.');
      return;
    }
    setErrorText('');
    setSubmitted(true);
  };

  const openMailClient = () => {
    const subject = encodeURIComponent(`Diskusi Proyek dari ${name || 'Pengunjung Portofolio'}`);
    const body = encodeURIComponent(
      `Halo ${profileData.brandName},\n\n${message || 'Saya tertarik berdiskusi mengenai proyek web.'}\n\nSalam,\n${name || ''}\n${email || ''}`
    );
    window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`;
  };

  const renderSocialIcon = (id: 'github' | 'linkedin' | 'instagram' | 'email') => {
    switch (id) {
      case 'github':
        return <Github className="w-5 h-5" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />;
      case 'instagram':
        return <Instagram className="w-5 h-5" />;
      case 'email':
        return <Mail className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="kontak"
      data-section="kontak"
      className="min-h-[85vh] md:min-h-screen flex items-center py-20 md:py-28 border-t border-black/10 bg-white"
    >
      <div className="max-w-6xl w-full mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Kolom Info Kontak & Sosial */}
        <motion.div
          className="lg:col-span-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs font-semibold tracking-wide text-[#1d4ed8]">
            03. Hubungi Saya
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111318] mt-3 text-balance">
            {profileData.contactHeading}
          </h2>

          <EditorialDivider />

          <p className="text-base md:text-lg leading-relaxed text-[#4a505c] max-w-lg">
            {profileData.contactDescription}
          </p>

          {/* Tombol Salin Email & WhatsApp Interaktif */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl border border-black/15 bg-[#f5f5f4] hover:border-[#1d4ed8] text-sm font-medium text-[#111318] transition-colors cursor-pointer"
            >
              <Mail className="w-4 h-4 text-[#1d4ed8]" />
              <span>{profileData.email}</span>
              {copiedEmail ? (
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#1d4ed8]">
                  <Check className="w-3.5 h-3.5" /> Tersalin
                </span>
              ) : (
                <Copy className="w-3.5 h-3.5 text-[#717784]" />
              )}
            </button>

            {profileData.phone && (
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-black/15 bg-[#f5f5f4] hover:border-[#1d4ed8] text-sm font-medium text-[#111318] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#1d4ed8]" />
                <span>{profileData.phone}</span>
              </a>
            )}
          </div>

          {/* Ikon Sosial Staggered */}
          <div className="mt-8 flex items-center gap-3.5">
            {profileData.socials.map((item, idx) => (
              <motion.a
                key={item.id}
                href={item.url}
                target={item.id === 'email' ? undefined : '_blank'}
                rel={item.id === 'email' ? undefined : 'noopener noreferrer'}
                aria-label={item.label}
                title={`${item.label} (${item.handle})`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#111318] text-white hover:bg-[#1d4ed8] hover:-translate-y-0.5 transition-all duration-200"
              >
                {renderSocialIcon(item.id)}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Kolom Formulir Pesan Langsung */}
        <motion.div
          className="lg:col-span-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="rounded-2xl border border-black/10 bg-[#f5f5f4] p-6 md:p-8">
            <h3 className="font-display text-xl font-bold tracking-tight text-[#111318]">
              Kirim Pesan Cepat
            </h3>
            <p className="text-xs text-[#4a505c] mt-1">
              Isi formulir ini untuk menyusun draf email langsung ke kotak masuk saya.
            </p>

            {submitted ? (
              <div className="mt-6 rounded-xl bg-white border border-black/10 p-6 space-y-4">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#1d4ed8]">
                  <Check className="w-4 h-4" />
                  Pesan siap dikirim
                </div>
                <p className="text-sm text-[#4a505c] leading-relaxed">
                  Terima kasih, <strong className="text-[#111318]">{name}</strong>. Anda bisa langsung membuka aplikasi email untuk mengirim pesan ini atau menulis pesan baru.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={openMailClient}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl bg-[#111318] text-white hover:bg-[#1d4ed8] transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Buka Aplikasi Email
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="px-4 py-2.5 text-xs font-semibold rounded-xl border border-black/15 bg-white text-[#111318] hover:bg-[#eaeae7] transition-colors cursor-pointer"
                  >
                    Tulis Pesan Lain
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-[#111318] mb-1.5">
                    Nama Lengkap
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Muhammad Hasbi As'ari"
                    className="w-full px-4 py-2.5 text-sm rounded-xl bg-white border border-black/12 text-[#111318] placeholder:text-[#717784] focus:outline-none focus:border-[#1d4ed8]"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-[#111318] mb-1.5">
                    Alamat Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@perusahaan.com"
                    className="w-full px-4 py-2.5 text-sm rounded-xl bg-white border border-black/12 text-[#111318] placeholder:text-[#717784] focus:outline-none focus:border-[#1d4ed8]"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-[#111318] mb-1.5">
                    Pesan atau Kebutuhan Proyek
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ceritakan singkat proyek atau hal yang ingin didiskusikan..."
                    className="w-full px-4 py-2.5 text-sm rounded-xl bg-white border border-black/12 text-[#111318] placeholder:text-[#717784] focus:outline-none focus:border-[#1d4ed8] resize-none"
                  />
                </div>

                {errorText && (
                  <p role="alert" className="text-xs font-medium text-red-700">
                    {errorText}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl bg-[#111318] text-white hover:bg-[#1d4ed8] transition-colors duration-200 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Kirim Pesan
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}