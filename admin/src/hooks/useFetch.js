import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url)=>{
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);

    useEffect(()=>{
        const fetchData = async ()=>{
            setLoading(true);
            try{
                const res = await axios.get(url);
                setData(res.data);
            }
            catch(err){
                setError(err);
            }
            setLoading(false);
        };
        fetchData();
    },[]) //use [url] here as the dependency if you wish the page to reload as soon as you change any values in the search box

    const reFetch = async ()=>{
        setLoading(true);
        try{
            const res = await axios.get(url);
            setData(res.data);
        }
        catch(err){
            setError(err);
        }
        setLoading(false);
    };
    return {data,loading,error,reFetch};
};

export default useFetch;