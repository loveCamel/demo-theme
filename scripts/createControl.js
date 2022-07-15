const path = require('path');
const fs = require('fs');

/**
 * EXAMPLE:
 * node scripts/createControl.js InputLine
 */

const controlName = process.argv[2];

if (!controlName) throw 'Ошибка! Не задано имя контролу';

const controllerDir = path.join(__dirname, '../src/Controls');

/**
 * Метод возвращает имя файла в зависимости от типа
 * @param {String} initialControlName Изначальное имя контрола
 * @param {'controller' | 'view' | 'less' | 'interface' | 'index'} type
 */
const _getFileName = (initialControlName, type) => {
  let result = `_${initialControlName}`;
  switch (type) {
    case 'interface':
      result = 'interface';
      break;
    case 'index':
      result = 'index';
      break;
    case 'view':
      result = `_${initialControlName}View`;
      break;
  }
  return result;
};

/**
 * Метод возвращает шаблон для файла
 * @param {'controller' | 'view' | 'less' | 'interface' | 'index'} type
 * @returns
 */
const _getTemplate = (type) => {
  const map = {
    index: `export { default as ${controlName} } from './_${controlName}';`,
    controller: `import { FC } from 'react';
import { ${controlName}View } from './_${controlName}View';
import type { I${controlName}Props } from './interface';

import './_${controlName}.less';

const ${controlName}: FC<I${controlName}Props> = () => {
  return <${controlName}View />;
};

export default ${controlName};`,
    view: `import { FC } from 'react';
import { I${controlName}ViewProps } from './interface';

const ${controlName}View: FC<I${controlName}ViewProps> = () => {
  return <></>;
};

export { ${controlName}View };`,
    less: ``,
    interface: `interface I${controlName}Props {}

interface I${controlName}ViewProps {}

export type { I${controlName}Props, I${controlName}ViewProps };`,
  };
  return map[type];
};
/**
 * Метод создаёт папки
 */
const _createDir = async () => {
  try {
    const _path = path.join(controllerDir, controlName);
    await fs.promises.mkdir(_path, { recursive: true });
  } catch (e) {
    throw new Error(e);
  }
};

/**
 * Метод создаёт файлы
 * @param {Object} options
 * @param {String} options.fileExtension Расширение файла
 * @param {'controller' | 'view' | 'less' | 'interface' | 'index'} options.templateType Тип шаблона
 */
const _creteFile = async (options) => {
  const { fileExtension, templateType } = options;
  const template = _getTemplate(templateType);
  const _controlName = _getFileName(controlName, templateType);
  fs.writeFile(
    path.join(controllerDir, controlName, `${_controlName}.${fileExtension}`),
    template,
    (err) => {
      if (err) throw new Error(err.message);
    }
  );
};

const createController = async () => {
  try {
    await _createDir();
    await _creteFile({
      templateType: 'controller',
      fileExtension: 'tsx',
    });
    await _creteFile({
      templateType: 'view',
      fileExtension: 'tsx',
    });
    await _creteFile({
      templateType: 'less',
      fileExtension: 'less',
    });
    await _creteFile({
      templateType: 'interface',
      fileExtension: 'ts',
    });
    await _creteFile({
      templateType: 'index',
      fileExtension: 'tsx',
    });
    console.log('\x1b[32m', `Контрол ${controlName} успешно создан`, '\x1b[0m');
  } catch (e) {
    console.error('\x1b[41m', 'Ошибка! Контрол не создан!\n\n', e, '\x1b[0m');
  }
};

createController();
