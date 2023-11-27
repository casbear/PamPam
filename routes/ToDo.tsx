import {Button, Text, View} from 'react-native';
import {styles} from "../assets/styles";
import React from "react";
import {ToDoScreenProps} from "../assets/types/ScreenProps";

export const ToDo: React.FC<ToDoScreenProps> = (props) => {
    return (
        <View style={styles.container}>
            <Text>todo</Text>
            <Button title="home" onPress={() => props.navigation.push("HomePage")} />
        </View>
    );
}