import { type MetaFunction } from '@remix-run/node'
import { useTranslation } from 'react-i18next'

export const meta: MetaFunction = () => [{ title: 'Epic Notes' }]

export default function Index() {
	const { t } = useTranslation()
	return (
		<main className="relative min-h-screen sm:flex sm:items-center sm:justify-center">
			<div className="relative sm:pb-16 sm:pt-8">
				<div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
					<div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
						<div className="absolute inset-0">
							<div className="absolute inset-0 bg-[color:rgba(30,23,38,0.5)] mix-blend-multiply" />
						</div>
						<div className="lg:pt-18 relative px-4 pb-8 pt-8 sm:px-6 sm:pb-14 sm:pt-16 lg:px-8 lg:pb-20">
							<h1 className="text-center text-mega font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
								<span>{t('title')}</span>
							</h1>
							<h2 className="text-center text-2xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
								<span>{t('subtitle')}</span>
							</h2>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
