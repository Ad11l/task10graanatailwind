import React, { useState } from 'react';
import Image from 'next/image';
import teamsData from './images.json';

export default function Pics() {

    return (
        <>
            <section className='flex gap-[10px] w-full px-[100px] pt-[18px] sm:w-full sm:px-[100px] sm:pt-[18px] md:gap-[10px] md:w-full md:px-[100px] md:pt-[18px] lg:pt-[18px] lg:gap-[10px]'>
                <div className="">
                    <Image className=':w-full h-[562px]'
                        src={teamsData.team[0].image}
                        alt="l"
                        width={1000}
                        height={200}
                    />
                    <div><img className='relative float-right bottom-8' src={"images/dill.png"} alt='dill' /></div>
                </div>
                <div className='hidden relative sm:flex sm:flex-col sm:gap-[10px] md:flex md:flex-col md:gap-[10px]  lg:flex lg:flex-col lg:gap-[10px]'>

                    {teamsData.team.slice(1, 3).map((team, index) => (
                        <div key={index} className=''>
                            <Image className=" w-[100%] h-[276px]"
                                src={team.image}
                                alt={`Team ${index + 1}`}
                                width={300}
                                height={200} />
                        </div>
                    ))}
                    <div className='absolute w-[55.50px] h-[34.03px] p-[10.21px] bg-black bg-opacity-50 rounded-[10.21px] justify-center items-center gap-[3.83px] inline-flex text-white right-[2%] top-[515px]'>
                        <img className='w-[14px] h-[13px] ' src={"/images/pics.png"} alt='pics' />
                        <span>{teamsData.team.length}</span>
                    </div>
                </div>
            </section>

            <div className='flex justify-between px-[100px] pt-[34px]'>
                <p className="text-primary text-location font-['poppins'] font-semibold leading-[38.13px]">
                    {teamsData.title.title}</p>
                <div className='hidden lg:flex lg:gap-[14px]  '>
                    <button type='submit' className='w-[151px] h-10 px-4 rounded-lg border border-primary justify-center items-center gap-2.5 inline-flex text-primary text-sm font-semibold uppercase leading-snug'>
                        <img src={"images/call.png"} alt='call' />
                        Call
                    </button>
                    <button type='submit' className='w-[161px] h-10 px-4 rounded-lg bg-primary justify-center items-center gap-2.5 inline-flex text-white text-sm font-semibold uppercase leading-snug'>
                        <img src={"images/msg.png"} alt='call' />
                        Inquire
                    </button>
                    <img className='h-10' src={"images/PrimaryButton.png"} alt='whtsapp' />
                </div>
            </div>

            <div className='flex gap-[22.2px] ml-[108px] pt-[14px]'>
                <div className='flex gap-2'>
                    <img className='w-[21px] h-[21px]' src={"images/bed.png"} alt='bed' />
                    <span className='text-[14px] text-primary'>{teamsData.values[0].bed}</span>
                </div>

                <div className='flex gap-2'>
                    <img className='w-[21px] h-[21px]' src={"images/shower.png"} alt='bed' />
                    <span className='text-[14px] text-primary'>{teamsData.values[1].shower}</span>
                </div>

                <div className='flex gap-2'>
                    <img className='w-[21px] h-[21px]' src={"images/scale.png"} alt='bed' />
                    <span className='text-[14px] text-primary'>{teamsData.values[2].space}</span>
                </div>

                <div className='flex gap-2'>
                    <img className='h-[13px] relative mt-[5px]' src={"images/Rectangle.png"} alt='bed' />
                    <span className='text-[14px] text-primary'>{teamsData.values[3].home}</span>
                </div>
            </div>

            <div className='flex gap-[9px] ml-[108px] pt-[24px]'>
                <p className='text-pkr text-primary text-base font-Poppins leading-7 font-semibold mt-[34px]'>
                    PKR
                </p>
                <span className='text-primary text-[29px] font-semibold font-Poppins mt-[24px]'>{teamsData.values[4].pkr}</span>
            </div>
            <p className="text-added text-sm font-normal font-['Poppins'] leading-normal ml-[108px] pt-[8px]">{teamsData.values[5].days}</p>

        </>
    );
}
