import {Button, Text, TextInput, View, useWindowDimensions, TouchableHighlight} from 'react-native';
import {styles} from "../assets/styles";
import React, {useState} from "react";
import {ToDoScreenProps} from "../assets/types/ScreenProps";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Picker} from "@react-native-picker/picker";

export const ToDo: React.FC<ToDoScreenProps> = (props) => {
    const [toDoText, changeToDoText] = useState<string>('')
    const [state, setState] = useState<string>('')

    const width = useWindowDimensions().width;
    const storeData = async (value: string, state: string) => {
        const entry = {
            state: state,
            value: value
        }

        try {
            const keys = await AsyncStorage.getAllKeys()
            const key = keys.length + 1
            await AsyncStorage.setItem(key.toString(), JSON.stringify(entry));
        } catch (e) {
            // saving error
        }
    };
    // @ts-ignore
    return (
        <View style={styles.container}>
            <Text>todo</Text>
            <TextInput style={[styles.textInput, {maxWidth: width}]} value={toDoText} placeholder={"jd"} onChangeText={(value)=>{changeToDoText(value)}}></TextInput>
            <Picker style={[styles.picker, {maxWidth: width}]} selectedValue={state} onValueChange={(itemValue) => setState(itemValue)}>
                <Picker.Item value={"TODO"} label={"to do"}></Picker.Item>
                <Picker.Item value={"INPROGRESS"} label={"in progress"}></Picker.Item>
                <Picker.Item value={"DONE"} label={"done"}></Picker.Item>
            </Picker>
            <TouchableHighlight onPressOut={() => storeData(toDoText, state)}></TouchableHighlight>
            <Button title="home" onPress={() => props.navigation.push("HomePage")} />
        </View>
    );
}