import Image from 'next/image';

export default function Freedelvry() {
    return (
        <div className="w-full sm:h-[500px] lg:h-[300px] flex justify-center items-center">
            <div className="sm:w-full lg:w-[70%] sm:justify-center gap-y-4 sm:items-center flex sm:flex-col md:flex-col lg:flex-row lg:justify-evenly gap-x-4">
                {/* box 1 */}
                <div className="w-[260px] h-[130px] flex justify-center items-center flex-col gap-y-3">
                    <div className="w-[50px] h-[50px] rounded-full bg-black flex justify-center items-center border-stone-400 border-8">
                        <span>
                            <Image src="/icon/icon-delivery.png" width={25} height={25} alt="delivery" />
                        </span>
                    </div>
                    <div>
                        <h1 className="font-bold text-center">FREE AND FAST DELIVERY</h1>
                        <p className="text-sm">Free delivery for all orders over $140</p>
                    </div>
                </div>

                {/* box 2 */}
                <div className="w-[260px] h-[130px] flex justify-center items-center flex-col gap-y-3">
                    <div className="w-[50px] h-[50px] rounded-full bg-black flex justify-center items-center border-stone-400 border-8">
                        <span>
                            <Image src="/icon/icon-service.png" width={25} height={25} alt="customer service" />
                        </span>
                    </div>
                    <div>
                        <h1 className="font-bold text-center">24/7 CUSTOMER SERVICE</h1>
                        <p className="text-sm">Friendly 24/7 customer support</p>
                    </div>
                </div>

                {/* box 3 */}
                <div className="w-[260px] h-[130px] flex justify-center items-center flex-col gap-y-3">
                    <div className="w-[50px] h-[50px] rounded-full bg-black flex justify-center items-center border-stone-400 border-8">
                        <span>
                            <Image src="/icon/Icon-secure.png" width={25} height={25} alt="money-back" />
                        </span>
                    </div>
                    <div>
                        <h1 className="font-bold text-center">MONEY BACK GUARANTEE</h1>
                        <p className="text-sm">We return money within 30 days</p>
                    </div>
                </div>
                {/* boxes complete */}
            </div>
        </div>
    );
}
