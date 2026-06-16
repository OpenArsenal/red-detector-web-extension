import type { TechnologyDefinition } from '../../types';
import { colorSchemeTechnologyDefinition } from './color-scheme';
import { containerQueriesTechnologyDefinition } from './container-queries';
import { cssColorMixTechnologyDefinition } from './css-color-mix';
import { cssCustomPropertiesTechnologyDefinition } from './css-custom-properties';
import { cssGridLayoutTechnologyDefinition } from './css-grid-layout';
import { emotionTechnologyDefinition } from './emotion';
import { flexboxLayoutTechnologyDefinition } from './flexbox-layout';
import { fluidTypographyTechnologyDefinition } from './fluid-typography';
import { jssTechnologyDefinition } from './jss';
import { lessTechnologyDefinition } from './less';
import { postcssTechnologyDefinition } from './postcss';
import { sassTechnologyDefinition } from './sass';
import { stitchesTechnologyDefinition } from './stitches';
import { styledComponentsTechnologyDefinition } from './styled-components';
import { stylusTechnologyDefinition } from './stylus';
import { perceptualColorSpacesTechnologyDefinition } from './perceptual-color-spaces';
import { variableFontsTechnologyDefinition } from './variable-fonts';

export const stylingProcessorTechnologyDefinitions = [
	colorSchemeTechnologyDefinition,
	containerQueriesTechnologyDefinition,
	cssColorMixTechnologyDefinition,
	cssCustomPropertiesTechnologyDefinition,
	cssGridLayoutTechnologyDefinition,
	emotionTechnologyDefinition,
	flexboxLayoutTechnologyDefinition,
	fluidTypographyTechnologyDefinition,
	jssTechnologyDefinition,
	lessTechnologyDefinition,
	postcssTechnologyDefinition,
	sassTechnologyDefinition,
	stitchesTechnologyDefinition,
	styledComponentsTechnologyDefinition,
	stylusTechnologyDefinition,
	perceptualColorSpacesTechnologyDefinition,
	variableFontsTechnologyDefinition,
] as const satisfies readonly TechnologyDefinition[];
