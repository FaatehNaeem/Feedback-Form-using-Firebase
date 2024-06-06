import { Link } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, Alert, View, Text, TouchableOpacity,Image } from 'react-native';
// import { Image } from 'react-native-elements';
// import { db } from '../firebaseConfig';
// import { addDoc, collection } from 'firebase/firestore';

const Separator = () => <View style={styles.separator} />;

const Login = ({ navigation }) => {

    const handlePress = () => {
        // Handle the click event here
        Alert.alert('Google Icon Clicked', 'Implement OAuth logic here');
        // You can implement OAuth logic here
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
            <Text style={{ fontSize: 32, fontWeight: 'bold', color: 'blue', margin: 12 }}>Login</Text>

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

            <Button
                title="Login"
                color="blue"
            // onPress={handleSubmit}
            />


            <View style={{ marginTop: 12, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text>Don't have an account? </Text>
                <Link href={"/signup"} style={{ color: "blue", fontSize: 16 }}>Signup</Link>
            </View>

            <Text style={{ marginTop: 12, fontSize: 20, color: 'blue' }}>Or</Text>

            <View style={styles.oauth}>
                <TouchableOpacity onPress={handlePress}>
                    <Image
                        source={require('../assets/images/1199414.png')}
                        style={styles.image}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePress}>
                    <Image
                        source={require('../assets/images/fbimage.png')}
                        style={styles.image}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePress}>
                    <Image
                        source={require('../assets/images/twitter.png')}
                        style={styles.image}
                    />
                </TouchableOpacity>
               
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
    separator: {
        marginVertical: 8,
        borderBottomColor: 'blue',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    oauth: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,
        gap:12,
        flexDirection: 'row',
        width:100
    },
    image: {
        width: 30,
        height: 30,
        borderRadius: 30, // Makes the image rounded
    }
});

export default Login;
