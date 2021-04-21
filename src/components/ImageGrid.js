import React from 'react';
import useGetImages from '../hooks/useGetImages';
import './ImageGrid.css';
import { motion } from 'framer-motion';

function ImageGrid({setSelectedImage}) {

    const imagedocs = useGetImages("images");

    return (
        <div>
            <div className="image-grid">
                {imagedocs && imagedocs.map((doc) => {
                    return (
                    <motion.div layout key={doc.id} className="image-wrap">
                        <motion.img initial={{opacity: 0}} animate={{opacity: 1}} src={doc.data().url} alt={doc.id} className="image" onClick={() => setSelectedImage(doc)} />
                    </motion.div>
                    )          
                })}
            </div>
        </div>
    )
}

export default ImageGrid;