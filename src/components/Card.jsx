import React from 'react'

function Card() {
    return (
        <div
            class="h-[16em] w-[18em] border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]"
        >
            <div>
                <h1 class="text-[2em] font-medium">Heading</h1>
                <p class="text-[0.85em]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorum
                    blanditiis pariatur sequi magni.
                </p>
            </div>

            <button
                class="h-fit w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]"
            >
                <p>Button</p>
                <svg
                    class="w-6 h-6 group-hover:translate-x-[10%] duration-300"
                    stroke="currentColor"
                    stroke-width="1"
                    viewBox="0 0 24 24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                    ></path>
                </svg>
            </button>
        </div>
    )
}

export default Card