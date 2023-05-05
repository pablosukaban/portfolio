import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { DocumentTextIcon } from '@heroicons/react/24/solid';

type Props = {};

const Header = (props: Props) => {
    return (
        <header className="sticky top-0 z-50 mx-auto flex max-w-7xl items-start justify-between px-2 py-0 md:p-5 xl:items-center">
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className="grid grid-cols-4 items-center"
            >
                <SocialIcon
                    url="https://vk.com/pablosukaban"
                    fgColor="gray"
                    target="_blank"
                    bgColor="transparent"
                />
                <SocialIcon
                    url="https://github.com/pablosukaban"
                    fgColor="gray"
                    target="_blank"
                    bgColor="transparent"
                />
                <SocialIcon
                    url="https://t.me/pblskban"
                    fgColor="gray"
                    target="_blank"
                    bgColor="transparent"
                />
                <a
                    href="https://drive.google.com/file/d/1qFHiJyrEZY38_rvpMJ92RNtCsHWJxtSM/view"
                    target="_blank"
                >
                    <DocumentTextIcon className="ml-2 h-8 w-8 text-[#808080]" />
                </a>
            </motion.div>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className="flex cursor-pointer items-center text-gray-300"
            >
                <SocialIcon
                    className=""
                    network="email"
                    fgColor="gray"
                    bgColor="transparent"
                />
                <Link href="#contact">
                    <p className="hidden text-sm uppercase text-gray-400 md:inline-flex">
                        Свяжитесь Со Мной
                    </p>
                </Link>
            </motion.div>
        </header>
    );
};

export default Header;
