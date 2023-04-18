import React from 'react';
import { motion } from 'framer-motion';

type Props = {
    index: number;
    projectsListLength: number;
};

const SingleProject = ({ index, projectsListLength }: Props) => {
    return (
        <div className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <motion.img
                initial={{ y: -300, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png"
                alt="project image"
            />
            <div className="max-w-6xl space-y-10 px-0 md:px-10">
                <h4 className="text-center text-4xl font-semibold">
                    <span className="underline decoration-primaryOrange/50">
                        Проект {index + 1} из {projectsListLength}:
                    </span>{' '}
                    HomeLand
                </h4>
                <p className="text-center text-lg md:text-left">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis qui at quisquam. Similique, dolores tempore labore
                    sint ipsam corrupti a fugiat pariatur soluta perspiciatis
                    placeat laborum quo iure eius omnis doloribus? Quis, iure?
                    Consequatur ex qui dolores ab, assumenda accusantium?
                </p>
            </div>
        </div>
    );
};

export default SingleProject;
