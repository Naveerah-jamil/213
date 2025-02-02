import HomePage from "@/app/HomePage/page";
import ProductPage from "@/app/ProductPage/page";
import SingleProduct from '@/components/SingleProduct/page';
import Contactus from '@/app/Contactus/page';
import Cart from "./Cart/page"; 

export default function Home() {
  return (
    <main className="">
      
        <HomePage />
        <ProductPage />
        <SingleProduct />
        <Contactus />
        <Cart />
      
    </main>
  );
}
