import androidMug from './../images/pexels-dima-valkov-6211616 (1) 2.png'
import androidCap from './../images/pexels-dima-valkov-6211621 1.png'
import androidPins from './../images/pexels-dima-valkov-6503007 3.png'
const Product = () => {
    return ( 
        <div className="flex-column  items-center justify-between pt-5 pb-40">
           <div className="text-6xl font-bold text-darkGreen">
                {// title
                }
                <h1>Our products</h1>
            </div>
            <div >
               {/* */}
               <ul className="flex items-center justify-center text-darkGreen text-xl font-semibold pb-20 space-y-20 space-x-48">
                  <li className="pt-20">SALE</li>
                  <li>5 STARS</li>
                  <li>NEW ARRIVALS</li>
                  <li>ACCESSOIRES</li>
               </ul>
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
        </div>
     );
}
 
export default Product;