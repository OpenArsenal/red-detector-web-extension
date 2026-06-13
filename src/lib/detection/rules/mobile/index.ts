import type { TechnologyDefinition } from '../../types';
import { foxappyTechnologyDefinition } from './foxappy';
import { framework7TechnologyDefinition } from './framework7';
import { jqtouchTechnologyDefinition } from './jqtouch';
import { onsenUiTechnologyDefinition } from './onsen-ui';
import { startiAppTechnologyDefinition } from './starti-app';
import { winkTechnologyDefinition } from './wink';

export const mobileTechnologyDefinitions = [
	foxappyTechnologyDefinition,
	framework7TechnologyDefinition,
	jqtouchTechnologyDefinition,
	onsenUiTechnologyDefinition,
	startiAppTechnologyDefinition,
	winkTechnologyDefinition,
] as const satisfies readonly TechnologyDefinition[];
