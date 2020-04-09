// src/widget/Tabs/index.ts
// @ts-ignore
import ConfigYaml from "./config.yaml";
import * as yaml from 'js-yaml';

export const configJson = yaml.safeLoad(ConfigYaml);

export { default } from './Tabs';
export {Props} from './Tabs';
