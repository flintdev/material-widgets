import ConfigYaml from './config.yaml';
import * as yaml from 'js-yaml';

export const configJson = yaml.safeLoad(ConfigYaml);

export { default } from './Button';
export {Props} from './Button';
