import type { TechnologyDefinition } from '../../types';
import { emotionTechnologyDefinition } from './emotion';
import { lessTechnologyDefinition } from './less';
import { sassTechnologyDefinition } from './sass';
import { stitchesTechnologyDefinition } from './stitches';
import { styledComponentsTechnologyDefinition } from './styled-components';
import { jssTechnologyDefinition } from './jss';
import { postcssTechnologyDefinition } from './postcss';
import { stylusTechnologyDefinition } from './stylus';

export const stylingProcessorTechnologyDefinitions = [
	emotionTechnologyDefinition,
	lessTechnologyDefinition,
	sassTechnologyDefinition,
	stitchesTechnologyDefinition,
	styledComponentsTechnologyDefinition,
	jssTechnologyDefinition,
	postcssTechnologyDefinition,
	stylusTechnologyDefinition,
] as const satisfies readonly TechnologyDefinition[];
