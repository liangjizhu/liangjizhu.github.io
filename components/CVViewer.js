import { useState } from 'react';
import { motion } from 'framer-motion';

export default function CVViewer() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className={`relative ${isExpanded ? 'fixed inset-0 z-50 bg-primary-100/95' : ''}`}
      initial={false}
      animate={isExpanded ? { scale: 1 } : { scale: 1 }}
    >
      <div className={`relative ${isExpanded ? 'h-screen p-4' : 'h-[600px]'}`}>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute top-4 right-4 z-10 bg-primary-300 text-primary-50 px-4 py-2 rounded-full hover:bg-primary-400 transition-colors"
        >
          {isExpanded ? 'Close' : 'Expand'}
        </button>
        <iframe
          src="/LiangJiZhu_cv2025.pdf"
          className="w-full h-full rounded-lg shadow-xl"
        />
      </div>
    </motion.div>
  );
} 