import { FC } from 'react';
import { Header } from './Controls/Header';
import { Layout } from './Controls/Layout';
import { BrowserRouter } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { themeStore } from './Stores/ThemeStore';

import './App.less';
import { SettingsPanel } from './Controls/SettingsPanel';

const App: FC = observer(() => {
  const { themeDataColors } = themeStore;
  return (
    <div style={themeDataColors as React.CSSProperties}>
      <BrowserRouter>
        <Header />
        <Layout />
      </BrowserRouter>
      <SettingsPanel />
    </div>
  );
});

export { App };
