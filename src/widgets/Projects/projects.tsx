import Pizza from '../../shared/assets/imgProjectCard/pizza.png';
import Food from '../../shared/assets/imgProjectCard/food.png';
import Articles from '../../shared/assets/imgProjectCard/articles.png';
import Portfolio from '../../shared/assets/imgProjectCard/portfolio.png';

export type ProjectItem = {
    name: string;
    title: string;
    description: string;
    stack: string;
    img: string;
    mainLink: string;
    gitLink: string;
};

export const projects = () => {
    const projectsData: ProjectItem[] = [
        {
            name: 'Pizza delivery',
            title: 'Pizza delivery',
            description:
                'Сайт для заказа пицц на React с использованием TypeScript. Реализована пагинация страниц, сортировка, фильтрация и поиск пицц, а также функционал корзины заказа. Для демонстрации функционала используется фейковый API на mockapi.io',

            stack: ' React, TypeScript, Redux Toolkit, React Router, Javascript, CSS modules ',
            img: Pizza,
            mainLink: 'https://kostikkras.github.io/pizza-delivery/',
            gitLink: 'https://github.com/kostikkras/pizza-delivery',
        },
        {
            name: 'Social App',
            title: 'Social App',
            description:
                'Разработано приложение для просмотра статей, доступное только авторизованным пользователям с личным кабинетом (приватные роуты). Настройка проекта Webpack выполнена с нуля, включая интернационализацию и возможность изменения темы. Для работы с данными используется Redux Toolkit. Для разработки компонентов использовался инструмент Storybook. Проект разрабатывался с использованием архитектуры Feature-Sliced Design. Деплой произведен на облачном сервере',
            stack: ' React, TypeScript, Redux Toolkit, Router,Javascript, CSS modules, Feature-Sliced Design, Storybook, E2E, React Testing Library, ESlint, i18n, СI/CD, Webpack ',
            img: Articles,
            mainLink: 'https://dapper-beignet-6ec09b.netlify.app/',
            gitLink: 'https://github.com/kostikkras/articles-app-154',
        },
        {
            name: 'Доставка равильного питания',
            title: 'Доставка равильного питания',
            description: 'Landing Page для сервиса по доставке правильного питания. ',

            stack: ' HTML, CSS, Javascript ',
            img: Food,
            mainLink: 'https://kostikkras.github.io/food_diet/#',
            gitLink: 'https://github.com/kostikkras/food_diet',
        },
        {
            name: 'Портфолио',
            title: 'Портфолио',
            description:
                'Персональное портфолио созданное с Material UI. Функция переключения темы, форма обратной связи на платформе EmailJs, пакет react-scroll для плавной прокрутки ',

            stack: ' React, TypeScript, MUI, Javascript, CSS modules ',
            img: Portfolio,
            mainLink: '',
            gitLink: '',
        },
    ];

    return projectsData;
};
