import { useQuery } from 'react-query';
import { fetchData } from '../../Services/fetchProducts';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const ProductsCards = () => {
    const navigate = useNavigate();
    const [selectedCategory,setSelectedCategory] = useState('')
  // Use useQuery to fetch products
  const { data: products, isLoading, isError, error } = useQuery('products', fetchData,{cacheTime:1000*60*2,staleTime:1000*60*2});

  // Handle loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const filterdProducts=selectedCategory?products.filter((product)=>product.category==selectedCategory):products;

  function handleProductsredirect(id){
    navigate(`/Products/${id}`)
  }


  // Render products
  return (
    <>
<div className="h-[200px] flex items-center justify-center gap-6">
   <button className="btn btn-info" onClick={()=>setSelectedCategory("men's clothing")}>mens clothing</button>
<button className="btn btn-success" onClick={()=>setSelectedCategory("women's clothing")}>Womens Clothing</button>
<button className="btn btn-warning" onClick={()=>setSelectedCategory("electronics")}>Electronics</button>
<button className="btn btn-error" onClick={()=>setSelectedCategory("jewelery")}>Jewelery</button>
<button className="btn btn-error" onClick={()=>setSelectedCategory("")}>Show All</button>
   </div>

      <div    className='h-screen w-full flex flex-wrap gap-4 justify-center items-center cursor-pointer'>
        {filterdProducts.map((item) => (
          <div onClick={()=>handleProductsredirect(item.id)} className='bg-gray-200 h-[400px] w-[300px] rounded-lg text-red p-4' key={products.id}>
            <div>
              <img className='h-48' src={item.image} alt={item.title} />
              <div className='font-bold text-xl'>${item.price}</div>
            </div>
            <div className='mt-2 font-bold bg-gray-100'>{item.title}</div>
            <div className='mt-2'>{item.category}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsCards;
