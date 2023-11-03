import React, { useEffect, useState } from 'react'

export const useFecht = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        errors: null
    })

    const { data, isLoading, errors } = state

    const getFecht = async () => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            setState({
                data,
                isLoading: false,
                errors: null
            })
        } catch (error) {
            setState({
                data: null,
                isLoading: false,
                errors: error
            })
        }
    }

    useEffect(() => {
        if (!url) return
        getFecht()
    }, [url])

    return {
        data,
        isLoading,
        errors
    }



}
