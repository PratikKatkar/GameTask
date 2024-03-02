// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {Provider, connect} from 'react-redux';
// import AuthStack from './AuthStack';
// import HomeStack from './HomeStack';

// const Stack = createNativeStackNavigator();
// const Stack2 = createNativeStackNavigator();

// const RootStackNavigatorContent = ({isLoggedIn}) => {
//   return (
//     <NavigationContainer>
//       {/* <Stack.Navigator>
//         <Stack.Screen name="HomeStack" component={HomeStack} />
//       </Stack.Navigator> */}
//       {isLoggedIn ? (
//         <Stack.Navigator>
//           <Stack.Screen name="HomeStack" component={HomeStack} />
//         </Stack.Navigator>
//       ) : (
//         <Stack2.Navigator>
//           <Stack2.Screen name="AuthStack" component={AuthStack} />
//         </Stack2.Navigator>
//       )}
//     </NavigationContainer>
//   );
// };

// const mapStateToProps = state => ({
//   isLoggedIn: state.auth.isLoggedIn,
// });

// export default connect(mapStateToProps)(RootStackNavigatorContent);
import {View, Text} from 'react-native';
import React from 'react';
import AuthStack from './AuthStack';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeStack from './HomeStack';
import {connect} from 'react-redux';

const Stack = createNativeStackNavigator();

const RootStackNavigatorContent = ({isLoggedIn}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'HomeStack'}>
        <Stack.Screen name="HomeStack" component={HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});
export default connect(mapStateToProps)(RootStackNavigatorContent);
