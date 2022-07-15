import { makeAutoObservable } from 'mobx';
import { themeColors } from '../utils/const';

class ThemeStore {
  constructor() {
    makeAutoObservable(this);
  }

  settingsState = false;
  setSettingsState = (state: boolean) => {
    this.settingsState = state;
  };

  themeData = themeColors;
  setThemeData = (key: string, value: string) => {
    const currentData = this.themeData.find(({ name }) => name === key);
    if (currentData) {
      currentData.value = value;
      this.themeData = [...this.themeData];
    }
  };
  get themeDataColors() {
    const colors: { [key: string]: string } = {};
    this.themeData.forEach(({ name, value }) => {
      colors[name] = value;
    });
    return colors;
  }
  themeDataReset = () => {
    this.themeData = themeColors;
  };
}

const themeStore = new ThemeStore();

export { themeStore };
