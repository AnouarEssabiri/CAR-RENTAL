import { motion } from "framer-motion";

const NoRequestsMessage = () => {
  return (
    <div className="absolute  top-1/2 left-1/2 -translate-x-[20%] -translate-y-1/2 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-gray-700"
      >
        NOT REQUEST YET
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl text-gray-500 mt-4"
      >
        No requests have been made yet.
      </motion.p>
    </div>
  );
};

export default NoRequestsMessage;
