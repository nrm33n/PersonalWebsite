import React from "react";

export default function YGO2(){
    return(

    <section class="relative inset-0 card-back">
        <div class="container mx-auto py-10 bg-neutral-800/50">
            <div class="flex  px-4 flex-wrap">
                <div
                    class="w-full overflow-hidden flex justify-center items-center  ring-8 ring-[#252436BF] bg-[#B8693E] shadow-lg md:w-1/2 lg:w-1/4">

                    <div class="bg-[url('https://i.imgur.com/DNVGE5B.png')] bg-repeat">
                        <div
                            class="  mx-5 mt-2 flex justify-between items-center shadow-md border-2 px-2 pt-1 rounded-[2px] border-opacity-50  border-t-teal-50 border-l-teal-50  border-b-[#000000] border-r-[#000000]">
                            <span class="font-Merriweather font-bold text-lg">Oshino Shinobu</span>
                            <span><img src="https://static.wikia.nocookie.net/yugioh/images/a/a1/EARTH.svg" height="30" width="30" alt=""></img></span>
                        </div>
                        <div class="mx-7 my-1 flex justify-end items-center">
                            <span><img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Starball_Red.svg" height="20" width="20"
                                    alt=""></img></span>
                        </div>
                        <div
                            class="mx-auto rounded-[1px] ring-4 my-1 h-[260px] w-[260px] shadow-lg shadow-black ring-offset-0 ring-[#808080] ">
                            <img class="object-fill" src="https://i.imgur.com/73iQVzJ.jpg" alt="haru"></img>
                        </div>
                        <div class="mx-7 my-1 flex justify-end items-center">
                            <span class="text-xs font-bold font-Merriweather">NECH-EN026</span>
                        </div>
                        <div class="mx-2">
                            <div class="bg-[url('https://i.imgur.com/neIKEeX.png')] bg-repeat">
                                <div class="bg-slate-200 mx-1 my-2 px-1 ring-4 ring-[#FFC85F] font-Merriweather">
                                    <h1 class="font-bold">[Psychic/Tuner/Effect]</h1>
                                    <p class="text-[10px]">When a monster on the field activates its effect, or when a
                                        Spell/Trap that is
                                        already face-up on the field activates its effect (Quick Effect): You can send
                                        this card from your hand or field to the GY; destroy that card on the field. You
                                        can only use this effect of "Ghost Ogre & Snow Rabbit" once per turn.</p>
                                    <hr class="h-1 bg-black"></hr>
                                    <div class="flex justify-end items-center">
                                        <span>ATK/ 0</span>
                                        <span>DEF/1800</span>
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
    );
}