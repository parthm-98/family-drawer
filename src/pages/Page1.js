import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';  // Import Framer Motion



function Page0() {
  return (
    <Link to={`/`}>
      <div className="flex justify-center items-center h-screen">
        <motion.div layoutId="card-1">
          <div className="flex w-96 h-96 bg-slate-400  rounded-3xl justify-center items-center text-white font-bold"> P1</div>
        </motion.div> 
      </div>
    </Link>
  );
}

export default Page0;
