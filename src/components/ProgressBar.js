import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'
import './ProgressBar.css'
import { motion } from 'framer-motion';

const ProgressBar = ({ file, setFile }) => {
    const { url, progress } = useStorage(file);
    
    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile])

    return (
        <div>
            <div className="progress-container">
                <motion.div 
                initial={{width:0}}
                animate={{width: progress + '%'}}
                style={{height: "20px", backgroundColor: "green"}}>
                </motion.div>
            </div>
        <span className="progress-text">{progress.toFixed(0)}%</span>
        </div>
    )
}

export default ProgressBar;

