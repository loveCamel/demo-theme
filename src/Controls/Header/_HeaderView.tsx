import { FC } from 'react';
import { IHeaderViewProps } from './interface';
import { NavLink } from 'react-router-dom';

const HeaderView: FC<IHeaderViewProps> = ({
  routes,
  toggleSettingsPanelHandler,
}) => {
  return (
    <header className='Header'>
      <div className='Header__wrap'>
        <ul className='Header__list'>
          {routes.map(({ path, title }) => {
            return (
              <li className='Header__item' key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `Header__item-link ${isActive ? 'active' : ''}`
                  }
                >
                  {title}
                </NavLink>
              </li>
            );
          })}
          <li
            className='Header__theme-opener'
            onClick={() => toggleSettingsPanelHandler(true)}
          ></li>
        </ul>
      </div>
    </header>
  );
};

export { HeaderView };
