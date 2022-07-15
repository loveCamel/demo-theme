import type { IStyle } from '../../utils/const';

interface ISettingsPanelProps {}

interface ISettingsPanelViewProps {
  changeHandler: Function;
  resetHandler: Function;
  toggleSettingsPanelHandler: (state: boolean) => void;
  data: IStyle[];
}

export type { ISettingsPanelProps, ISettingsPanelViewProps };
