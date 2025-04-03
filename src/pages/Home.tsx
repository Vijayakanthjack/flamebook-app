import { useNavigate } from "react-router-dom";

import Header from "../components/Header"
import HeadingComp from "../components/HeadingComp";
import HeroImage from "../components/HeroImage";
import TrendingComp from "../components/TrendingComp";
import QuickdeliveryComp from "../components/QuickdeliveryComp";
import HeadingwithBtn from "../components/HeadingwithBtn";
import ToprateedBooksComp from "../components/ToprateedBooksComp";
import LatestNewsComp from "../components/LatestNewsComp";
import TestimonialComp from "../components/TestimonialComp";
import CounterNumCom from "../components/CounterNumCom";
import SubscriberComp from "../components/SubscriberComp";
import FooterComp from "../components/FooterComp";

import trendingData from "../data/trendingItems.json";
import quickDeliveryData from "../data/quickDeliveryItems.json";
import topRateed from "../data/topRateed.json";
import LatestNewsData from "../data/latestNews.json";
import testimonialData from "../data/testimonialData.json";
import counterItemsData from "../data/counterItems.json";

import { trendingImages } from "../utils/imagePaths";
import { quickDeliveryImages } from "../utils/imagePaths";
import { TopRatedImages } from "../utils/imagePaths";
import { LatestNewsImages } from "../utils/imagePaths";
import { LatestNewsAvatarImages } from "../utils/imagePaths";
import { CounterIcons } from "../utils/imagePaths";




  
function Home() {
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/checkout");
  };
  return (
    <>
    <Header />
    <HeroImage />

  <div className="max-w-screen-xl 2xl:max-w-screen-2xl py-18 mx-auto">
   <HeadingComp title="Trending this week"  subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" alignBox="text-center" />
   </div>

  <div className="max-w-screen-xl 2xl:max-w-screen-2xl mx-auto mb-14">
   <div className=" grid grid-cols-5 gap-16">
    {trendingData.map((item, index) => (
          <TrendingComp 
            key={index} 
            maintitle={item.maintitle} 
            categorytitle={item.categorytitle} 
            subtitle={item.subtitle} 
            price={item.price} 
            image={trendingImages[item.image]} 
            rating={item.rating}
            onButtonClick={handleCheckout}
          />
        ))}
    </div>
    </div>

    {/* quickDeliveryData */}
    <section className=" bg-[#FCF8FD] py-14">
    <div className="max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
   <div className="grid grid-cols-4 gap-8">

   {quickDeliveryData.map((item, index) => (
          <QuickdeliveryComp 
            key={index}
            title={item.title}
            subtext={item.subtext}
            image={quickDeliveryImages[item.image]}
          />
        ))}
    </div>
</div>
</section>

{/* Top Rated Books */}

    <div className="max-w-screen-xl 2xl:max-w-screen-2xl py-14 mx-auto">
   <HeadingwithBtn title="10 Top Rated Books" btnText="View More"/>
   <div className="grid grid-cols-6 gap-20 mt-14">
   {topRateed.map((item, index) => (
   <ToprateedBooksComp 
   key={index} 
   maintitle={item.maintitle} 
   subtitle={item.subtitle} 
   price={item.price} 
   image={TopRatedImages[item.image]}
   rating={Number(item.rating)} 
   onButtonClick={handleCheckout}
   />
   ))}
   </div>

   </div>
{/* Latest News */}
   <div className="max-w-screen-xl 2xl:max-w-screen-2xl py-14 mx-auto">
   <HeadingComp title="Letest News"  subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" alignBox="text-center" />
   <div className="grid grid-cols-4 gap-12 mt-14">
   {LatestNewsData.map((item, index) => (
   <LatestNewsComp 
   key={index} 
   maintitle={item.maintitle} 
   subtext={item.subtext} 
   avatarname={item.avatarname} 
   avatarimg={LatestNewsAvatarImages[item.avatarimg]}
   newsimage={LatestNewsImages[item.newsimage]}
   days={item.days} />
   ))}
   </div>
<div className=" flex justify-center my-14">
   <button type="button" className="text-white  flex items-center  bg-[#8D28AD] hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5">View more
      <svg className="w-6 h-6 ml-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
</svg>

      </button>
      </div>

   </div>
   
{/* Testimonail */}
    
<div className="max-w-screen-xl 2xl:max-w-screen-2xl py-14 mx-auto">
   <HeadingComp title="Testimonials"  subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" alignBox="text-center" />
   <div className="grid grid-cols-4 gap-12 mt-14 mb-14">
   {testimonialData.map((item, index) => (
   <TestimonialComp 
   key={index} 
   subtext={item.subtext} 
   avatarname={item.avatarname} 
   avatarimg={LatestNewsAvatarImages[item.avatarimg]}
   days={item.days}
   rating={Number(item.rating)}
   />
   ))}
   </div>

   </div>
    
    {/* Counter Section */}
    <section className=" bg-[#380B46] py-18">
  <div className="max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
  <div className="grid grid-cols-3 gap-12">
  {counterItemsData.map((item, index) => (
    <CounterNumCom 
    key={index} 
    numbercount={item.numbercount} 
    subtext={item.subtext} 
    icon={CounterIcons[item.icon]}/>
  ))}
  </div>
    </div>

</section>

    {/* Subscriber Section */}
<SubscriberComp />
<FooterComp /> 
    </>
  )
}
export default Home;