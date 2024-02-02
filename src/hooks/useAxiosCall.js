import React, { useEffect, useState } from 'react'
import { Axios } from '../../api/server';

const useAxiosCall = (url, reload) => {
 
    const [data, setData]= useState([]);


    useEffect(()=>{
        getData();
    },[url, reload])

    const getData = async()=>{
            try {
                const res= await Axios.get(url)
            setData(res.data.reverse())
            } catch (error) {
                
            }
    }


  return data;
}

export default useAxiosCall