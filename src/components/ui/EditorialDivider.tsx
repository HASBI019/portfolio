import { motion } from 'motion/react';

interface EditorialDividerProps {
  variant?: 'short' | 'long';
  className?: string;
}

/**
 * Pemisah dua garis khas desain portofolio editorial
 */
export function EditorialDivider({
  variant = 'short',
  className = '',
}: EditorialDividerProps) {
  if (variant === 'long') {
    return (
      <div className={`flex flex-col gap-2.5 ${className}`} aria-hidden="true">
        <motion.div
          className="bg-[#111318] w-28 h-[3px] rounded-full origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.div
          className="bg-[#1d4ed8] w-16 h-[3px] rounded-full origin-left translate-x-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-2 my-4 ${className}`} aria-hidden="true">
      <motion.div
        className="bg-[#111318] w-20 h-[3px] rounded-full origin-left"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className="bg-[#1d4ed8] w-14 h-[3px] rounded-full origin-left translate-x-5"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}
