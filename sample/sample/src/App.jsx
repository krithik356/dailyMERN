import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './Components/Card'
//https://jsonplaceholder.typicode.com/posts

function App() {
  const names = [
  "Aarav",
  "Aadhya",
  "Aditya",
  "Akash",
  "Ananya",
  "Arjun",
  "Arnav",
  "Aryan",
  "Bhavya",
  "Chaitanya",
  "Charan",
  "Deepak",
  "Divya",
  "Gautam",
  "Harsha",
  "Ishaan",
  "Karthik",
  "Kavya",
  "Krishna",
  "Manish",
  "Meghana",
  "Naveen",
  "Neha",
  "Nikhil",
  "Pooja",
  "Pranav",
  "Priya",
  "Rahul",
  "Rakesh",
  "Riya",
  "Rohit",
  "Sai",
  "Sanjay",
  "Sneha",
  "Srinivas",
  "Surya",
  "Tejas",
  "Varun",
  "Vikram",
  "Vishal"
];

const [search,setsearch] = useState("");
const [debounce,setdebounce] = useState("");

useEffect(() => {
  const timer = setTimeout(()=>{
    setdebounce(search);
  },500);
  return ()=>{
    clearTimeout(timer);
  }
},[search]);


const filterNames = names.filter((n)=>{
  return n.toLowerCase().includes(debounce.toLowerCase());
})
  return (
    <>
      <h>Hi everyone!</h>
      <input type='string' placeholder='type something' onChange={(v)=>{
          setsearch(v.target.value);
      }}/>

      {filterNames.map((each)=>{
      return (
        <p>{each}</p>
      )
    })}
    </>
  )
}

export default App
  // const [data1,setData] = useState([]);


  // const ft = async () =>{
  //   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const data = await response.json();
  //   setData(data);
   
  // }
  // useEffect(() =>{
  //   ft();
  // },[])
  {/* <Card data1 ={data1}/> */}
  