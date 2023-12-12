import React, { useState } from 'react';
import itemsData from './images.json';


export default function Features() {


    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll(prev => !prev);
    };
    return (
        <section className='px-[100px] py-[52px] '>
            <h2 className="w-28 h-[22px] text-primary text-[18.84px] text-['poppins'] font-semibold leading-loose">Description</h2>
            <p className='w-[550px] text-[14px] sm:w-[550px] md:w-[670px] lg:w-[809px] mt-[12px] text-added font-[400] leading-6'>
                {itemsData.teamDescriptions.description}</p>

                <h2 className="w-28 h-[22px] mt-[24px] text-primary text-[18.84px] font-semibold leading-loose">Condition</h2>
                <p className="w-[809px] mt-[12px] text-primary text-sm font-semibold leading-normal">
                {itemsData.teamDescriptions.condition}</p>

            <h2  className="mt-[58px] text-primary text-[18.84px] font-semibold font-['Poppins'] leading-loose">Features</h2>

            <div className="grid grid-cols-2 w-[310px] sm:w-[470px] md:w-[630px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:w-[770px] gap-2 mt-[20px]">
                {itemsData.features.slice(0, showAll ? itemsData.features.length : 9).map(item => (
                    <div key={item.id} className="w-[150px] lg:h-[109.78px] bg-features bg-opacity-50 rounded-[9.46px]">
                        <img src={item.image} alt={`Item ${item.id}`} className="w-[30px] h-[37px] mt-[16px] ml-[11px]" />
                        <p className="text-added text-sm font-normal leading-normal text-right w-[120px] mt-[25px] ">
                            {item.description}
                        </p>
                    </div>
                ))}
                {itemsData.features.length > 9 && (
                    <div className="text-center w-[150px] h-[109.78px] bg-features bg-opacity-50 rounded-[9.46px]">
                        <button onClick={toggleShowAll} className="text-toggle text-[14px] cursor-pointer flex items-center mt-11 ml-5">
                            {showAll ? 'See less' : `+${itemsData.features.length - 9} More Features `}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
