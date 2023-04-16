import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

const About = (props: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left'
        >
            <h3 className='absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500'>
                О себе
            </h3>
            <motion.img
                initial={{ x: -200, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                src='https://sun9-59.userapi.com/impg/Q2v6t4MyWfJ3OuPRq5LOfn6Q7V2E2j1o86eAXA/rTOwwO4CPs8.jpg?size=675x900&quality=95&sign=0a870300cd38cef0226d287c05fb8297&type=album'
                className='-mb-20 h-56 w-56 flex-shrink-0 rounded-full object-cover md:mb-0 md:h-96 md:w-64 md:rounded-lg xl:h-[600px] xl:w-[500px]'
            />
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>
                    <span className='underline decoration-primaryOrange'>
                        Специализированный
                    </span>{' '}
                    Front-end разработчик из Екатеринбурга
                </h4>
                <p>
                    Будучи младшим фронтенд-разработчиком, я обладаю
                    внушительным арсеналом навыков в области HTML, CSS,
                    JavaScript, React и Tailwind. Я преуспел в разработке и
                    поддержке отзывчивых веб-сайтов, которые обеспечивают
                    плавное взаимодействие с пользователями. Мой опыт
                    заключается в создании динамичных, привлекательных
                    интерфейсов посредством написания чистого и
                    оптимизированного кода и использования передовых
                    инструментов и методов разработки. Я также являюсь командным
                    игроком, который стремится к сотрудничеству с командами для
                    создания выдающихся веб-приложений.
                </p>
            </div>
        </motion.div>
    );
};

export default About;
