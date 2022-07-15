import { FC } from 'react';
import { HeaderView } from './_HeaderView';
import { routes } from '../../routes';
import { themeStore } from '../../Stores/ThemeStore';
import type { IHeaderProps } from './interface';

import './_Header.less';

const { setSettingsState } = themeStore;

const Header: FC<IHeaderProps> = () => {
  return (
    <HeaderView routes={routes} toggleSettingsPanelHandler={setSettingsState} />
  );
};

export default Header;
