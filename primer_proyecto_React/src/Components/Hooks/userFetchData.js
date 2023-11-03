import { useState,  useEffect } from 'react'
import { FetchData } from '../Helpers/FetchData'

export const userFetchData = (endPoint) => {

 const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    FetchData(endPoint)
    .then(res => {
      setData(res.data)
      setIsLoading(res.isLoading)
    })

  }, [endPoint])

  return {
    data,
    isLoading
  }
   
  
}
