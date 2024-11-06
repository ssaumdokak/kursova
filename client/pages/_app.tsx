import { AppProps } from 'next/app'
import Head from 'next/head'

import 'react-toastify/dist/ReactToastify.css'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import '../styles/agGridTheme.scss'
import '../styles/globals.css'
import 'swiper/css'

import { Layout } from '@layouts/MainLayout'
import { useAuth } from '@hooks/useAuth'
import { ToastContainer } from 'react-toastify'

const MyApp = ({ Component, pageProps }: AppProps) => {
	useAuth()

	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<link rel='icon' href='/favicon.ico' />
				<meta httpEquiv='X-Frame-Options' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='theme-color' content='#000000' />
				<meta name='author' content='Averito' />
				<meta property='og:locale' content='ru_RU' />
				<meta property='og:type' content='article' />
				<meta property='og:url' content='https://averlist.ru' />
				<link rel='apple-touch-icon' href='/favicon.ico' />
				<link rel='manifest' href='/manifest.json' />
				<title>Averlist</title>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
			<ToastContainer
				autoClose={1000}
				position='bottom-right'
				toastStyle={{ backgroundColor: '#2b214f', color: '#e1dfdf' }}
			/>
		</>
	)
}

export default MyApp
