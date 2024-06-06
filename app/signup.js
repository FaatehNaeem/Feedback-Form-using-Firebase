import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, Alert, View,Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
// import { db } from '../firebaseConfig';
// import { addDoc, collection } from 'firebase/firestore';
import { Link, router } from 'expo-router';

const SignUp = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // const handleSubmit = async () => {
    //     try {
    //         await addDoc(collection(db, 'feedback'), {
    //             name,
    //             email,
    //             itSupport,
    //             gender,
    //         });
    //         Alert.alert('Feedback Submitted');
    //         navigation.navigate('Home');
    //     } catch (error) {
    //         Alert.alert('Error submitting feedback', error.message);
    //     }
    // };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ fontSize: 32, fontWeight:'bold',color:'blue',margin:12}}>SignUp</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setName(text)}
                value={name}
                placeholder="Enter your Name"
                keyboardType="email-address"
            />

            <TextInput
                style={styles.input}
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder="Enter your Email"
                keyboardType="email-address"
            />

            <TextInput
                style={styles.input}
                onChangeText={(text) => setPassword(text)}
                value={password}
                placeholder="Enter your Password"
                keyboardType="visible-password"
            />

            <TextInput
                style={styles.input}
                onChangeText={(text) => setConfirmPassword(text)}
                value={confirmPassword}
                placeholder="Confirm your Password"
                keyboardType="visible-password"
            />

            <Button
                title="SignUp"
                color="blue"
                // onPress={handleSubmit}
            />
            <View style={{marginTop:12,flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text>Already have an account? </Text>
                <Link href="/login" style={{ color: "blue", fontSize: 16 }}>Login</Link>
            </View>
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
    // dropdownContainer: {
    //     marginVertical: 12,
    //     width: 250,
    // },
    // dropdown: {
    //     borderColor: 'blue',
    //     borderRadius: 30,
    // },
    // textArea: {
    //     height: 200,
    //     textAlignVertical: 'top',
    //     margin: 10,
    //     padding: 20,
    //     borderWidth: 2,
    //     borderColor: 'blue',
    //     borderRadius: 10,
    //     width: 250,
    // },
});

export default SignUp;
