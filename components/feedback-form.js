import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, Alert, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { db } from '../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';

const FeedbackForm = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [itSupport, setItSupport] = useState('');
    const [gender, setGender] = useState('');
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' }
    ]);

    const handleSubmit = async () => {
        try {
            await addDoc(collection(db, 'feedback'), {
                name,
                email,
                itSupport,
                gender,
            });
            Alert.alert('Feedback Submitted');
            navigation.navigate('Home');
        } catch (error) {
            Alert.alert('Error submitting feedback', error.message);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setName(text)}
                value={name}
                placeholder="Enter your Name"
                keyboardType="default"
            />

            <TextInput
                style={styles.input}
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder="Enter your Email"
                keyboardType="email-address"
            />

            <View style={styles.dropdownContainer}>
                <DropDownPicker
                    open={open}
                    value={gender}
                    items={items}
                    setOpen={setOpen}
                    setValue={setGender}
                    setItems={setItems}
                    placeholder="Select Gender"
                    style={styles.dropdown}
                />
            </View>

            <TextInput
                onChangeText={(text) => setItSupport(text)}
                value={itSupport}
                placeholder="Enter your problem"
                keyboardType="default"
                multiline
                numberOfLines={12}
                style={styles.textArea}
            />

            <Button
                title="Submit Feedback"
                color="blue"
                onPress={handleSubmit}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 2,
        padding: 10,
        width: 250,
        borderColor: 'blue',
        borderRadius: 30,
    },
    dropdownContainer: {
        marginVertical: 12,
        width: 250,
    },
    dropdown: {
        borderColor: 'blue',
        borderRadius: 30,
    },
    textArea: {
        height: 200,
        textAlignVertical: 'top',
        margin: 10,
        padding: 20,
        borderWidth: 2,
        borderColor: 'blue',
        borderRadius: 10,
        width: 250,
    },
});

export default FeedbackForm;
