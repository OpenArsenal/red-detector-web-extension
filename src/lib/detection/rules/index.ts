import type { CategoryId, TechnologyDefinition } from '../types';
import { frameworkTechnologyDefinitions } from './framework';
import { uiLibraryTechnologyDefinitions } from './ui-library';
import { routerTechnologyDefinitions } from './router';
import { bundlerTechnologyDefinitions } from './bundler';
import { transpilerTechnologyDefinitions } from './transpiler';
import { stylingLibraryTechnologyDefinitions } from './styling-library';
import { stylingProcessorTechnologyDefinitions } from './styling-processor';
import { stateManagementTechnologyDefinitions } from './state-management';
import { httpClientTechnologyDefinitions } from './http-client';
import { apiPatternTechnologyDefinitions } from './api-pattern';
import { analyticsTechnologyDefinitions } from './analytics';
import { monitoringErrorTrackingTechnologyDefinitions } from './monitoring-error-tracking';
import { datesTechnologyDefinitions } from './dates';
import { translationsTechnologyDefinitions } from './translations';
import { animationTechnologyDefinitions } from './animation';
import { formSchemaLibraryTechnologyDefinitions } from './form-schema-library';
import { tableLibraryTechnologyDefinitions } from './table-library';
import { componentLibraryTechnologyDefinitions } from './component-library';
import { platformCmsBuilderTechnologyDefinitions } from './platform-cms-builder';
import { advertisingPaidMediaTechnologyDefinitions } from './advertising-paid-media';
import { experimentationOptimizationTechnologyDefinitions } from './experimentation-optimization';
import { accessibilityTechnologyDefinitions } from './accessibility';
import { businessToolsTechnologyDefinitions } from './business-tools';
import { bookingSchedulingTechnologyDefinitions } from './booking-scheduling';
import { authenticationIdentityTechnologyDefinitions } from './authentication-identity';
import { privacyComplianceTechnologyDefinitions } from './privacy-compliance';
import { securityTechnologyDefinitions } from './security';
import { commerceOperationsTechnologyDefinitions } from './commerce-operations';
import { ecommerceExtensionsTechnologyDefinitions } from './ecommerce-extensions';
import { wordpressEcosystemTechnologyDefinitions } from './wordpress-ecosystem';
import { contentPublishingTechnologyDefinitions } from './content-publishing';
import { communityUgcTechnologyDefinitions } from './community-ugc';
import { searchTechnologyDefinitions } from './search';
import { richTextEditorsTechnologyDefinitions } from './rich-text-editors';
import { emailMessagingTechnologyDefinitions } from './email-messaging';
import { marketingAutomationTechnologyDefinitions } from './marketing-automation';
import { tagManagementTechnologyDefinitions } from './tag-management';
import { surveysFeedbackTechnologyDefinitions } from './surveys-feedback';
import { mapsLocationTechnologyDefinitions } from './maps-location';
import { mediaVideoTechnologyDefinitions } from './media-video';
import { infrastructureHostingTechnologyDefinitions } from './infrastructure-hosting';
import { serverRuntimeInfraTechnologyDefinitions } from './server-runtime-infra';
import { networkHardwareTechnologyDefinitions } from './network-hardware';
import { mobileTechnologyDefinitions } from './mobile';
import { developerToolingTechnologyDefinitions } from './developer-tooling';
import { graphicsVisualizationTechnologyDefinitions } from './graphics-visualization';
import { widgetsMiscTechnologyDefinitions } from './widgets-misc';
import { domainParkingTechnologyDefinitions } from './domain-parking';
import { fundraisingDonationsTechnologyDefinitions } from './fundraising-donations';

export const technologyDefinitionsByCategory = {
	"framework": frameworkTechnologyDefinitions,
	"ui-library": uiLibraryTechnologyDefinitions,
	"router": routerTechnologyDefinitions,
	"bundler": bundlerTechnologyDefinitions,
	"transpiler": transpilerTechnologyDefinitions,
	"styling-library": stylingLibraryTechnologyDefinitions,
	"styling-processor": stylingProcessorTechnologyDefinitions,
	"state-management": stateManagementTechnologyDefinitions,
	"http-client": httpClientTechnologyDefinitions,
	"api-pattern": apiPatternTechnologyDefinitions,
	"analytics": analyticsTechnologyDefinitions,
	"monitoring-error-tracking": monitoringErrorTrackingTechnologyDefinitions,
	"dates": datesTechnologyDefinitions,
	"translations": translationsTechnologyDefinitions,
	"animation": animationTechnologyDefinitions,
	"form-schema-library": formSchemaLibraryTechnologyDefinitions,
	"table-library": tableLibraryTechnologyDefinitions,
	"component-library": componentLibraryTechnologyDefinitions,
	"platform-cms-builder": platformCmsBuilderTechnologyDefinitions,
	"advertising-paid-media": advertisingPaidMediaTechnologyDefinitions,
	"experimentation-optimization": experimentationOptimizationTechnologyDefinitions,
	"accessibility": accessibilityTechnologyDefinitions,
	"business-tools": businessToolsTechnologyDefinitions,
	"booking-scheduling": bookingSchedulingTechnologyDefinitions,
	"authentication-identity": authenticationIdentityTechnologyDefinitions,
	"privacy-compliance": privacyComplianceTechnologyDefinitions,
	"security": securityTechnologyDefinitions,
	"commerce-operations": commerceOperationsTechnologyDefinitions,
	"ecommerce-extensions": ecommerceExtensionsTechnologyDefinitions,
	"wordpress-ecosystem": wordpressEcosystemTechnologyDefinitions,
	"content-publishing": contentPublishingTechnologyDefinitions,
	"community-ugc": communityUgcTechnologyDefinitions,
	"search": searchTechnologyDefinitions,
	"rich-text-editors": richTextEditorsTechnologyDefinitions,
	"email-messaging": emailMessagingTechnologyDefinitions,
	"marketing-automation": marketingAutomationTechnologyDefinitions,
	"tag-management": tagManagementTechnologyDefinitions,
	"surveys-feedback": surveysFeedbackTechnologyDefinitions,
	"maps-location": mapsLocationTechnologyDefinitions,
	"media-video": mediaVideoTechnologyDefinitions,
	"infrastructure-hosting": infrastructureHostingTechnologyDefinitions,
	"server-runtime-infra": serverRuntimeInfraTechnologyDefinitions,
	"network-hardware": networkHardwareTechnologyDefinitions,
	"mobile": mobileTechnologyDefinitions,
	"developer-tooling": developerToolingTechnologyDefinitions,
	"graphics-visualization": graphicsVisualizationTechnologyDefinitions,
	"widgets-misc": widgetsMiscTechnologyDefinitions,
	"domain-parking": domainParkingTechnologyDefinitions,
	"fundraising-donations": fundraisingDonationsTechnologyDefinitions,
} as const satisfies Partial<Record<CategoryId, readonly TechnologyDefinition[]>>;

export const generatedTechnologyDefinitions = Object.values(technologyDefinitionsByCategory).flat() satisfies readonly TechnologyDefinition[];
