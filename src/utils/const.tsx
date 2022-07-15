interface IStyle {
  title: string;
  name: string;
  value: string;
  type: 'color' | 'number';
  descriptions?: string;
}

const themeColors: IStyle[] = [
  {
    title: 'Цвет основного фона',
    descriptions: 'Используется для основых элементов',
    name: '--bgColor',
    type: 'color',
    value: '#ffffff',
  },
  {
    title: 'Цвет вторичного фона',
    descriptions: 'Используется для фона страницы',
    name: '--bgSecondColor',
    type: 'color',
    value: '#f3f2ef',
  },
  {
    title: 'Цвет текста',
    descriptions: 'Используется для основного текста',
    name: '--textColor',
    type: 'color',
    value: '#6f6f6f',
  },
  {
    title: 'Цвет заголовка',
    descriptions: 'Используется для заголовков',
    name: '--titleColor',
    type: 'color',
    value: '#222222',
  },
  {
    title: 'Цвет ссылки',
    descriptions: 'Используется для ссылок в навигации',
    name: '--linkColor',
    type: 'color',
    value: '#222222',
  },
  {
    title: 'Цвет границ',
    descriptions: 'Используется для всех границ (рамок)',
    name: '--borderColor',
    type: 'color',
    value: '#dedede',
  },
];

export { themeColors };
export type { IStyle };
