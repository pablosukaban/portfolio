import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Props = {};

const Contact = (props: Props) => {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        const string = `mailto:ilya.prikhodko22@gmail.com?subject=${formData.subject}&body=Привет, меня зовут ${formData.name}. ${formData.message} (${formData.email})`;
        window.location.href = string;
    };

    return (
        <div className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-6 text-center md:mt-0 md:px-0 md:text-left">
            <h3 className="heading">Контакты</h3>
            <div className="flex flex-col gap-4">
                <h4 className="text-center text-2xl font-semibold md:text-4xl ">
                    У меня есть то, что вам нужно.{' '}
                    <br className="block md:hidden" />
                    <span className="underline decoration-primaryOrange">
                        Давайте поговорим.
                    </span>
                </h4>
                <div className="flex flex-col items-center justify-center gap-2 md:gap-4">
                    <div className="flex items-center justify-center space-x-3">
                        <PhoneIcon className="h-7 w-7 animate-pulse text-primaryOrange" />
                        <p>+79122505515</p>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                        <MapPinIcon className="h-7 w-7 animate-pulse text-primaryOrange" />
                        <p>Екатеринбург, Россия</p>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                        <EnvelopeIcon className="h-7 w-7 animate-pulse text-primaryOrange" />
                        <p>ilya.prikhodko22@gmail.com</p>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mx-auto flex w-full max-w-fit flex-col gap-2 "
                >
                    <div className="flex flex-col gap-2 md:flex-row">
                        <input
                            className="contactInput"
                            type="text"
                            placeholder="Имя"
                            {...register('name')}
                        />
                        <input
                            className="contactInput"
                            type="email"
                            placeholder="Почта"
                            {...register('email')}
                        />
                    </div>
                    <input
                        className="contactInput"
                        type="text"
                        placeholder="Тема"
                        {...register('subject')}
                    />
                    <textarea
                        className="contactInput"
                        placeholder="Сообщение"
                        {...register('message')}
                    />
                    <button className="rounded-md bg-primaryOrange/80 px-10 py-3 text-lg font-bold text-black transition hover:bg-primaryOrange active:scale-95 md:py-5">
                        Подтвердить
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
