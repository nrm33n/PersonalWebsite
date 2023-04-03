import React from "react";
import AboutIcon from "@material-ui/icons/AccountCircleRounded";
import SoftwareIcon from "@material-ui/icons/DeveloperBoardRounded";
import SkillsIcon from "@material-ui/icons/MemoryRounded";
import ProjectsIcon from "@material-ui/icons/SdCardRounded";

export default function Sidebar() {
    return (
        <div class="sidebar">
        <div
         //class="relative bg-gray-50 dark:bg-slate-900 w-screen h-screen pattern"
        >
    <nav
    class="z-20 flex shrink-0 grow-0 justify-around gap-4 border-t border-gray-200 bg-transparent p-2.5 shadow-lg backdrop-blur-lg 
    dark:border-slate-600/60 dark:bg-slate-800/50 fixed top-2/4 -translate-y-2/4 left-6 min-h-[auto] min-w-[64px] flex-col rounded-lg border"
    >
    <a href="#about"
        class="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md 
        p-1.5 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800">
        <AboutIcon />
        <small class="text-center text-xs font-medium"> About </small>
    </a>

    <a href="#projects"
        class="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md 
        p-1.5 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800">
        <SoftwareIcon />
        <small class="text-center text-xs font-medium"> Projects </small>
    </a>

    <a href="#skills"
        class="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md 
        p-1.5 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800">
        <SkillsIcon />
        <small class="text-center text-xs font-medium"> Skills </small>
    </a>

    <a href="#moreprojects"
        class="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md 
        p-1.5 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800">
        <ProjectsIcon />
        <small class="text-center text-xs front-medium"> More </small>
    </a>

    </nav>
    </div>
    </div>
    );
}
