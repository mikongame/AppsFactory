import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

const _layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            title: 'Home',
          }}
        />
        <Drawer.Screen
          name="Home2" // This is the name of the page and must match the url from root
          options={{
            title: 'Overview',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  )  
}

export default _layout;