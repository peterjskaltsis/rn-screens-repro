import * as React from "react";
import { View, Text, Button, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button title="Open Modal" onPress={() => navigation.navigate("Modal")} />
    </View>
  );
}

function ModalScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Text>Modal Screen</Text>
        <View style={{ height: 2000, backgroundColor: "red" }}>
          {Array.from({ length: 100 }).map((_, index) => (
            <Text key={index}>I'm a long scrollview</Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Modal"
          component={ModalScreen}
          options={{
            presentation: "formSheet",
            unstable_screenStyle: {
              backgroundColor: "white",
            },
            contentStyle: {
              backgroundColor: "white",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
