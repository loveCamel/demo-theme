import { FC } from 'react';
import { ISettingsPanelViewProps } from './interface';

const SettingsPanelView: FC<ISettingsPanelViewProps> = ({
  toggleSettingsPanelHandler,
  resetHandler,
  data,
  changeHandler,
}) => {
  return (
    <div className='SettingsPanel'>
      <header className='SettingsPanel__header'>
        <div
          className='SettingsPanel__action reset'
          onClick={() => resetHandler()}
          title='Сбросить'
        ></div>
        <div
          className='SettingsPanel__action close'
          onClick={() => toggleSettingsPanelHandler(false)}
          title='Закрыть'
        ></div>
      </header>
      <section className='SettingsPanel__body'>
        {data.map(({ name, title, type, value, descriptions }) => {
          return (
            <div className='SettingsPanel__item' key={name}>
              <input
                type='color'
                className='SettingsPanel__input'
                value={value}
                onChange={(e) => changeHandler(e, name)}
              />
              <div
                className='SettingsPanel__preview'
                style={{ backgroundColor: value }}
              ></div>
              <div className='SettingsPanel__text-block'>
                <p className='SettingsPanel__title'>{title}</p>
                <p className='SettingsPanel__desc'>{descriptions}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export { SettingsPanelView };
