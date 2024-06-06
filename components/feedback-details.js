import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const FeedbackDetails = () => {
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        const fetchFeedback = async () => {
            const querySnapshot = await getDocs(collection(db, 'feedback'));
            const feedbackData = querySnapshot.docs.map(doc => doc.data());
            setFeedback(feedbackData);
        };

        fetchFeedback();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Feedback Details</Text>
            <FlatList
                data={feedback}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.itemText}>Name: {item.name}</Text>
                        <Text style={styles.itemText}>Email: {item.email}</Text>
                        <Text style={styles.itemText}>Gender: {item.gender}</Text>
                        <Text style={styles.itemText}>IT Support: {item.itSupport}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f9fa',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#343a40',
        textAlign: 'center',
    },
    item: {
        backgroundColor: '#ffffff',
        padding: 20,
        marginVertical: 8,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    itemText: {
        fontSize: 18,
        color: '#495057',
    },
});

export default FeedbackDetails;
