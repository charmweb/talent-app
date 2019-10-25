import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import WelcomePage from "./src/screens/WelcomePage";
import { createApp } from "react-native-stack";
// import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const navigator = createStackNavigator(
  {
    Welcome: WelcomePage
    // addMorePages: ResultsShowScreen
  },
  {
    initialRoutName: "Welcome",
    defaultNavigationOptions: {
      title: "Active Users"
    }
  }
);

export default createAppContainer(navigator);
