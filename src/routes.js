import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Pages
import FileList from './pages/FileList/FileList';
import Home from './pages/Home/Home';

const Tab = createBottomTabNavigator();

export const Routes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons size={size} color="#0C55A5" name="cloud-upload" />;
            }

            return <Ionicons size={size} color="#0C55A5" name="cloud-upload-outline" />;
          },
        }}
      />

      <Tab.Screen
        name="file list"
        component={FileList}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons size={size} color="#0C55A5" name="file-tray-full" />;
            }

            return <Ionicons size={size} color="#0C55A5" name="file-tray-full-outline" />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
