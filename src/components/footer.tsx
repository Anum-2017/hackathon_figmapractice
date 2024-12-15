import Link from 'next/link';
import { AiOutlineSend } from "react-icons/ai";
import Image from 'next/image';
import Facebook from '../../public/icon/Icon-Facebook.png';
import Twitter from '../../public/icon/Icon-Twitter.png';
import Instagram from '../../public/icon/icon-instagram.png';
import LinkedIn from '../../public/icon/Icon-Linkedin.png';

function Footer() {
  return (
    <footer className="bg-black text-white overflow-x-hidden w-full">
      {/* Footer Content */}
      <div className="flex flex-col lg:flex-row justify-between px-6 lg:px-20 py-8 lg:py-16 gap-12 w-full max-w-full">

        {/* Subscribe Section */}
        <div className="flex flex-col gap-3 w-full lg:w-1/4">
          <h3 className="text-xl lg:text-2xl font-semibold">Exclusive</h3>
          <Link href="#" className="text-base lg:text-xl">
            Subscribe
          </Link>
          <p className="text-sm lg:text-base">Get 10% off your first order</p>
          <div className="flex items-center border border-gray-600 rounded-sm py-1 px-2">
            <input
              className="bg-transparent w-full text-sm text-white placeholder-gray-400 outline-none"
              type="email"
              placeholder="Enter your email"
              aria-label="Email Address"
            />
            <button aria-label="Send Email" className="ml-2">
              <AiOutlineSend className="text-lg text-white cursor-pointer" />
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div className="w-full lg:w-1/4">
          <h1 className="font-bold text-xl">Support</h1>
          <ul>
            <li className="pt-1 cursor-pointer">111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</li>
            <li className="pt-1 cursor-pointer">exclusive@gmail.com</li>
            <li className="pt-1 cursor-pointer">+88015-88888-9999</li>
          </ul>
        </div>

        {/* Account Section */}
        <div className="w-full lg:w-1/4">
          <h1 className="font-bold text-xl">Account</h1>
          <ul>
            <li className="pt-1 cursor-pointer">My Account</li>
            <li className="pt-1 cursor-pointer">Login / Register</li>
            <li className="pt-1 cursor-pointer">Cart</li>
            <li className="pt-1 cursor-pointer">Wishlist</li>
            <li className="pt-1 cursor-pointer">Shop</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="w-full lg:w-1/4">
          <h1 className="font-bold text-xl">Quick Links</h1>
          <ul>
            <li className="pt-1 cursor-pointer">Privacy Policy</li>
            <li className="pt-1 cursor-pointer">Terms Of Use</li>
            <li className="pt-1 cursor-pointer">FAQ</li>
            <li className="pt-1 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Download App Section */}
        <div className="flex flex-col gap-3 w-full lg:w-1/4">
          <h3 className="text-lg lg:text-xl font-semibold">Download App</h3>
          <p className="text-xs">Save $3 with App New User Only</p>
          <div className="flex gap-3 w-full">
            <div className="w-16 lg:w-[80px] h-16 lg:h-[80px]">
              <Image src="/images/footer/Qr Code.png" alt="QR Code" width={200} height={200} />
            </div>
            <div className="flex flex-col gap-3">
              <Link href="#">
                <Image src="/images/footer/GooglePlay.png" alt="Google Play Store" width={100} height={100}/>
              </Link>
              <Link href="#">
                <Image src="/images/footer/AppStore.png" alt="Apple App Store" width={100} height={100} />
              </Link>
            </div>
          </div>
          <ul className="flex items-center gap-4 mt-4">
            <li>
              <Link href="#" aria-label="Facebook">
                <Image className="w-8 h-8" src={Facebook} alt="Facebook Icon" />
              </Link>
            </li>
            <li>
              <Link href="#" aria-label="Twitter">
                <Image className="w-8 h-8" src={Twitter} alt="Twitter Icon" />
              </Link>
            </li>
            <li>
              <Link href="#" aria-label="Instagram">
                <Image className="w-8 h-8" src={Instagram} alt="Instagram Icon" />
              </Link>
            </li>
            <li>
              <Link href="#" aria-label="LinkedIn">
                <Image className="w-8 h-8" src={LinkedIn} alt="LinkedIn Icon" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex justify-center border-y border-gray-700 py-2">
        <p className="text-[#868585] opacity-80 text-xs lg:text-base">
          © Copyright Rimel 2022. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
