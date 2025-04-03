
import Logo from "../assets/images/clevr-logo.png";

function Header (){
return(
  
<nav className="bg-white dark:bg-gray-900 w-full py-4 z-20 top-0 start-0">
  <div className="max-w-screen-xl 2xl:max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={Logo} className="w-[140px]" alt="Flowbite Logo" />
  </a>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" className="text-white bg-purple-500 hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 text-center ">Login with Google</button>
  </div>
  
  </div>
</nav>


)
}
export default Header;