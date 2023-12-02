import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

// Pages
import Home from './pages/Home'


const Tab = createBottomTabNavigator()

export const Routes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='home'
        component={Home}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons
                size={size} 
                color={color}
                name='cloud-upload'
              />
            }

            return <Ionicons
              size={size} 
              color={color}
              name='cloud-upload-outline'
            />
          }
        }}
      />
    </Tab.Navigator>
  )
}