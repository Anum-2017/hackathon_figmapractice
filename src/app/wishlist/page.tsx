import WishlistCard from '../../components/wishlistCard';
import bag from '../../../public/images/bestselling/best-selling-2.png';
import cpuCooler from '../../../public/images/bestselling/best-selling-3.png';
import gamePad from '../../../public/images/explore/product-7.png';
import jacket from '../../../public/images/explore/product-8.png';
import laptop from '../../../public/images/explore/product-3.png';
import redGamePad from '../../../public/images/flashsale/flashsale-1.png';
import keyboard from '../../../public/images/flashsale/flashsale-2.png';
import lcd from '../../../public/images/flashsale/flashsale-3.png';
import ForyouCard from '../../components/justforu';

function Page() {
  const wishlistItems = [
    {
      id: 1,
      image: bag,
      productAlt: 'Gucci bag',
      title: 'Gucci duffle bag',
      price: 960,
      cutPrice: '$1160',
      offer: '-35%',
      classes: 'absolute left-3 top-3 py-1 rounded-sm px-3 text-white text-xs bg-[#db4444]',
    },
    {
      id: 2,
      image: cpuCooler,
      productAlt: 'CPU cooler',
      title: 'RGB Liquid CPU Cooler',
      price: 1960,
    },
    {
      id: 3,
      image: gamePad,
      productAlt: 'Gamepad',
      title: 'GP11 Shooter USB Gamepad',
      price: 550,
    },
    {
      id: 4,
      image: jacket,
      productAlt: 'Jacket',
      title: 'Quilted Satin Jacket',
      price: 750,
    },
  ];

  const forYouItems = [
    {
      id: 1,
      image: laptop,
      productAlt: 'ASUS laptop',
      title: 'ASUS FHD Gaming Laptop',
      price: 960,
      cutPrice: '$1160',
      reviewStars: 5,
      reviewCount: 65,
      offer: '-35%',
      classes: 'absolute left-3 top-3 py-1 rounded-sm px-3 text-white text-xs bg-[#db4444]',
    },
    {
      id: 2,
      image: lcd,
      productAlt: 'IPS LCD',
      title: 'IPS LCD Gaming Monitor',
      price: 1160,
      reviewStars: 5,
      reviewCount: 65,
    },
    {
      id: 3,
      image: redGamePad,
      productAlt: 'Gamepad',
      title: 'HAVIT HV-G92 Gamepad',
      price: 560,
      reviewStars: 5,
      reviewCount: 65,
      offer: 'new',
      classes: 'absolute left-3 top-3 py-1 rounded-sm px-3 text-white text-xs bg-[#00ff66]',
    },
    {
      id: 4,
      image: keyboard,
      productAlt: 'RGB keyboard',
      title: 'AK-900 Wired Keyboard',
      price: 200,
      reviewStars: 5,
      reviewCount: 65,
    },
  ];

  return (
    <div className="flex flex-col gap-12 mx-6 md:mx-24 my-10 md:my-20">
      {/* Wishlist Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-lg md:text-xl">Wishlist ({wishlistItems.length})</h2>
        <button className="flex justify-center items-center border border-black border-opacity-50 w-full md:w-[223px] h-[50px] text-base md:text-xl rounded-sm">
          Move All To Bag
        </button>
      </div>

      {/* Wishlist Items */}
      <div className="flex flex-col md:flex-row gap-6">
        {wishlistItems.map((item) => {
          return <WishlistCard key={item.id} {...item} />;
        })}
      </div>

      {/* "Just For You" Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-3 items-center">
          <div className="w-5 h-8 md:h-10 bg-[#db4444] rounded-sm"></div>
          <h2 className="text-lg md:text-xl">Just For You</h2>
        </div>
        <button className="flex justify-center items-center border border-black border-opacity-50 w-full md:w-[150px] h-[50px] text-base md:text-xl rounded-sm">
          See All
        </button>
      </div>

      {/* "Just For You" Items */}
      <div className="flex flex-col md:flex-row gap-6">
        {forYouItems.map((item) => {
          return <ForyouCard key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
}

export default Page;
