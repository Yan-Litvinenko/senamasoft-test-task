import React from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { useTodoList } from '@/hooks/useTodoList';
import { Todo } from '@/components/Todo';
import { COLORS } from '@/constants/colors';

export const HomeScreen: React.FC = () => {
    const { todos, isLoad, error } = useTodoList();

    console.log(todos);

    if (error) {
        return (
            <View style={styles.centerContainer}>
                <Text style={styles.errorText}>Error loading todo list</Text>
            </View>
        );
    }

    if (isLoad) {
        return (
            <View style={styles.centerContainer}>
                <ActivityIndicator size="large" color="#007AFF" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todo List</Text>
            <FlatList
                data={todos}
                keyExtractor={(item) => item._id.toString()}
                renderItem={({ item }) => <Todo {...item} />}
                contentContainerStyle={styles.listContent}
                ListEmptyComponent={<Text style={styles.emptyText}>No todos yet</Text>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    centerContainer: {
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        backgroundColor: COLORS.background,
        flex: 1,
        padding: 16,
    },
    emptyText: {
        color: COLORS.text.secondary,
        marginTop: 20,
        textAlign: 'center',
    },
    errorText: {
        color: COLORS.error,
        fontSize: 16,
    },
    listContent: {
        flexGrow: 1,
    },
    text: {
        color: COLORS.text.secondary,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});
