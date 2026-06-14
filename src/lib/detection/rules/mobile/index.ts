import type { TechnologyDefinition } from '../../types';
import { appleSmartAppBannerTechnologyDefinition } from './apple-smart-app-banner';
import { foxappyTechnologyDefinition } from './foxappy';
import { framework7TechnologyDefinition } from './framework7';
import { jqtouchTechnologyDefinition } from './jqtouch';
import { onsenUiTechnologyDefinition } from './onsen-ui';
import { pictureElementTechnologyDefinition } from './picture-element';
import { responsiveImagesSrcsetTechnologyDefinition } from './responsive-images-srcset';
import { startiAppTechnologyDefinition } from './starti-app';
import { themeColorTechnologyDefinition } from './theme-color';
import { twitterAppCardTechnologyDefinition } from './twitter-app-card';
import { viewportMetaTechnologyDefinition } from './viewport-meta';
import { webAppManifestTechnologyDefinition } from './web-app-manifest';
import { winkTechnologyDefinition } from './wink';

export const mobileTechnologyDefinitions = [
	appleSmartAppBannerTechnologyDefinition,
	foxappyTechnologyDefinition,
	framework7TechnologyDefinition,
	jqtouchTechnologyDefinition,
	onsenUiTechnologyDefinition,
	pictureElementTechnologyDefinition,
	responsiveImagesSrcsetTechnologyDefinition,
	startiAppTechnologyDefinition,
	themeColorTechnologyDefinition,
	twitterAppCardTechnologyDefinition,
	viewportMetaTechnologyDefinition,
	webAppManifestTechnologyDefinition,
	winkTechnologyDefinition,
] as const satisfies readonly TechnologyDefinition[];
