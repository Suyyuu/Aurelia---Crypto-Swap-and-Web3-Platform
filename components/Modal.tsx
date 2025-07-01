'use client';

import { ReactNode, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {

  function handleClose() {
    onClose();
  }

  useEffect(()=> {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-[#0a0a0c] rounded-2xl p-6 w-[90%] max-w-md h-[80%] shadow-lg relative flex flex-col gap-5 outline-[0.5px] outline-[#474747]"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()} 
          >
            <button onClick={handleClose} className="absolute top-6 right-6 text-[#cacaca] hover:text-[#ffffff] text-[20px] cursor-pointer">
            ✕
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


// const Modal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
//     const [isClosing, setIsClosing] = useState(false); 
  
    
//     const handleClose = () => {
//       setIsClosing(true); 
//       setTimeout(onClose, 300); 
//     };
  
//     return (
//       <div
//         className={`fixed inset-0 z-50 flex items-end pb-5 justify-center bg-black bg-opacity-80 transition-opacity duration-300 ease-out ${isClosing ? 'opacity-0' : 'opacity-100'}`}
//         onClick={handleClose}
//       >
//         <div
//           className={`relative modalBg flex flex-col items-center max-w-lg md:max-w-2xl w-full max-h-[90vh] md:h-[80vh] h-[70vh] overflow-y-auto py-10 px-6 rounded-lg shadow-lg transform transition-transform duration-300 ease-out ${isClosing ? 'translate-y-full' : 'translate-y-0'}`}
//           onClick={(e) => e.stopPropagation()}
//           style={{ animation: isClosing ? 'slide-down 0.3s ease-out forwards' : 'slide-up 0.3s ease-out forwards' }}
//         >
//           <button onClick={handleClose} className="absolute top-3 right-3 text-[#ffffff] hover:text-purple-950 text-[20px]">
//             ✕
//           </button>
//           <img src={project.imageSrc} alt={project.title} className="w-full h-96 object-cover rounded-lg mb-4" />
//           <h2 className="text-2xl font-bold mb-2 text-white">{project.title}</h2>
//           <p className="text-sm text-white mb-4">{project.description}</p>
//           <Link href={project.url} target='blank' className='flex items-center gap-3 text-[16px] pb-5 underline underline-offset-4'>Visit Live Site<FaExternalLinkAlt className='text-[18px]' /></Link>
  
//           <h3 className="font-semibold mb-2 bg-[#00000060] text-white w-fit px-5 py-2"> Tech Stack</h3>
  
//           <div className='flex items-center flex-wrap gap-2 pb-4 '>
          
//               {project.techStack.map((tech, index) => (
//                 <li key={index}>{tech}</li>
//               ))}
            
//           </div>
  
//           <p className='text-white-100 text-justify pb-5 indent-4'>{project.summary}</p>
  
//           <div className="text-sm text-white-100 w-full flex flex-col items-center justify-between text-center">
//             <h3 className="font-semibold mb-2 bg-[#00000060] text-white w-fit px-5 py-2"> Project Highlights</h3>
//             <ul className="list-none flex flex-col space-y-4">
//               {project.highlights.map((highlight, index) => (
//                 <li key={index} className="flex flex-col items-center">
//                   <p>{highlight.text}</p>
//                   {highlight.image && (
//                     <img 
//                       src={highlight.image} 
//                       alt={`Image for highlight ${index + 1}`} 
//                       className="mt-2 w-full h-auto max-w-[500px] rounded-md" 
//                     />
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>
  
//           <div className="flex flex-col justify-between items-center mt-8">
//             <Mockup videoSrc={project.videoSrc}  />
//             <Mockup videoSrc="/path/to/video2.mp4"  />
//             <Mockup videoSrc="/path/to/video3.mp4" />
//           </div>
  
//         </div>
//       </div>
//     );
//   };