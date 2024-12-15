import Hero from "@/components/hero";
import FlashSales from "@/components/flashsales";
import Category from "@/components/categories";
import Products from "@/components/product";
import Music from "@/components/musicexp";
import Explore from "@/components/explore";
import NewArrivals from "@/components/new-arrivals";   
import Freedelvry from "@/components/free-delivery"; 



export default function Home() {
  return (
    <div >
      <Hero/>
      <FlashSales/>
      <Category/>
      <Products/>
      <Music/>
      <Explore/>
      <NewArrivals/>   
      <Freedelvry/> 
    </div>
  );
}
