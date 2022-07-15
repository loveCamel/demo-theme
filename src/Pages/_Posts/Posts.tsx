import { FC, useEffect } from 'react';
import { IPage } from '../interface';
import './Posts.less';

const Posts: FC<IPage> = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div className='Posts'>
      <ul className='Posts__list'>
        {mock.map(({ title, text }) => {
          return (
            <li className='Posts__item' key={title}>
              <h2 className='Posts__title'>{title}</h2>
              <p className='Posts__text'>{text}</p>
              <div className='Posts__more'></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mock = [
  {
    title: 'Факт 1',
    text: 'В среднем, в понедельник люди жалуются на жизнь на 12 минут дольше, чем в другие дни.',
  },
  {
    title: 'Международный день объятий',
    text: 'Сегодня, 4 декабря мир отмечает Международный день объятий. Согласно традиции праздника, заключить в дружеские объятия можно даже незнакомых людей — это принесет не только новые знакомства, но и улучшит здоровье',
  },
  {
    title: 'Факт 2',
    text: 'Ежедневно 60 человек становятся миллионерами (но не ты)',
  },
];

export { Posts };
