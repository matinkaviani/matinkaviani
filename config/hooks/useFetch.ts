import { useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';

interface ApiResponse<T> {
    data: T | null;
    isLoading: boolean;
}

const useFetch = <T>(url: string, customHeaders: Record<string, string> = { 'Cache-Control': 'public, max-age=60' }): ApiResponse<T> => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const headers = useMemo(() => {
        const headers = new Headers();
        Object.entries(customHeaders).forEach(([key, value]) => {
            headers.append(key, value);
        });
        return headers;
    }, [customHeaders]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    method: "GET",
                    headers: headers
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const result = await response.json();
                setData(result);
            } catch (error: any) {
                toast.error(error.message)
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, isLoading };
};

export default useFetch;
