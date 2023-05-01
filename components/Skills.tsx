import React from 'react';
import SingleSkill from './SingleSkill';
import { motion } from 'framer-motion';
import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiRedux,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiGithub,
} from 'react-icons/si';

type Props = {};

const iconClasses = 'h-20 w-20 transition duration-300 ease-in-out';

const Icons = [
    <SiJavascript key={1} className={iconClasses} title="JavaScript" />,
    <SiTypescript key={2} className={iconClasses} title="Typescript" />,
    <SiReact key={3} className={iconClasses} title="React" />,
    <SiRedux key={4} className={iconClasses} title="Redux" />,
    <SiHtml5 key={5} className={iconClasses} title="Html5" />,
    <SiCss3 key={6} className={iconClasses} title="Css3" />,
    <SiTailwindcss key={7} className={iconClasses} title="Tailwindcss" />,
    <SiGithub key={8} className={iconClasses} title="Github" />,
];

const colors = [
    'text-yellow-400',
    'text-blue-500',
    'text-blue-400',
    'text-purple-500',
    'text-orange-500',
    'text-blue-400',
    'text-blueTailwind',
    'text-white',
];

const Skills = (props: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative mx-auto flex h-screen max-w-[2000px] flex-col items-center justify-evenly text-center md:justify-center md:text-left xl:flex-row xl:space-y-0 xl:px-10"
        >
            <h3 className="heading">Навыки</h3>

            <h3 className="top-36 block px-4 text-center text-base uppercase tracking-[3px] text-gray-500 md:absolute md:px-0">
                Набор инструментов, которые я использую каждый день <br /> для
                создания{' '}
                <span className="underline decoration-primaryOrange">
                    качественных
                </span>{' '}
                и{' '}
                <span className="underline decoration-primaryOrange">
                    эффективных
                </span>{' '}
                веб-приложений
            </h3>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {Icons.map((item, index) => (
                    <SingleSkill
                        icon={item}
                        key={index}
                        color={colors[index]}
                        directionLeft={index < 4}
                    />
                ))}
            </div>
        </motion.div>
    );
};

export default Skills;
