import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

function Modal({ setIsOpenmModal }) {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    if (countdown === 0) {
      setIsOpenmModal(false);
      return;
    }
    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, setIsOpenmModal]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-6 rounded-2xl shadow-xl w-80 relative"
      >
        <button
          onClick={() => setIsOpenmModal(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <X size={24} />
        </button>
        <h2 className="text-xl font-bold mb-4 text-center">
          Bizni kuzatib boring!
        </h2>
        <div className="flex flex-col gap-4 items-center">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 text-white w-full py-2 rounded-xl text-center hover:bg-pink-600 transition"
          >
            Instagram
          </a>
          <a
            href="https://t.me/SOLO_0519"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white w-full py-2 rounded-xl text-center hover:bg-blue-600 transition"
          >
            Telegram
          </a>
          <a
            href="https://www.youtube.com/@SoloDou-z1t"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 text-white w-full py-2 rounded-xl text-center hover:bg-red-600 transition"
          >
            YouTube
          </a>
        </div>
        <p className="text-center text-gray-400 text-sm mt-4">
          {countdown} soniyadan keyin avtomatik yopiladi...
        </p>
      </motion.div>
    </div>
  );
}

export default Modal;
