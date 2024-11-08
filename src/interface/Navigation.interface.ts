import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
    Home: undefined;
    AddTodo: undefined;
    EditTodo: {
        todoId: string;
        title: string;
        description: string;
        completed: boolean;
    };
};

export type ScreenProps<T extends keyof RootStackParamList> = {
    navigation: NativeStackNavigationProp<RootStackParamList, T>;
    route: RouteProp<RootStackParamList, T>;
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
export type AddTodoScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AddTodo'>;
