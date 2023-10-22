import { useTranslation } from 'react-i18next'

export default function AboutRoute() {
	const { t } = useTranslation('first-feature')

	return (
		<div>
			<h1>About page</h1>
			<p>{t('test')}</p>
		</div>
	)
}
