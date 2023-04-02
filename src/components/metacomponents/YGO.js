import React from "react";
//ring-[#252436BF]

export default function YGO(){
    return(
        <section class="absolute inset-0 flex justify-space-around justify-items-center object-fill h-full w-full
         bg-black transition-all z-10 card-back opacity-0 hover:opacity-100">
        <div class="container mx-auto py-2">
            <div class="flex px-2 flex-wrap">
                <div class="flex justify-space-around justify-items-stretch 
                ring-8 ring-[#B8693E] shadow-lg rounded-lg bg-gray-800"
                >
                    <div class="bg-repeat bg-ygo-bg">
                        <div
                            class="flex justify-between justify-items-stretch shadow-md border-2 px-2 pt-1 rounded-[2px] border-opacity-50  border-t-teal-50 border-l-teal-50  border-b-[#000000] border-r-[#000000]">
                            <span class="font-Merriweather font-bold text-lg">Galaxy-Eyes Photon Dragon</span>
                            <span><img src="https://static.wikia.nocookie.net/yugioh/images/d/de/DARK.svg" height="30" width="30" alt=""></img></span>
                        </div>
                        <div class="mx-7 my-1 flex justify-end justify-items-stretch">
                            <span><img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Starball_Red.svg" height="20" width="20"
                                    alt=""></img></span>
                        </div>
                        <div
                            class="mx-auto rounded-[1px] ring-4 my-1 w-5/6 shadow-lg shadow-black ring-offset-0 h-96 overflow-hidden">
                            <img class="object-cover overflow-hidden" src="./me.jpg" alt="haru"></img>
                        </div>
                        <div class="mx-7 my-auto flex justify-end items-center">
                            <span class="text-xs font-bold font-Merriweather">NECH-EN026</span>
                        </div>
                        <div class="mx-2 flex justify-around">
                            <div class="bg-ygo-bg bg-repeat">
                                <div class="bg-slate-200 mx-1 my-2 px-1 ring-4 ring-[#B8693E] font-Merriweather">
                                    <h1 class="font-bold">[Dragon/Effect]</h1>
                                    <p class="text-xs"> 
                                    You can Special Summon this card (from your hand) by Tributing 2 monsters with 2000 or more ATK. 
                                    During the Battle Step, if this card battles an opponent's monster (Quick Effect): You can target 
                                    that opponent's monster; banish both this card from the field and that target. Return those banished 
                                    monsters to the field at the end of the Battle Phase, and if you banished an Xyz Monster, this card 
                                    gains 500 ATK for each material it had when it was banished. 
                                    </p>
                                    <hr class="h-1 bg-black"></hr>
                                    <div class="flex justify-end items-center">
                                        <span>ATK/3000</span>
                                        <span>DEF/2500</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mx-2 flex justify-between items-center">
                            <span class="text-[9px]">00000001</span>
                            <span class="text-[9px]">©1996 KAZUKI TAKAHASHI</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}