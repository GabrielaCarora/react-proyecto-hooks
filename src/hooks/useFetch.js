import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: null
    })

    const {data, isLoading, errors} = state

    const getFetch = async () => {
        if (!url) return
        try {
            const res = await fetch(url)
            const data = res.json()
            setState({
                data,
                isLoading: false,
                errors: null
            })
        }
        catch (error) {
            setState({
                data: null,
                error: error,
                isLoading: false
            })

        }
    }

    useEffect(() => {
        getFetch()
    }, [url])


    return {
        data,
        isLoading,
        errors
    }
}
