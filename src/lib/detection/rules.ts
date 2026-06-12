import type { TechnologyDefinition } from './types';
import { generatedTechnologyDefinitions, technologyDefinitionsByCategory } from './rules/index';

export const SOURCE_LIMITS = {
	htmlChars: 200_000,
	scriptSrc: 300,
	stylesheetHref: 300,
	resourceUrls: 500,
	requestUrls: 500,
	linkTags: 200,
	storageKeys: 200,
	scriptContentChars: 40_000,
	stylesheetContentChars: 40_000,
	metaValueChars: 500,
	metaValuesPerKey: 5,
	cookieNames: 200,
	evidenceValueChars: 160,
} as const;

export const technologyDefinitions = generatedTechnologyDefinitions satisfies TechnologyDefinition[];
export const technologiesByCategory = technologyDefinitionsByCategory;
