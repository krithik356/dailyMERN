import { useEffect ,useState} from "react";


const useFetch = (url) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const fetchData = async() =>{
 try{
    setLoading(true);
    setError(null);
    const response = await fetch(url);
    if (!response.ok) {
    throw new Error("Failed to fetch data");
    }
    const result = await response.json();
    setData(result);

 }
 catch(error){
    setError(error.message);
 }
 finally {
    setLoading(false);
}
}

useEffect(() => {
    fetchData();
}, [url]);

return{
    data,
    loading,
    error,
    refetch:fetchData,
}
};
export default useFetch;