import { render } from 'solid-js/web';

import { configureRedDetectorLogging } from '@/lib/diagnostics/logging';

import './style.css';
import App from './App';

configureRedDetectorLogging('popup');

render(() => <App />, document.getElementById('root')!);
