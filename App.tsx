import React, { type FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { store } from './src/redux/store';
import { AddTodoScreen } from './src/screens/AddTodoScreen';
import { HomeScreen } from '@/screens/HomeScreen';

const Tab = createBottomTabNavigator();

const App: FC = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: '#007AFF',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        tabBarStyle: {
                            backgroundColor: '#fff',
                            borderTopWidth: 1,
                            borderTopColor: '#e2e2e2',
                        },
                        tabBarActiveTintColor: '#007AFF',
                        tabBarInactiveTintColor: 'gray',
                    }}
                >
                    <Tab.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{
                            title: 'Todo List',
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name="list" size={size} color={color} />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="AddTodo"
                        component={AddTodoScreen}
                        options={{
                            title: 'Add New',
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name="add-circle" size={size} color={color} />
                            ),
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
