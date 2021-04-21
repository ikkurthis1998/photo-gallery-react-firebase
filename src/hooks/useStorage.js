import { db, storage, timestamp } from '../firebase_config';
import { useState, useEffect } from 'react'


const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    
    useEffect(() => {
        const storageRef = storage.ref(file.name);
        const collectionref = db.collection("images");

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred/snap.totalBytes)*100;
            setProgress(percentage);
        }, (err) => {
            alert(err);
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            setUrl(url);
            const createdAt = timestamp();
            collectionref.add({url, createdAt});
        })
        // return () => {
        //     cleanup
        // }
    }, [file])  
    
    return { progress, url, error }
}

export default useStorage;
