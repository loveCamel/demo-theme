import { HomePage, PostsPage } from '../Pages';

interface IRoute {
  title: string;
  path: string;
  component: JSX.Element;
}

const _baseUrl = 'demo/theme';

const routes: IRoute[] = [
  {
    title: 'Главная',
    path: `${_baseUrl}/`,
    component: <HomePage title='Главная' />,
  },
  {
    title: 'Статьи',
    path: `${_baseUrl}/posts`,
    component: <PostsPage title='Статьи' />,
  },
];

export { routes };
export type { IRoute };
