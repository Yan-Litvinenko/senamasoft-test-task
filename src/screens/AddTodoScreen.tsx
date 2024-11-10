import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    ActivityIndicator,
    ViewStyle,
    TextStyle,
} from 'react-native';
import { useAddTodo } from '@/hooks/useAddTodo';
import type { AddTodoScreenNavigationProp } from '@/interface/Navigation.interface';
import { COLORS } from '@/constants/colors';

type AddTodoScreenProps = {
    navigation: AddTodoScreenNavigationProp;
};

export const AddTodoScreen: React.FC<AddTodoScreenProps> = () => {
    const { title, setTitle, description, setDescription, handleSubmit, isLoading, errors } =
        useAddTodo();

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <View style={styles.inner}>
                <Text style={styles.title}>Add Todo</Text>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Title</Text>
                    <TextInput
                        style={[styles.input, errors.title ? styles.inputError : null]}
                        placeholder="Enter todo title"
                        value={title}
                        onChangeText={setTitle}
                    />
                    {errors.title && <Text style={styles.errorText}>{errors.title}</Text>}
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Description</Text>
                    <TextInput
                        style={[
                            styles.input,
                            styles.textArea,
                            errors.description ? styles.inputError : null,
                        ]}
                        placeholder="Enter todo description"
                        value={description}
                        onChangeText={setDescription}
                        multiline
                        numberOfLines={4}
                    />
                    {errors.description && (
                        <Text style={styles.errorText}>{errors.description}</Text>
                    )}
                </View>

                <TouchableOpacity
                    style={[styles.button, isLoading && styles.buttonDisabled]}
                    onPress={handleSubmit}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <ActivityIndicator color="white" />
                    ) : (
                        <Text style={styles.buttonText}>Add Todo</Text>
                    )}
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

interface Styles {
    container: ViewStyle;
    inner: ViewStyle;
    title: TextStyle;
    formGroup: ViewStyle;
    label: TextStyle;
    input: TextStyle & ViewStyle;
    inputError: ViewStyle;
    textArea: ViewStyle & {
        textAlignVertical?: 'top' | 'center' | 'bottom';
    };
    errorText: TextStyle;
    button: ViewStyle;
    buttonDisabled: ViewStyle;
    buttonText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
    button: {
        backgroundColor: COLORS.primary,
        borderRadius: 8,
        marginTop: 20,
        padding: 15,
    },
    buttonDisabled: {
        opacity: 0.7,
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    container: {
        backgroundColor: COLORS.background,
        flex: 1,
    },
    errorText: {
        color: COLORS.error,
        fontSize: 12,
        marginTop: 5,
    },
    formGroup: {
        marginBottom: 15,
    },
    inner: {
        flex: 1,
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: COLORS.border.default,
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
    } as TextStyle & ViewStyle,
    inputError: {
        borderColor: COLORS.border.error,
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 5,
    },
    textArea: {
        height: 100,
        ...(Platform.OS === 'android' && {
            textAlignVertical: 'top',
        }),
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
});
