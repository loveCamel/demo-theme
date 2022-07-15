import { FC } from 'react';
import { LayoutView } from './_LayoutView';
import { routes } from '../../routes';
import type { ILayoutProps } from './interface';

import './_Layout.less';

const Layout: FC<ILayoutProps> = () => {
  return <LayoutView routes={routes} />;
};

export default Layout;
