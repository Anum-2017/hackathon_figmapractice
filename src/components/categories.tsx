import Image from "next/image";

function Category() {
    return (
        <div className="w-full flex justify-center items-center mt-10 mb-1">
            {/* container */}
            <div className="sm:w-full md:w-[80%] border-b-2 border-neutral-100 pb-10">
                {/* container boxes */}
                <div className="flex flex-col sm:pl-[6%] md:pl-0">
                    <h3 className="text-red-500 font-bold border-l-8 border-red-400 pl-3 ml-1">Categories</h3>
                    <div className="flex items-center justify-between">
                        <h1 className="text-gray-800 font-bold sm:text-md md:text-3xl lg:text-3xl pt-4">Browse By Category</h1>
                        {/* Arrows after the heading on the right */}
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
                </div>

                <div className="flex sm:flex-row gap-x-5 gap-y-10 md:flex-row lg:flex-row sm:justify-center md:justify-between mt-5 sm:flex-wrap lg:flex-nowrap">
                    {/* box1 */}
                    <div className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
                        <Image
                            src={"/images/category/Category-CellPhone.png"}
                            width={30}
                            height={30}
                            alt="image"
                        />
                        <p>Phones</p>
                    </div>
                    {/* box2 */}
                    <div className="group border-solid border-2 shadow-2xl rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
                        <Image
                            src={"/images/category/Category-Computer.png"}
                            width={30}
                            height={30}
                            alt="image"
                        />
                        <p>Computers</p>
                    </div>
                    {/* box 3 */}
                    <div className="group border-solid border-2 shadow-2xl rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
                        <Image
                            src={"/images/category/Category-SmartWatch.png"}
                            width={30}
                            height={30}
                            alt="image"
                        />
                        <p>SmartWatch</p>
                    </div>
                    {/* box4 */}
                    <div className="bg-red-500 border-solid border-2 shadow-2xl rounded-md sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer">
                        <Image
                            src={"/images/category/Category-Camera.png"}
                            width={30}
                            height={30}
                            alt="image"
                        />
                        <p>Camera</p>
                    </div>
                    {/* box 5 */}
                    <div className="group border-solid border-2 shadow-2xl rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
                        <Image
                            src={"/images/category/Category-Headphone.png"}
                            width={30}
                            height={30}
                            alt="image"
                        />
                        <p>Headphones</p>
                    </div>
                    {/* box 6 */}
                    <div className="group border-solid border-2 shadow-2xl rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
                        <Image
                            src={"/images/category/Category-Gamepad.png"}
                            width={30}
                            height={30}
                            alt="image"
                        />
                        <p>Gaming</p>
                    </div>
                    {/* box complete */}
                </div>
            </div>
        </div>
    );
}

export default Category;
