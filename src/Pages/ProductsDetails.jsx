import { useQuery } from "react-query";
import { fetchProductsDetail } from "../Services/fetchProductsDetail";
import { useParams } from "react-router-dom";

const ProductsDetails = () => {
  const { productId } = useParams();

  const { data: product, isLoading, isError, error } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => fetchProductsDetail(productId),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  
  

  return (
    <div className="w-full h-full mt-10  ">
      <div className="flex  justify-evenly ">
       <div > 
        <div >
          <img className="h-[350px] w-[350px] " src={product?.image} alt={product.title} />
        </div>
        </div>
        <div className="h-[450px] w-[600px]  ">
        <div className="mt-8 mb-5 text-[25px] "> {product?.category}</div>
        <div className="text-[20px] mt-5">{product?.title}</div>

        <div className="mt-7 font-bold">${product?.price}</div>
        
        <div className="mt-6  text-balance" >{product?.description}</div>
        
       
        </div>
      </div>

      <div className="flex ml-[60%] justify-between w-[300px] ">
      <button className="bg-green-500 text-white font-bold  p-3 rounded-lg">Add to cart</button>
      <button className="bg-green-400 p-3 rounded-xl text-white font-bold">Go to Cart</button>
      </div>
    </div>
  );
};

export default ProductsDetails;
