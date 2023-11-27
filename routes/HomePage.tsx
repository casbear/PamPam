import React from "react";
import {Button, Text, View} from 'react-native';
import {styles} from "../assets/styles";
import {HomePageScreenProps} from "../assets/types/ScreenProps";

export const HomePage: React.FC<HomePageScreenProps> = (props) => {
    return (
        <View style={styles.container}>
            <Text>home page jd</Text>
            <Button title="todo" onPress={() => props.navigation.push("ToDo")} />
        </View>
    );
}