import SliderImage01 from "../assets/images/trending-book-1.png";
import SliderImage02 from "../assets/images/trending-book-2.png";
import SliderImage03 from "../assets/images/trending-book-3.png";
import SliderImage04 from "../assets/images/trending-book-4.png";
import SliderImage05 from "../assets/images/trending-book-5.png";

import Iconq01 from "../assets/images/iconq-01.png";
import Iconq02 from "../assets/images/iconq-02.png";
import Iconq03 from "../assets/images/iconq-03.png";
import Iconq04 from "../assets/images/iconq-04.png";

import Toprated01 from "../assets/images/top-rated-01.png";
import Toprated02 from "../assets/images/top-rated-02.png";
import Toprated03 from "../assets/images/top-rated-03.png";
import Toprated04 from "../assets/images/top-rated-04.png";
import Toprated05 from "../assets/images/top-rated-05.png";
import Toprated06 from "../assets/images/top-rated-06.png";

import LatestNewsImg01 from "../assets/images/latestnews01.png";
import LatestNewsImg02 from "../assets/images/latestnews02.png";
import LatestNewsImg03 from "../assets/images/latestnews03.png";
import LatestNewsImg04 from "../assets/images/latestnews04.png";

import Customer01 from "../assets/images/customer01.png";
import Customer02 from "../assets/images/customer02.png";
import Customer03 from "../assets/images/customer03.png";
import Customer04 from "../assets/images/customer04.png";


import Iconq05 from "../assets/images/iconq-05.png";
import Iconq06 from "../assets/images/iconq-06.png";
import Iconq07 from "../assets/images/iconq-07.png";



// Object Mapping
const trendingImages: Record<string, string> = {
  "trending-book-1.png": SliderImage01,
  "trending-book-2.png": SliderImage02,
  "trending-book-3.png": SliderImage03,
  "trending-book-4.png": SliderImage04,
  "trending-book-5.png": SliderImage05,
};

const quickDeliveryImages: Record<string, string> = {
  "iconq-01.png": Iconq01,
  "iconq-02.png": Iconq02,
  "iconq-03.png": Iconq03,
  "iconq-04.png": Iconq04,
};

const TopRatedImages: Record<string, string> = {
    "top-rated-01.png": Toprated01,
    "top-rated-02.png": Toprated02,
    "top-rated-03.png": Toprated03,
    "top-rated-04.png": Toprated04,
    "top-rated-05.png": Toprated05,
    "top-rated-06.png": Toprated06,
  };

  const LatestNewsImages: Record<string, string> = {
    "latestnews01.png": LatestNewsImg01,
    "latestnews02.png": LatestNewsImg02,
    "latestnews03.png": LatestNewsImg03,
    "latestnews04.png": LatestNewsImg04,
  };
  const LatestNewsAvatarImages: Record<string, string> = {
    "customer01.png": Customer01,
    "customer02.png": Customer02,
    "customer03.png": Customer03,
    "customer04.png": Customer04,
  };

  const CounterIcons: Record<string, string> = {
    "iconq-05.png": Iconq05,
    "iconq-06.png": Iconq06,
    "iconq-07.png": Iconq07,
   
  }

export { trendingImages, quickDeliveryImages, TopRatedImages, LatestNewsImages, LatestNewsAvatarImages, CounterIcons };
