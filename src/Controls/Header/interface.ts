import { IRoute } from '../../routes';

interface IHeaderProps {}

interface IHeaderViewProps {
  routes: IRoute[];
  toggleSettingsPanelHandler: (state: boolean) => void;
}

export type { IHeaderProps, IHeaderViewProps };
