/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AuthContext, {AuthProvider} from "./context/AuthContext";
import notifee from '@notifee/react-native';

const Root = props => (
    <AuthProvider>
        <App/>
    </AuthProvider>
)

AppRegistry.registerComponent(appName, () => Root);