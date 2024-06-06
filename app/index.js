import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from '../components/main-page';
import FeedbackForm from '../components/feedback-form';
import FeedbackDetails from '../components/feedback-details';
import Login from './login'
import SignUp from './signup'; 

const Stack = createNativeStackNavigator();

function App() {
  return (
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    // <Text>Hello</Text>
    // </View>
    // <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={MainPage} />
      <Stack.Screen name="Feedback" component={FeedbackForm} />
      <Stack.Screen name="FeedbackDetails" component={FeedbackDetails} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default App;
