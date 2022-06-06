import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
const FiatDetail = () => {
  let {id} = useParams();

const getProductDetail= async()=>{
  let url = `http://localhost:5000/fiat/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data)
};

  useEffect(()=>{
    getProductDetail();
  },[])
  return (
    <div>
      
    </div>
  )
}

export default FiatDetail