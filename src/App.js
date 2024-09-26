import './App.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col min-h-screen justify-center px-4">
        <div className="relative z-0 scroll-preserve-3d hide-scrollbar space-y-4 perspective-500">
          {[...Array(5)].map((_, i) => (              
              <div className="transform-3d-1">
                <motion.div 
                  className = "flex flex-shrink-0 items-center justify-center w-32 h-32 bg-slate-400 rounded-md" 
                  key={i} 
                  layoutId={`card-${i}`}>
                  <Link to={`/page${i}`}> 
                    <span className="text-white font-bold">{i}</span>
                  </Link>
                </motion.div>                
              </div>
          ))}
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <div className="flex justify-center items-center">
          This is a space for Parth to practice building user interfaces
        </div>
      </div>
    </div>
  );
}

export default App;
