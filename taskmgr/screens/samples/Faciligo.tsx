import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
// import Dropdown from 'react-native-select-dropdown';

function Faciligo() {

    // const countries = ["Egypt", "Canada", "Australia", "Ireland"];
    const [property, setProperty] = useState('');
    const [unit, setUnit] = useState('');

    const [allValues, setAllValues] = useState([] as any);

    const handlerAddValue = () => {
        const inputValues = [property, unit]
        const newValues = [...allValues, inputValues];
        setAllValues(newValues);
        console.log('all values',allValues);
    }

  return (
    <View style={styles.fContainer}>
        <Text style={styles.fTitle01}>Faciligo Work Order</Text>
        <View>
            <Text>Property: </Text>
            <TextInput 
                style={styles.fInput01}
                placeholder='Property'
                onChangeText={(property) => setProperty(property)}
            />
            <Text>Unit: </Text>
            <TextInput 
                style={styles.fInput01}
                placeholder='Unit'
                onChangeText={(unitText) => setUnit(unitText)}
            />
            <Button
                title='Add Values'
            />
        </View>
        <View>
            <Text>{unit}</Text>
            <Text>{property}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    fContainer: {
        padding: 20,
    },
    fInput01:{
        borderWidth: 1,
        borderColor: '#333',
        // marginBottom: 10,
        // marginTop: 10,
        marginVertical: 5,
        marginBottom: 20,
        marginHorizontal: 10,
        padding: 5,
    },
    fTitle01:{
        fontSize: 20,
        color: '#000080',
        fontWeight: 'bold',
        paddingBottom: 20,
    },
    ttt:{},
})

export default Faciligo