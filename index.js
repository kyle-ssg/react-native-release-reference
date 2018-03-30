import './globals';
import './routes';

import {Navigation} from 'react-native-navigation';

//Start at login screen
Navigation.startSingleScreenApp({
        screen: {
            title: 'Login',
            // titleImage: require('./images/brand-white.png'),
            navigatorStyle: {
                screenBackgroundColor: '#fff',
            },
            screen: '/', // unique ID registered with Navigation.registerScreen
        }
    }
);