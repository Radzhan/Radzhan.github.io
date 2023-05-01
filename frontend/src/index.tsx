import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux';
import {persistor, store} from './app/store';
import {PersistGate} from 'redux-persist/integration/react';
import {GoogleOAuthProvider} from '@react-oauth/google';
import {GOOGLE_CLIENT_ID} from './constants';
import {BrowserRouter} from 'react-router-dom';
import theme from './theme';
import {addInterceptors} from './axiosApi';
import {ThemeProvider} from '@mui/material';

addInterceptors(store);

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<BrowserRouter>
					<ThemeProvider theme={theme}>
						<App/>
					</ThemeProvider>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</GoogleOAuthProvider>
);
