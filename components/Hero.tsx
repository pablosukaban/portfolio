import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';

type Props = {};

const Hero = (props: Props) => {
    const [text, count] = useTypewriter({
        words: ['Привет', 'Меня зовут Илья', 'Я - Веб-разработчик'],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
            <BackgroundCircles />
            {/* Поменять на <Image /> */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="https://sun9-58.userapi.com/impg/4_fXjrSx5czcPYUYivYmLBnxtlbBFB6ze2VdNw/6b7PU-_qxSM.jpg?size=521x700&quality=95&sign=a547a9352b6ca085b7929f544e51bd5d&type=album"
                alt="profile picture"
                className="relative h-32 w-32 rounded-full object-cover"
            />
            <div className="z-20">
                <h2 className="pb-2 text-sm uppercase tracking-[15px] text-gray-500">
                    Разработчик
                </h2>
                <h1 className="px-10 text-5xl font-semibold lg:text-6xl">
                    <span>{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>
                <div className="py-5">
                    <Link href="#about">
                        <button className="heroButton">О себе</button>
                    </Link>
                    <Link href="#skills">
                        <button className="heroButton">Навыки</button>
                    </Link>
                    <Link href="#projects">
                        <button className="heroButton">Проекты</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
