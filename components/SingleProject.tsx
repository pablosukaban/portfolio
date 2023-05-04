import React from 'react';
import { motion } from 'framer-motion';
import { ProjectDataType } from './data';
import Image from 'next/image';

import { LinkIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

type Props = {
    index: number;
    projectsListLength: number;
    project: ProjectDataType;
};

const SingleProject = ({ index, projectsListLength, project }: Props) => {
    return (
        <div className="mt-4 flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center p-14 md:mt-0 md:justify-center md:p-44">
            <motion.div
                initial={{ y: -300, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-md "
            >
                <Image
                    src={project.image}
                    alt={project.title + ' image'}
                    width={800}
                    className="rounded-md transition hover:scale-105"
                />
            </motion.div>
            <div className="mt-2 flex max-w-6xl flex-col items-center justify-center gap-4 px-0 md:px-6">
                <h4 className="text-center text-2xl font-semibold md:text-4xl">
                    <span className="underline decoration-primaryOrange/50">
                        Проект {index + 1} из {projectsListLength}:
                    </span>{' '}
                    {project.title}
                </h4>
                <p className="text-center text-base  md:text-lg">
                    {project.text}
                </p>
                <div className="grid grid-cols-2 place-items-center gap-2">
                    <a
                        href={project.demo_link}
                        className="flex items-center justify-center gap-2 rounded border border-primaryOrange/40 px-4 py-2 text-white transition hover:border-primaryOrange"
                        target="_blank"
                    >
                        <LinkIcon className="h-4 w-4 text-primaryOrange" />
                        Демо
                    </a>
                    <a
                        href={project.code_link}
                        className="flex items-center justify-center gap-2 rounded border border-primaryOrange/40 px-4 py-2 text-white transition hover:border-primaryOrange"
                        target="_blank"
                    >
                        <CodeBracketIcon className="h-4 w-4 text-primaryOrange" />
                        Код
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;
