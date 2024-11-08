import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDeleteTodo } from '@/hooks/useDeleteTodo';
import { useEditTodo } from '@/hooks/useEditTodo';
import type { TodoType } from '../interface/Todo.interface';

export const Todo: React.FC<TodoType> = (props) => {
    const { title, description, completed } = props;
    const { handleDeleteTodo } = useDeleteTodo(props);
    const {
        isEditing,
        editedTitle,
        editedDescription,
        editedCompleted,
        handleSave,
        handleCancel,
        setIsEditing,
        setEditedTitle,
        setEditedDescription,
        setEditedCompleted,
    } = useEditTodo(props);

    return (
        <View style={styles.todo}>
            <View style={styles.content}>
                {isEditing ? (
                    <View style={styles.editContainer}>
                        <TextInput
                            style={styles.input}
                            value={editedTitle}
                            onChangeText={setEditedTitle}
                            placeholder="Title"
                        />
                        <TextInput
                            style={[styles.input, styles.textArea]}
                            value={editedDescription}
                            onChangeText={setEditedDescription}
                            placeholder="Description"
                            multiline
                            numberOfLines={3}
                        />
                        <View style={styles.switchContainer}>
                            <Text style={styles.switchLabel}>
                                {editedCompleted ? 'Completed' : 'In Progress'}
                            </Text>
                            <Switch
                                value={editedCompleted}
                                onValueChange={setEditedCompleted}
                                trackColor={{ false: '#767577', true: '#81b0ff' }}
                                thumbColor={editedCompleted ? '#007AFF' : '#f4f3f4'}
                            />
                        </View>
                    </View>
                ) : (
                    <View style={styles.info}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.description}>{description}</Text>
                        <Text
                            style={[
                                styles.status,
                                completed ? styles.statusCompleted : styles.statusInProgress,
                            ]}
                        >
                            {completed ? 'Completed' : 'In Progress'}
                        </Text>
                    </View>
                )}
            </View>

            <View style={styles.actions}>
                {isEditing ? (
                    <View style={styles.editActions}>
                        <TouchableOpacity
                            style={[styles.button, styles.saveButton]}
                            onPress={handleSave}
                        >
                            <Ionicons name="save-outline" size={20} color="white" />
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, styles.cancelButton]}
                            onPress={handleCancel}
                        >
                            <Ionicons name="close-outline" size={20} color="black" />
                            <Text style={styles.cancelButtonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View style={styles.viewActions}>
                        <TouchableOpacity
                            style={[styles.button, styles.editButton]}
                            onPress={() => setIsEditing(true)}
                        >
                            <Ionicons name="create-outline" size={20} color="#007AFF" />
                            <Text style={styles.editButtonText}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, styles.deleteButton]}
                            onPress={handleDeleteTodo}
                        >
                            <Ionicons name="trash-outline" size={20} color="red" />
                            <Text style={styles.deleteButtonText}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    actions: {
        borderTopColor: '#eee',
        borderTopWidth: 1,
        marginTop: 12,
        paddingTop: 12,
    },
    button: {
        alignItems: 'center',
        borderRadius: 6,
        flexDirection: 'row',
        gap: 4,
        padding: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    cancelButton: {
        backgroundColor: '#f0f0f0',
    },
    cancelButtonText: {
        color: 'black',
        fontSize: 16,
    },
    content: {
        marginBottom: 12,
    },
    deleteButton: {
        backgroundColor: '#fff0f0',
    },
    deleteButtonText: {
        color: 'red',
        fontSize: 16,
    },
    description: {
        color: '#666',
        fontSize: 16,
    },
    editActions: {
        flexDirection: 'row',
        gap: 8,
        justifyContent: 'flex-end',
    },
    editButton: {
        backgroundColor: '#f0f0f0',
    },
    editButtonText: {
        color: '#007AFF',
        fontSize: 16,
    },
    editContainer: {
        gap: 12,
    },
    info: {
        gap: 8,
    },
    input: {
        borderColor: '#ddd',
        borderRadius: 8,
        borderWidth: 1,
        fontSize: 16,
        padding: 12,
    },
    saveButton: {
        backgroundColor: '#007AFF',
    },
    status: {
        alignSelf: 'flex-start',
        borderRadius: 4,
        fontSize: 14,
        fontWeight: '500',
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    statusCompleted: {
        backgroundColor: '#e6f4ea',
        color: '#137333',
    },
    statusInProgress: {
        backgroundColor: '#fef7e0',
        color: '#b93e07',
    },
    switchContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    switchLabel: {
        color: '#666',
        fontSize: 16,
    },
    textArea: {
        height: 80,
        textAlignVertical: 'top',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    todo: {
        backgroundColor: 'white',
        borderRadius: 8,
        elevation: 5,
        marginBottom: 12,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    viewActions: {
        flexDirection: 'row',
        gap: 8,
        justifyContent: 'flex-end',
    },
});
