// src/widget/NestedPanel/index.ts

// @ts-ignore
import ConfigYaml from './config.yaml';
import * as yaml from 'js-yaml';

export const configJson = yaml.safeLoad(ConfigYaml);

export { default } from './NestedPanel';
export {Props} from './NestedPanel';
