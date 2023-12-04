import {useState} from 'react'
import { variable } from '../utils/variable'
import axios from 'axios'
import { IMultileResponse, ISingleResponse } from '../types/api'
import { IRestaurant } from '../types/restaurant'
 const useRestaurant = () => {
    const [isLoading,setIsLoading] = useState(false)

    const getAllRestaurant = async () =>{
        try{
            setIsLoading(true)
            const res = await axios.get<IMultileResponse<IRestaurant>>(`${variable.apiUrl}/v1/restaurant`)
            return res.data;
        }catch(error){
            console.log(error)
        }finally{
            setIsLoading(false)
        }
    }
    const getOneRestaurant = async (id:string) => {
        try{
            setIsLoading(true)
            const res = await axios.get<ISingleResponse<IRestaurant>>(`${variable.apiUrl}/v1/restaurant/${id}`)
            return res.data
        }catch(error){
            console.log(error)
        }finally{
            setIsLoading(false)
        }
    }
    return {
        getAllRestaurant,
        getOneRestaurant,
        isLoading
    }
}
export default useRestaurant