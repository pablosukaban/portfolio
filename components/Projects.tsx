import React from 'react';
import SingleProject from './SingleProject';
import { projectsList } from './data';

type Props = {};

const Projects = (props: Props) => {
    return (
        <div className="relative flex h-screen w-full flex-col items-center justify-evenly gap-8">
            <h3 className="absolute top-24 text-center text-2xl uppercase tracking-[20px] text-gray-500">
                Проекты
            </h3>
            <div className="relative z-20 flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-primaryOrange/80">
                {projectsList.map((item, index) => (
                    <SingleProject
                        key={index}
                        index={index}
                        projectsListLength={projectsList.length}
                        project={item}
                    />
                ))}
            </div>
            <div className="absolute left-0 top-1/3 h-[500px] w-full -skew-y-12 bg-primaryOrange/10" />
        </div>
    );
};

export default Projects;
