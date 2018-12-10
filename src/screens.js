import { Navigation } from "react-native-navigation";
import { Platform } from "react-native";
import RF from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/Ionicons";
import { SCREEN_BASE_NAME } from "./utility/constants";
const startTabs = () => {
  Promise.all([
    Icon.getImageSource(Platform.OS === "android" ? "md-beer" : "ios-beer", 30),
    Icon.getImageSource(Platform.OS === "android" ? "md-paper" : "ios-paper",30)
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
                      name: `${SCREEN_BASE_NAME}CategoriesScreen`
                    }
                  }
                ],
                options: {
                  topBar: {
                    labelStyles:{ fontSize: RF(4) },
                    title: {
                      text: 'Categorias'
                    }
                  },
                  bottomTab: {
                    text: 'Categorias',
                    icon: sources[0]
                  }
                }
              }
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: `${SCREEN_BASE_NAME}OrdersScreen`
                    }
                  }
                ],
                options: {
                  topBar: {
                    labelStyles:{ fontSize:RF(4) },
                    title: {
                      text: 'Orden'
                    }
                  },
                  bottomTab: {
                    text: "Ordenes",
                    icon: sources[1]
                  }
                }
              }
            }
          ]
        }
      }
    });
  });
};

export default startTabs;
