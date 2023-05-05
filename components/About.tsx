import React from 'react';
import { motion } from 'framer-motion';
import AboutImage from '../images/hero-image-2.webp';

type Props = {};

const About = (props: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left"
        >
            <h3 className="heading">О себе</h3>
            <motion.img
                initial={{ x: -200, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                src="https://stefantopalovicdev.vercel.app/static/media/about-img.62b47e7f183d4b4e9feb.webp"
                className="-mb-20 hidden h-56 w-56 flex-shrink-0 rounded-full object-cover md:mb-0 md:block md:h-96 md:w-64 md:rounded-lg xl:h-[500px] xl:w-[400px]"
            />
            <div className="space-y-10 px-1 md:px-10">
                <h4 className="text-2xl font-semibold md:text-4xl">
                    <span className="underline decoration-primaryOrange">
                        Специализированный
                    </span>{' '}
                    Front-end разработчик из Екатеринбурга
                </h4>
                <p className="text-base text-gray-200 md:text-lg">
                    Как front-end разработчик, я владею HTML, CSS, JavaScript,
                    React и Tailwind и успешно создаю и поддерживаю отзывчивые
                    веб-сайты. Мой опыт включает написание чистого и
                    оптимизированного кода с использованием передовых
                    инструментов для создания динамичных и привлекательных
                    интерфейсов. Я также люблю работать в команде для создания
                    лучших веб-приложений.
                </p>
            </div>
        </motion.div>
    );
};

export default About;
