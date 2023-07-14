import {useState, useEffect} from 'react'
import axios, {AxiosError} from 'axios';
import { IValute } from '../Models';

export function useCurrency() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const [valute, setValute] = useState<IValute | null>(null)

    async function fetchCurrncy() {
        try {
            setError('')
            setLoading(true)
            const {data} = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js');
            setValute(data.Valute)
            setLoading(false)
        } catch (e) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchCurrncy()
    }, [])
    
    return {valute, loading, error}
}