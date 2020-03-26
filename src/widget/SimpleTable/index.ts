// src/widget/SimpleTable/index.ts

import ConfigYaml from './config.yaml';
import * as yaml from 'js-yaml';

export const configJson = yaml.safeLoad(ConfigYaml);

export { default } from './SimpleTable';
export {Props} from './SimpleTable';


