import myImage from "./../images/Mask group.png"
const Body = () => {
    return ( 
       <div className="flex items-center justify-around pt-10 pb-40 bg-backround-color">
            <div className=" space-y-10 text-left">
               {
                // text + button
               } 
                <div className="text-darkGreen text-7xl">
                    <p className="">Discover and </p>
                    <p className="">Find Your Own</p> 
                    <p className="">Fashion!</p>
                </div>
                <div className="text-textcolor text-2xl">
                    <p>Explore the intersection of style and intellect at </p>
                    <p>Brainy Store.Our swag items ensures an </p>
                    <p>intelligent shopping experience. Uncover the </p>
                    <p> essence of smart fashion in every selection.</p>
                </div>
                <button className="text-textWhite text-xl  bg-darkGreen px-10 py-3 border-2 border-darkGreen rounded-xl border-solid">
                    EXPLORE NOW 
                </button>
            </div>
            <div>
                {
                // image
                }
                <img src={myImage} alt="photo of person" />
            </div>
       </div>
     );
}
 
export default Body;