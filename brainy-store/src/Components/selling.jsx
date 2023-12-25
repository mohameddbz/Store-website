
import androidMug from './../images/pexels-dima-valkov-6211616 (1) 2.png'
import androidCap from './../images/pexels-dima-valkov-6211621 1.png'
import androidPins from './../images/pexels-dima-valkov-6503007 3.png'
import { FaLongArrowAltRight } from "react-icons/fa";
const Selling = () => {
    return ( 
        <div className="flex-column  items-center justify-between pt-40 pb-20 bg-textWhite">
            <div className="text-6xl font-bold text-darkGreen">
                {// title
                }
                <h1>Best selling</h1>
            </div>
            <div className="text-2xl space-y-8 text-darkGreen">
                {// description
                }
                <p className="p-12">Get in on the trend with our curated selection of best-selling products.</p>
            </div>
            <div className='flex items-center justify-between px-40 '>
                {// products
                }
                <div className='mr-12 mt-12'>
                    <div className='bg-backround-color'>
                        {// image
                        }
                        <img  src={androidCap} alt="android Mug image" />
                    </div>
                    <div>
                        {// information
                        }
                        <div className='pt-8'>
                            {// nom of product 
                            // price + starts
                            }
                            <p className='font-semibold'>Android Cap</p>
                            <div className='flex justify-around px-20'>
                                <div>900 DA</div>
                                <div> | </div>
                                <div> 5.0 </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mr-12 mt-12'>
                    <div className='bg-backround-color'>
                        {// image
                        }
                        <img  src={androidMug} alt="android Mug image" />
                    </div>
                    <div>
                        {// information
                        }
                        <div className='pt-8'>
                            {// nom of product 
                            // price + starts
                            }
                            <p className='font-semibold' >Android Mug</p>
                            <div className='flex justify-around px-20'>
                                <div>500 DA</div>
                                <div> | </div>
                                <div> 4.9 </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mr-12 mt-12'>
                    <div className='bg-backround-color'>
                        {// image
                        }
                        <img  src={androidPins} alt="android Mug image" />
                        <div ></div>
                    </div>
                    <div>
                        {// information
                        }
                        <div className='pt-8'>
                            {// nom of product 
                            // price + starts
                            }
                            <p className='font-semibold'>Android Pins</p>
                            <div className='flex justify-around px-20'>
                                <div>50 DA</div>
                                <div> | </div>
                                <div> 5.0 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-20'>
                {// button
                }
                <button className=" flex justify-between items-center text-xl  text-darkGreen px-16 py-3 border-2 border-darkGreen rounded-xl border-solid">
                    <p className='px-1'>See all</p>
                    <FaLongArrowAltRight className='px-1' size={30} />
                </button>
            </div>
        </div>
     );
}
 
export default Selling;