import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [images, setimages] = useState([]);
    const [IsLoading, setIsLoading] = useState(true);
    useEffect(() => {
        getGifs(category)
            .then(
                newImages => setimages(newImages)
            );
            setIsLoading(false);

    }, []);
    return {
        images,
        IsLoading
    }
}
