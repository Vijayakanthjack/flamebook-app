import Header from "../components/Header";
import SubscriberComp from "../components/SubscriberComp";
import FooterComp from "../components/FooterComp";
import Breadcrumb from "../components/Breadcrumb";
import Image01 from "../assets/images/trending-book-3.png";

function Home() {
  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: "Checkout", path: "/checkout" },
  ];

  return (
    <>
      <Header />
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <div className="max-w-screen-xl 2xl:max-w-screen-2xl py-20 mx-auto">
        <div className="flex flex-col space-y-6">
          {/* Heading */}
        <div className="grid grid-cols-12 gap-8 bg-[#5C067C] p-4 rounded-lg">
          <div className="col-span-5 font-bold text-white text-base">Item</div>
          <div className="col-span-2 font-bold text-white text-base">Quantity</div>
          <div className="col-span-2 font-bold text-white text-base">Price</div>
          <div className="col-span-2 font-bold text-white text-base">Total Price</div>
          <div className="col-span-1 font-bold text-white text-base"></div>
        </div>
          {/* Content */}
          <div className="grid grid-cols-12 gap-8 bg-white border border-gray-300 p-2.5 rounded-lg items-center">
          <div className="col-span-5 flex items-center space-x-4">
<div className="flex-none">
<img
            src={Image01}
            alt="Product"
            className="w-24 h-32 object-cover rounded-lg"
          />
</div>
<div className="flex-1">
            <h2 className="text-lg font-semibold text-gray-800">Product Name</h2>
            <p className="text-sm text-gray-600">Product Description</p>
            <p className="text-sm text-gray-600">Size: M</p>
          
</div>
          </div>
          <div className="col-span-2">
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="w-16 p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="col-span-2">
            <p className="text-base font-normal text-gray-800">$50.00</p>
          </div>
          <div className="col-span-2">
            <p className="text-base font-normal text-gray-800">$50.00</p>
          </div>
          <div className="col-span-1">
            <button className="text-red-600 hover:text-red-800">
              Remove
            </button>
          </div>
        </div>
        </div>
        </div>
      <SubscriberComp />
      <FooterComp />
    </>
  );
}

export default Home;
