import { useQuery } from 'react-query';
import { fetchData } from '../../Services/fetchProducts';
import { useNavigate } from 'react-router-dom';

const ProductsCards = () => {
    const navigate = useNavigate();

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

  

  function handleProductsredirect(id){
    navigate(`/Products/${id}`)
  }


  // Render products
  return (
    <>
      <div    className='h-screen w-full flex flex-wrap gap-4 justify-center items-center cursor-pointer'>
        {products && products.map((item) => (
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
