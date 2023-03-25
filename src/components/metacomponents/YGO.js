import React from "react";

export default function YGO(){
    return(
        //add opacity-0 when i fix the bigass issue??? 
        <section class="absolute inset-0 w-full flex justify-center items-center bg-black transition-all z-10 card-back opacity-0 hover:opacity-100">
        <div class="container mx-auto py-10">
            <div class="px-2 flex-wrap">
                <div
                    class="w-full overflow-hidden flex justify-center items-center ring-8 ring-[#252436BF] bg-[#B8693E] shadow-lg rounded-lg bg-gray-800"
                >
                    <div class="bg-repeat bg-ygo-bg">
                        <div
                            class="mx-5 mt-2 flex justify-between items-center shadow-md border-2 px-2 pt-1 rounded-[2px] border-opacity-50  border-t-teal-50 border-l-teal-50  border-b-[#000000] border-r-[#000000]">
                            <span class="font-Merriweather font-bold text-lg">Galaxy-Eyes Photon Dragon</span>
                            <span><img src="https://static.wikia.nocookie.net/yugioh/images/d/de/DARK.svg" height="30" width="30" alt=""></img></span>
                        </div>
                        <div class="mx-7 my-1 flex justify-end items-center">
                            <span><img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Starball_Red.svg" height="20" width="20"
                                    alt=""></img></span>
                        </div>
                        <div
                            class="mx-auto rounded-[1px] ring-4 my-1 w-5/6 shadow-lg shadow-black ring-offset-0 h-80 overflow-hidden">
                            <img class="overflow-hidden" src="./me.jpg" alt="haru"></img>
                        </div>
                        <div class="mx-7 my-1 flex justify-end items-center">
                            <span class="text-xs font-bold font-Merriweather">NECH-EN026</span>
                        </div>
                        <div class="mx-2">
                            <div class="bg-ygo-bg bg-repeat">
                                <div class="bg-slate-200 mx-1 my-2 px-1 ring-4 ring-[#FFC85F] font-Merriweather">
                                    <h1 class="font-bold">[Dragon/Effect]</h1>
                                    <p class="text-[10px]"> 
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