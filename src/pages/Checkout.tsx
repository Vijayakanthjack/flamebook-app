import Header from "../components/Header";
import SubscriberComp from "../components/SubscriberComp";
import FooterComp from "../components/FooterComp";
import Breadcrumb from "../components/Breadcrumb";

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
        <h1 className="text-3xl font-bold text-center">Checkout</h1>
        <p className="text-center text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        </div>
      <SubscriberComp />
      <FooterComp />
    </>
  );
}

export default Home;
