import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {COLORS, FONTS, icons, images, SIZES} from './constants';
import {Image, TouchableOpacity} from 'react-native';
import {Home} from './screens';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

function App() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'SHOE SELECTOR',
            headerTintColor: COLORS.lightGray,
            headerTitleStyle: {
              ...FONTS.navTitle,
            },
            headerLeft: ({onPress}) => {
              return (
                <TouchableOpacity
                  style={{
                    marginLeft: 6,
                  }}
                  onPress={onPress}>
                  <Image
                    source={icons.menu}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      zIndex: 10,
                    }}
                  />
                </TouchableOpacity>
              );
            },
            headerRight: () => {
              return (
                <TouchableOpacity
                  style={{
                    marginLeft: SIZES.padding,
                  }}>
                  <Image
                    source={icons.search}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                    }}
                  />
                </TouchableOpacity>
              );
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
