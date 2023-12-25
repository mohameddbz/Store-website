import brainysBlackSweater from './../images/pexels-dima-valkov-6402848 1.png'
import whiteSolidFormalShirt  from './../images/pexels-heitor-verdi-7665789 2(1).png'
import BrainyTshirt from './../images/Frame 4.png'
import BrainyBlueCodingSweater from './../images/pexels-monstera-6311613 (1) 1.png'
import BrainyNotebook  from './../images/pexels-dima-valkov-6211614 1.png'
import BrainyIphoneCase from './../images/pexels-dima-valkov-6402846 1.png'
import BrainyTshirt2 from './../images/pexels-dima-valkov-6211601 1.png'
import BrainyTankTop from './../images/pexels-monstera-6311612 3.png'
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
                    <div className='bg-imgColor'>
                        {// image
                        }
                        <img  src={brainysBlackSweater} className='w-80' alt="android Mug image" />
                    </div>
                    <div>
                        {// information
                        }
                        <div className='pt-8'>
                            {// nom of product 
                            // price + starts
                            }
                            <p className='font-semibold'>Brainy’s Black Sweater</p>
                            <div className='flex justify-around px-20'>
                                <div>3500 DA</div>
                                <div> | </div>
                                <div> 5.0 </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mr-12 mt-12'>
                    <div className='bg-imgColor'>
                        {// image
                        }
                        <img  src={whiteSolidFormalShirt} className='w-80' alt="android Mug image" />
                        <div ></div>
                    </div>
                    <div>
                        {// information
                        }
                        <div className='pt-8'>
                            {// nom of product 
                            // price + starts
                            }
                            <p className='font-semibold'>White Solid Formal Shirt</p>
                            <div className='flex justify-around px-20'>
                                <div>3000 DA</div>
                                <div> | </div>
                                <div> 4.9 </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mr-12 mt-12'>
                    <div className='bg-imgColor'>
                        {// image
                        }
                        <img  src={BrainyTshirt} alt="android Mug image" />
                        <div ></div>
                    </div>
                    <div>
                        {// information
                        }
                        <div className='pt-8'>
                            {// nom of product 
                            // price + starts
                            }
                            <p className='font-semibold'>Brainy’s T-shirt</p>
                            <div className='flex justify-around px-20'>
                                <div>2000 DA</div>
                                <div> | </div>
                                <div> 4.8 </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mr-12 mt-12'>
                    <div className='bg-imgColor'>
                        {// image
                        }
                        <img  src={BrainyBlueCodingSweater} alt="android Mug image" />
                    </div>
                    <div>
                        {// information
                        }
                        <div className='pt-8'>
                            {// nom of product 
                            // price + starts
                            }
                            <p className='font-semibold'>Brainy’s Blue Coding Sweater</p>
                            <div className='flex justify-around px-20'>
                                <div>4000 DA</div>
                                <div> | </div>
                                <div> 4.7 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between px-40 '>
                {// products
                }
                <div className='mr-12 mt-12'>
                    <div className='bg-imgColor'>
                        {// image
                        }
                        <img  src={BrainyNotebook} alt="android Mug image" />
                    </div>
                    <div>
                        {// information
                        }
                        <div className='pt-8'>
                            {// nom of product 
                            // price + starts
                            }
                            <p className='font-semibold' >Brainy’s Notebook</p>
                            <div className='flex justify-around px-20'>
                                <div>200 DA</div>
                                <div> | </div>
                                <div> 5.0 </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mr-12 mt-12'>
                    <div className='bg-imgColor'>
                        {// image
                        }
                        <img  src={BrainyIphoneCase} alt="android Mug image" />
                        <div ></div>
                    </div>
                    <div>
                        {// information
                        }
                        <div className='pt-8'>
                            {// nom of product 
                            // price + starts
                            }
                            <p className='font-semibold'>Brainy’s Iphone Case</p>
                            <div className='flex justify-around px-20'>
                                <div>1000 DA</div>
                                <div> | </div>
                                <div> 4.7 </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mr-12 mt-12'>
                    <div className='bg-imgColor'>
                        {// image
                        }
                        <img  src={BrainyTshirt2} alt="android Mug image" />
                        <div ></div>
                    </div>
                    <div>
                        {// information
                        }
                        <div className='pt-8'>
                            {// nom of product 
                            // price + starts
                            }
                            <p className='font-semibold'>Brainy’s T-shirt</p>
                            <div className='flex justify-around px-20'>
                                <div>1500 DA</div>
                                <div> | </div>
                                <div> 4.9 </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mr-12 mt-12'>
                    <div className='bg-imgColor'>
                        {// image
                        }
                        <img  src={BrainyTankTop} alt="android Mug image" />
                    </div>
                    <div>
                        {// information
                        }
                        <div className='pt-8'>
                            {// nom of product 
                            // price + starts
                            }
                            <p className='font-semibold' >Brainy’s Tank Top</p>
                            <div className='flex justify-around px-20'>
                                <div>1250 DA</div>
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