import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text } from 'react-native';

const Separator = () => <View style={styles.separator} />;

const MainPage = ({ navigation }) => (
    <SafeAreaView style={styles.container}>
        <View>
            <Text style={styles.title}>Click on either of the buttons to get started</Text>
            <Button
                title="Provide Feedback"
                color="blue"
                onPress={() => navigation.navigate("Feedback")}
            />
        </View>
        <Separator />
        <View>
            <Button
                title="View Feedback"
                color="red"
                onPress={() => navigation.navigate("FeedbackDetails")}
            />
        </View>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 16,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

export default MainPage;
