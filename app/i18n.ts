import 'i18next'
import type common from '#public/locales/en/common.json'
import type firstFeature from '#public/locales/en/first-feature.json'

declare module 'i18next' {
	interface CustomTypeOptions {
		defaultNS: 'ns1'
		resources: {
			common: typeof common
			'first-feature': typeof firstFeature
		}
	}
}

export default {
	// This is the list of languages your application supports
	supportedLngs: ['en', 'es'],
	// This is the language you want to use in case
	// if the user language is not in the supportedLngs
	fallbackLng: 'en',
	// The default namespace to use if not specified
	defaultNS: 'common',
	// Suspense is important, it prevents the page from loading until we have the translations
	react: { useSuspense: true },
}
