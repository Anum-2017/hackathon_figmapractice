'use client'

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { faStarHalf } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";

interface TimeUnitProps {
    label: string;
    value: number;
}

function FreshSales() {
    const [timeLeft, setTimeLeft] = useState({
        days: 3,
        hours: 23,
        minutes: 19,
        seconds: 56
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                const newSeconds = prev.seconds - 1;
                if (newSeconds >= 0) return { ...prev, seconds: newSeconds };
                
                const newMinutes = prev.minutes - 1;
                if (newMinutes >= 0) return { ...prev, minutes: newMinutes, seconds: 59 };
                
                const newHours = prev.hours - 1;
                if (newHours >= 0) return { ...prev, hours: newHours, minutes: 59, seconds: 59 };
                
                const newDays = prev.days - 1;
                if (newDays >= 0) return { days: newDays, hours: 23, minutes: 59, seconds: 59 };
                
                clearInterval(timer);
                return prev;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <main>
            <div className="w-full flex justify-center items-center mt-10 mb-1">
                {/* Container */}
                <div className="w-[80%]">
                    {/* Countdown Timer Section */}
                    <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center gap-8">
                            <div className="flex flex-col gap-1">
                                <span className="text-red-500 text-sm font-bold border-l-8 border-red-400 pl-3 ml-1">Today&apos;s</span>
                                <h1 className="text-gray-800 font-bold sm:text-md md:text-3xl lg:text-3xl">Flash Sales</h1>
                            </div>
                            <div className="flex items-center gap-4 ml-4">
                                <TimeUnit label="Days" value={timeLeft.days} />
                                <span className="text-2xl font-bold text-red-500 mt-4">:</span>
                                <TimeUnit label="Hours" value={timeLeft.hours} />
                                <span className="text-2xl font-bold text-red-500 mt-4">:</span>
                                <TimeUnit label="Minutes" value={timeLeft.minutes} />
                                <span className="text-2xl font-bold text-red-500 mt-4">:</span>
                                <TimeUnit label="Seconds" value={timeLeft.seconds} />
                            </div>
                        </div>
                        <div className="flex space-x-2">
                            <Image
                                src={"/icon/Left Arrow.png"}
                                width={30}
                                height={30}
                                alt="left arrow"
                            />
                            <Image
                                src={"/icon/Right Arrow.png"}
                                width={30}
                                height={30}
                                alt="right arrow"
                            />
                        </div>
                    </div>

                    {/* Product Boxes */}
                    <div className="flex sm:flex-col md:flex-row lg:flex-row justify-between mt-5 sm:flex-nowrap md:flex-wrap lg:flex-nowrap gap-4">
                        {/* Box 1 */}
                        <div>
                            <div className="group shadow-md bg-neutral-100 sm:w-full md:w-[300px] lg:w-[220px] h-[180px] flex justify-center items-center cursor-pointer relative">
                                <Image
                                    src={"/images/flashsale/flashsale-1.png"}
                                    width={150}
                                    height={100}
                                    alt="gamepad"
                                />
                                <span className="bg-red-500 px-2 rounded-md text-white absolute top-2 left-2">-40%</span>
                                <span className="absolute top-1 right-1 text-red rounded-full flex flex-col gap-2">
                                    <Image
                                    src="/icon/Fill Heart.png" 
                                    width={20} 
                                    height={20}
                                    alt="Heart"
                                    />
                                    <Image
                                    src="/icon/Fill Eye.png" 
                                    width={20} 
                                    height={20}
                                    alt="Eye"
                                    />
                                </span>

                                {/* Add to Cart Button */}
                                <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Add to Cart
                                </button>
                            </div>

                            <h1 className="font-bold font-sans pt-2">HAVIT HV-G92 Gamepad</h1>
                            <span className="text-red-500 font-bold">$120</span> <span className="text-gray-400 font-bold line-through ml-2">$160</span>

                            <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1 mb-5">
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={solidStar} />
                                <span className="text-gray-400">(88)</span>
                            </div>
                        </div>

                        {/* Box 2 */}
                        <div>
                            <div className="group bg-neutral-100 shadow-md sm:w-full md:w-[300px] lg:w-[220px] h-[180px] flex justify-center items-center cursor-pointer relative">
                                <Image
                                    src={"/images/flashsale/flashsale-2.png"}
                                    width={150}
                                    height={100}
                                    alt="keyboard-image"
                                />
                                <span className="bg-red-500 px-2 rounded-md text-white absolute top-2 left-2">-35%</span>
                                <span className="absolute top-1 right-1 text-red rounded-full flex flex-col gap-2">
                                    <Image
                                    src="/icon/Fill Heart.png" 
                                    width={20} 
                                    height={20}
                                    alt="Heart"
                                    />
                                    <Image
                                    src="/icon/Fill Eye.png" 
                                    width={20} 
                                    height={20}
                                    alt="Eye"
                                    />
                                </span>

                                {/* Add to Cart Button */}
                                <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Add to Cart
                                </button>
                            </div>

                            <h1 className="font-bold font-sans pt-2">AK-900 Wired Keyboard</h1>
                            <span className="text-red-500 font-bold">$960</span> <span className="text-gray-400 font-bold line-through ml-2">$1160</span>

                            <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1 mb-5">
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={regularStar} />
                                <span className="text-gray-400">(75)</span>
                            </div>
                        </div>

                        {/* Box 3 */}
                        <div>
                            <div className="group relative shadow-md bg-neutral-100 cursor-pointer sm:w-full md:w-[300px] lg:w-[220px] h-[180px] flex justify-center items-center">
                                <Image
                                    src={"/images/flashsale/flashsale-3.png"}
                                    width={150}
                                    height={100}
                                    alt="lcd-image"
                                />
                                <span className="bg-red-500 px-2 rounded-md text-white absolute top-2 left-2">-30%</span>
                                <span className="absolute top-1 right-1 text-red rounded-full flex flex-col gap-2">
                                    <Image
                                    src="/icon/Fill Heart.png" 
                                    width={20} 
                                    height={20}
                                    alt="Heart"
                                    />
                                    <Image
                                    src="/icon/Fill Eye.png" 
                                    width={20} 
                                    height={20}
                                    alt="Eye"
                                    />
                                </span>

                                {/* Add to Cart Button */}
                                <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Add to Cart
                                </button>
                            </div>

                            <h1 className="font-bold font-sans pt-2">IPS LCD Gaming Monitor</h1>
                            <span className="text-red-500 font-bold">$370</span> <span className="text-gray-400 font-bold line-through ml-2">$400</span>

                            <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1 mb-5">
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={solidStar} />
                                <span className="text-gray-400">(99)</span>
                            </div>
                        </div>

                        {/* Box 4 */}
                        <div>
                            <div className="group shadow-md bg-neutral-100 sm:w-full md:w-[300px] lg:w-[220px] h-[180px] flex justify-center items-center cursor-pointer relative">
                                <Image
                                    src={"/images/flashsale/flashsale-4.png"}
                                    width={150}
                                    height={100}
                                    alt="chair"
                                />
                                <span className="bg-red-500 px-2 rounded-md text-white absolute top-2 left-2">-25%</span>
                                <span className="absolute top-1 right-1 text-red rounded-full flex flex-col gap-2">
                                    <Image
                                    src="/icon/Fill Heart.png" 
                                    width={20} 
                                    height={20}
                                    alt="Heart"
                                    />
                                    <Image
                                    src="/icon/Fill Eye.png" 
                                    width={20} 
                                    height={20}
                                    alt="Eye"
                                    />
                                </span>

                                {/* Add to Cart Button */}
                                <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Add to Cart
                                </button>
                            </div>

                            <h1 className="font-bold font-sans pt-2">S-series Comfort Chair</h1>
                            <span className="text-red-500 font-bold">$375</span> <span className="text-gray-400 font-bold line-through ml-2">$400</span>

                            <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1 mb-5">
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={faStarHalf} />
                                <span className="text-gray-400">(99)</span>
                            </div>
                        </div>

                        {/* Box 5 */}
                        <div>
                            <div className="group shadow-md bg-neutral-100 sm:w-full md:w-[300px] lg:w-[220px] h-[180px] flex justify-center items-center cursor-pointer relative">
                                <Image
                                    src={"/images/flashsale/flashsale-4.png"}
                                    width={150}
                                    height={100}
                                    alt="chair"
                                />
                                <span className="bg-red-500 px-2 rounded-md text-white absolute top-2 left-2">-25%</span>
                                <span className="absolute top-1 right-1 text-red rounded-full flex flex-col gap-2">
                                    <Image
                                    src="/icon/Fill Heart.png" 
                                    width={20} 
                                    height={20}
                                    alt="Heart"
                                    />
                                    <Image
                                    src="/icon/Fill Eye.png" 
                                    width={20} 
                                    height={20}
                                    alt="Eye"
                                    />
                                </span>

                                {/* Add to Cart Button */}
                                <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Add to Cart
                                </button>
                            </div>

                            <h1 className="font-bold font-sans pt-2">S-series Comfort Chair</h1>
                            <span className="text-red-500 font-bold">$375</span> <span className="text-gray-400 font-bold line-through ml-2">$400</span>

                            <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1 mb-5">
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={solidStar} />
                                <FontAwesomeIcon icon={faStarHalf} />
                                <span className="text-gray-400">(99)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

// TimeUnit Component
const TimeUnit: React.FC<TimeUnitProps> = ({ label, value }) => {
    // Format value to two digits (e.g., "03" instead of "3")
    const formattedValue = String(value).padStart(2, '0');

    return (
        <div className="flex flex-col items-center">
            <h3 className="text-xs font-bold">{label}</h3> {/* Make label smaller */}
            <div className="text-2xl font-bold">{formattedValue}</div> {/* Adjust font size for value */}
        </div>
    );
};

export default FreshSales;
