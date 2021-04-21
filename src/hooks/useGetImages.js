import { db } from '../firebase_config';
import { useEffect, useState } from 'react';

const useGetImages = (collection) => {
    const [images, setImages] = useState(null);

    useEffect(() => {
        const unsub = db.collection(collection)
        .orderBy("createdAt", "desc")
        .onSnapshot((snap) => {
            setImages(snap.docs);
        });
        return () => {
            unsub();
        }
    }, [collection])


    return images;
}

export default useGetImages;