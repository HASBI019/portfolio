import { motion } from 'motion/react';
import { aboutData } from '../../data/about';

export function QuoteSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24 border-t border-black/10">
      <motion.blockquote
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center space-y-4"
      >
        <p className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-snug text-[#111318] text-balance">
          &ldquo;{aboutData.quote.text}&rdquo;
        </p>
        <footer className="text-sm font-medium text-[#717784]">
           {aboutData.quote.author}
        </footer>
      </motion.blockquote>
    </section>
  );
}
