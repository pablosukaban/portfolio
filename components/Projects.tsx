import React from 'react';
import { motion } from 'framer-motion';
import SingleProject from './SingleProject';

type Props = {};

const Projects = (props: Props) => {
    const projectsList = [1, 2, 3, 4];
    return (
        <div className="relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left md:flex-row">
            <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
                Проекты
            </h3>
            <div className="relative z-20 flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll">
                {projectsList.map((item, index) => (
                    <SingleProject
                        key={index}
                        index={index}
                        projectsListLength={projectsList.length}
                    />
                ))}
            </div>
            <div className="absolute left-0 top-1/3 h-[500px] w-full -skew-y-12 bg-primaryOrange/10" />
        </div>
    );
};

export default Projects;
