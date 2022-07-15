import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ILayoutViewProps } from './interface';

const LayoutView: FC<ILayoutViewProps> = ({ routes }) => {
  return (
    <section className='Layout'>
      <div className='Layout__wrap'>
        <Routes>
          {routes.map(({ path, component }) => {
            return <Route path={path} element={component} key={path} />;
          })}
        </Routes>
      </div>
    </section>
  );
};

export { LayoutView };
