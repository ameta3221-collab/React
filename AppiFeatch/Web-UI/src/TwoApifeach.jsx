import axios from 'axios'
import React, { useEffect, useState } from 'react'

const TwoApifeach = ({answer}) => {

    
    const [data, setData] = useState([])
    let res =answer;



    const dataFetch = async() => {

        const result = await axios.get("https://dummyjson.com/products")

        console.log(">>>>>>>result", result.data.products);
        setData(result.data.products)
        
    }

    
    const handleMerge = () => {
        
        setData([...data, ...res])
            
    }
    
    useEffect( () => {

    dataFetch() ;
    }, [])

  return (
    <div>
      
            <div className='bg-sky-300  w-1/11 text-xl mt-5 m-auto text-center rounded'>
                <button type='button' onClick={handleMerge}>Merge</button>
            </div>

       <div className='flex flex-wrap gap-3 p-4'>
            {data.map((item) => (
                <div 
                    key={item.id} 
                    className='bg-gray-200 w-72 p-3 rounded shadow border'
                >
                    <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className='w-full h-40 object-contain rounded'
                    />

                    <div>
                        <p><b>Id:</b> {item.id}</p>
                        <p><b>Title:</b> {item.title}</p>
                        <p><b>Description:</b> {item.description}</p>
                        <p><b>Category:</b> {item.category}</p>
                        <p><b>Price:</b> ₹{item.price}</p>
                        <p><b>Discount:</b> {item.discountPercentage}%</p>
                        <p><b>Rating:</b> {item.rating}</p>
                        <p><b>Stock:</b> {item.stock}</p>
                        <p><b>Brand:</b> {item.brand}</p>
                        <p><b>Return Policy:</b> {item.returnPolicy}</p>
                        <p><b>Minimum Order:</b> {item.minimumOrderQuantity}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TwoApifeach