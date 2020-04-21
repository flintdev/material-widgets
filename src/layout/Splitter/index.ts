// src/layout/Splitter/index.ts

import ConfigYaml from './config.yaml';
import * as yaml from 'js-yaml';

export const configJson = yaml.safeLoad(ConfigYaml);

export { default } from './Splitter';
export {Props} from './Splitter';
