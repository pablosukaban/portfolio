import { StaticImageData } from 'next/image';
import CarRental from '../images/CarRental.png';
import DrawGa from '../images/DrawGa.png';
import FuturWear from '../images/FuturWear.png';
import HomeLand from '../images/HomeLand.png';
import Summize from '../images/Summize.png';

export type ProjectDataType = {
    image: StaticImageData;
    title: string;
    text: string;
    demo_link: string;
    code_link: string;
};

const exapleText =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.';

export const projectsList: ProjectDataType[] = [
    {
        title: 'CarRental',
        text: 'Car rental - Сайт-агрегатор, позволяющий арендовать автомобиль у разных компаний в одном месте. Пользователи могут выбирать автомобили на основе их местоположения, цены и других параметров.',
        image: CarRental,
        code_link: 'https://github.com/pablosukaban/car-rental',
        demo_link: 'https://car-rental-lyart.vercel.app/',
    },
    {
        title: 'DrawGa',
        text: 'DrawGa - Многопользовательская онлайн-доска для рисования, которая позволяет пользователям создавать и редактировать рисунки в реальном времени. Кроме того, пользователи могут взаимодействовать друг с другом, добавлять комментарии и обмениваться советами по рисованию.',
        image: DrawGa,
        code_link: 'https://github.com/Capybara77/drawga',
        demo_link: 'https://draw.ga/Draw',
    },
    {
        title: 'FuturWear',
        text: 'FuturWear - 3D сайт, который позволяет пользователям создавать свои собственные дизайны футболок. Есть функция загрузки своих файлов или использования ИИ для создания уникальных дизайнов. ',
        image: FuturWear,
        code_link: 'https://github.com/pablosukaban/FuturWear',
        demo_link: 'https://futur-wear.vercel.app/',
    },
    {
        title: 'HomeLand',
        text: 'HomeLand - Сайт-агрегатор для аренды жилых помещений. Пользователи могут искать и сравнивать различные жилье по параметрам, таким как локация, тип помещения или цена.',
        image: HomeLand,
        code_link: 'https://github.com/pablosukaban/homeland-real-estate',
        demo_link: 'https://homeland-flame.vercel.app/',
    },
    {
        title: 'Summize',
        text: 'HomeLand - Сайт-агрегатор для аренды жилых помещений. Пользователи могут искать и сравнивать различные жилье по параметрам, таким как локация, тип помещения или цена.',
        image: Summize,
        code_link: 'https://github.com/pablosukaban/ai-summarizer',
        demo_link: 'https://summize-five.vercel.app/',
    },
];
