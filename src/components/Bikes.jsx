import React from "react";
import b1 from '../assets/BikeImg1.png'
import b2 from '../assets/BikeImg2.png'
import b3 from '../assets/BikeImg3.png'
import b4 from '../assets/BikeImg4.png'
import b5 from '../assets/BikeImg5.png'
const Bikes = () => {
  return (
    <div id="Bikes" className="h-screen  snap-center xs:snap-start ">
     <h1 className="text-center dark:text-white  pt-10 font-poppins text-[25px] mb-20 font-extrabold pb-14">Bikes Information</h1>
      <div className="flex  justify-center items-center h-[200px] mb-44 flex-row gap-8">
        {/* Card 1 */}

        <div className="flex flex-col justify-center items-center bg-gradient-to-b from-yellow-400 to-black h-[200px] w-[250px] rounded-lg p-4">
          {/* Card content goes here */}

          <img src={b5} alt="img bike" />
          <p className="py-5 font-bold text-[20px] font-poppins">
            Total Electric Bikes
          </p>
          <p>18</p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col justify-center items-center bg-gradient-to-b from-yellow-400 to-black h-[200px] w-[250px] rounded-lg p-4">
          {/* Card content goes here */}

          <img src={b4} alt="img bike" />
          <p className="py-5 font-bold text-[20px] font-poppins">Range</p>
          <p className="w-40 text-center">
             50 kilometres after being fully charged
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col justify-center items-center bg-gradient-to-b from-yellow-400 to-black h-[200px] w-[250px] rounded-lg p-4">
          {/* Card content goes here */}

          <img src={b3} alt="img bike" />
          <p className="py-5 font-bold text-[20px] font-poppins">
            Total Electric Bikes
          </p>
          <p>18</p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col justify-center items-center bg-gradient-to-b from-yellow-400 to-black h-[200px] w-[250px] rounded-lg p-4">
          {/* Card content goes here */}

          <img src={b2} alt="img bike" />
          <p className="py-5 font-bold text-[20px] font-poppins">
            Total Electric Bikes
          </p>
          <p>18</p>
        </div>

        {/* Card 5 */}
        <div className="flex flex-col justify-center items-center bg-gradient-to-b from-yellow-400 to-black h-[200px] w-[250px] rounded-lg p-4">
          {/* Card content goes here */}

          <img src={b1} alt="img bike" />
          <p className="py-5 font-bold text-[20px] font-poppins">
            Total Electric Bikes
          </p>
          <p>18</p>
        </div>
      </div>
    </div>
  );
};

export default Bikes;
