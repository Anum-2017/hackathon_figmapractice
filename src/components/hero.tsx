import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FaApple, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from 'next/link';

export default function Hero() {
    return (
        <div className="w-full flex justify-center items-center px-4">
            <div className="w-full flex flex-col lg:flex-row gap-6">
                {/* Left side - Category list */}
                <section className="border-b-2 lg:border-r-2 border-neutral-100 p-6 lg:p-10 sm:w-full lg:w-[25%]">
                    <ul role="menu">
                        <li role="menuitem" className="leading-loose hover:underline cursor-pointer flex items-center">
                            <div className="flex-1 ml-4">Woman&apos;s Fashion</div>
                            <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                        </li>
                        <li role="menuitem" className="leading-loose hover:underline cursor-pointer flex items-center">
                            <div className="flex-1 ml-4">Men&apos;s Fashion</div>
                            <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                        </li>
                        <li role="menuitem" className="leading-loose hover:underline cursor-pointer flex items-center">
                            <div className="flex-1 ml-4">Electronics</div>
                        </li>
                        <li role="menuitem" className="leading-loose hover:underline cursor-pointer flex items-center">
                            <div className="flex-1 ml-4">Home & Lifestyle</div>
                        </li>
                        <li role="menuitem" className="leading-loose hover:underline cursor-pointer flex items-center">
                            <div className="flex-1 ml-4">Medicine</div>
                        </li>
                        <li role="menuitem" className="leading-loose hover:underline cursor-pointer flex items-center">
                            <div className="flex-1 ml-4">Sports & Outdoor</div>
                        </li>
                        <li role="menuitem" className="leading-loose hover:underline cursor-pointer flex items-center">
                            <div className="flex-1 ml-4">Baby&apos;s & Toys</div>
                        </li>
                        <li role="menuitem" className="leading-loose hover:underline cursor-pointer flex items-center">
                            <div className="flex-1 ml-4">Groceries & Pets</div>
                        </li>
                        <li role="menuitem" className="leading-loose hover:underline cursor-pointer flex items-center">
                            <div className="flex-1 ml-4">Health & Beauty</div>
                        </li>
                    </ul>
                </section>

                {/* Right side - Hero Section */}
                <section className='flex-1 sm:w-full lg:w-[75%] bg-black flex flex-col items-center lg:flex-row justify-between relative lg:ml-15 lg:mr-24 lg:mt-10'>
                    <div className='text-white sm:w-full lg:w-[200px] pt-4 sm:ml-0 lg:ml-10 text-center lg:text-left'>
                        <div className='flex gap-x-2 items-center justify-center lg:justify-start'>
                            <FaApple className="text-white sm:text-2xl md:text-4xl" />
                            <span className='sm:text-[10px] md:text-xs'>iPhone 14 Series</span>
                        </div>
                        <h1 className='sm:text-md md:text-4xl font-bold my-5 sm:mb-6 md:mb-10'>
                            Up to 10% off Voucher
                        </h1>

                        <Link href={"#products"} className='underline underline-offset-4 hover:font-semibold flex items-center gap-2 justify-center lg:justify-start'>
                            Shop Now
                            <FaArrowRight />
                        </Link>
                    </div>

                    {/* Hero Image */}
                    <div className='w-full sm:w-[250px] md:w-[300px] lg:w-[350px] flex justify-center mt-5 lg:mt-0'>
                    <Image
                      src="/images/hero/hero-iphone.png"
                      alt='hero-image'
                      width={500}
                      height={300}
                      sizes="(max-width: 768px) 100vw, 50vw" 
                      priority 
                      />
                    </div>

                    {/* Navigation Dots */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                        <button className="w-2 h-2 rounded-full bg-white opacity-50"></button>
                        <button className="w-2 h-2 rounded-full bg-white opacity-50"></button>
                        <button className="w-3 h-3 rounded-full bg-red-500 border-2 border-white"></button>
                        <button className="w-2 h-2 rounded-full bg-white opacity-50"></button>
                        <button className="w-2 h-2 rounded-full bg-white opacity-50"></button>
                    </div>
                </section>
            </div>
        </div>
    );
}
