"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import FormModal from "@/components/modals/form-modal";
import QuoteForm from "@/components/forms/quote-form";

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 md:hidden z-50 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-full shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-200 flex items-center gap-2 font-semibold"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Get a free quote"
      >
        <MessageSquare className="w-5 h-5" />
        <span>Get Quote</span>
      </motion.button>

      <FormModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Get a Free Quote"
      >
        <QuoteForm
          onSuccess={() => setIsOpen(false)}
          onClose={() => setIsOpen(false)}
        />
      </FormModal>
    </>
  );
}
