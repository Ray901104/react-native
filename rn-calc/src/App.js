import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import Button from "./components/Button";

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>RN Calc App</Text>
            <Button title={"button"} color={"red"} onPress={() => console.log("click!")}></Button>
            <Button color={"red"} onPress={() => console.log("click!")}></Button>
            <StatusBar style="auto"/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 30,
        fontWeight: '700',
        color: 'green',
    },
});
