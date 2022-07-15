import { FC, ChangeEvent } from 'react';
import { SettingsPanelView } from './_SettingsPanelView';
import { observer } from 'mobx-react-lite';
import { themeStore } from '../../Stores/ThemeStore';
import type { ISettingsPanelProps } from './interface';

import './_SettingsPanel.less';

const { setSettingsState, setThemeData, themeDataReset } = themeStore;

const SettingsPanel: FC<ISettingsPanelProps> = observer(() => {
  const { themeData, settingsState } = themeStore;
  if (!settingsState) return null;
  return (
    <SettingsPanelView
      data={themeData}
      toggleSettingsPanelHandler={setSettingsState}
      changeHandler={changeHandler}
      resetHandler={resetHandler}
    />
  );
});

const changeHandler = (e: ChangeEvent<HTMLInputElement>, name: string) => {
  const value = e.target.value;
  setThemeData(name, value);
};

const resetHandler = () => {
  themeDataReset();
};

export default SettingsPanel;
