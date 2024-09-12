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
    <div className="w-full h-full bg-gray-200 rounded-xl">
      <div className=" w-[75%]  rounded-lg text-red p-4 ">
        <div className="flex items-center justify-center">
          <img className="h-[350px] w-[350px] " src={product?.image} alt={product.title} />
        </div>
        <div className="text-[30px] mt-5 ml-[50px] ">{product?.title}</div>
        <div className="text-[20px] mt-4 ml-[50px]"> {product?.category}</div>
        <div className="mt-5 text-[15px] ml-[50px] " >{product?.description}</div>
      </div>
    </div>
  );
};

export default ProductsDetails;
