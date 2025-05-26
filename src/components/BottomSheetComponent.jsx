'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { useEffect } from 'react';
import ButtonParticle from './particles/ButtonParticle';

export default function BottomSheetComponent({ isOpen, onClose, children }) {

  // Close the bottom sheet
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/40 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed bottom-0 left-0 right-0 bg-white z-50 rounded-t-2xl shadow-xl max-h-[90vh] h-[90vh] overflow-y-auto"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            onDragEnd={(e, info) => {
              if (info.offset.y > 100) onClose();
            }}
          >
            <div className="flex flex-col items-center p-4">
              <div className="w-12 h-1.5 bg-gray-300 rounded-full mb-2" />
              <div className='flex items-center justify-between w-full my-6'>
                <h2 className=" text-xl font-semibold">Créer une sortie</h2>
                <ButtonParticle onClick={onClose} aria-label="Fermer" iconCenter={IoClose} />
              </div>
            </div>

            <div className="px-4 pb-6">{children}</div>
          </motion.div>
        </>
      )
      }
    </AnimatePresence >
  );
}
