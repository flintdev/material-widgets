// src/widget/TableContainer/index.ts

import ConfigYaml from './config.yaml';
import * as yaml from 'js-yaml';

export const configJson = yaml.safeLoad(ConfigYaml);

export { default } from './TableContainer';
export {Props} from './TableContainer';


