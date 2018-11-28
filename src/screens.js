import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const startTabs = () => {
    Promise.all([
        Icon.getImageSource(Platform.OS === 'android' ? 'md-map' : 'ios-map', 30),
        Icon.getImageSource(Platform.OS === 'android' ? 'md-share' : 'ios-share-alt', 30),
        Icon.getImageSource(Platform.OS === 'android' ? 'md-beer' : 'ios-menu', 30)
    ]).then(sources => {
            Navigation.setRoot({
                root: {
                    bottomTabs: {
                        children: [
                            
                            {
                                stack: {
                                    children: [
                                        {
                                            component: {
                                                name: 'OrderOnlineScreen.SecondScreen'
                                            }
                                        }
                                    ],
                                    options: {
                                        bottomTab: {
                                            text: 'Pantalla A',
                                            icon: sources[2]
                                        }
                                    }
                                }
                            },
                            {
                                stack: {
                                    children: [
                                        {
                                            component: {
                                                name: 'OrderOnlineScreen.ThirdScreen'
                                            }
                                        }
                                    ],
                                    options: {
                                        bottomTab: {
                                            text: 'Pantalla A',
                                            icon: sources[2]
                                        }
                                    }
                                }
                            }
                        ]
                    }
                }
            });
        });

}

export default startTabs;
