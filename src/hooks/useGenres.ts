import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
interface Ganre {
    id: number;
    name: string;
}

interface FetchGenreResponse {
    results: Ganre[];
    count: number;
}
const useGenres = () => {

    const [genres, setGenre] =  useState<Ganre[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);


    useEffect(()=>{
        const controller = new AbortController();

        setLoading(true);
        apiClient.get<FetchGenreResponse>('/genres', {signal: controller.signal})
        .then(res => {
            // setError('');
            setGenre(res.data.results);
            setLoading(false);
        })
        .catch(e => {
            if (e instanceof CanceledError) return;
            setError(e.message);
            setLoading(false);
        });

        return () => controller.abort();
    },[]);

    return {genres, error, isLoading};


};

export default useGenres;
