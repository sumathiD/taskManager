import * as React from 'react';
import { View, Text, StyleSheet } from "react-native"
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Octicons';
import Card from '../components/Card';

function Hometask() {
    return (
        <View style={styles.taskContainer}>
            <View style={styles.taskMenuIcon}>
                <View><Text style={styles.topLinks}><Icon name="three-bars" size={30} color="#ccc" /></Text></View>
                <View style={styles.taskRightContent}><Text><Icon name="person" size={30} color="#ccc" /></Text></View>
            </View>
            <View style={styles.taskTitle01}>
                <Text>Hi Mr. John</Text>
                <Text> 6 Tasks are pending</Text>
            </View>
            <View>
                <Card>
                    <Text>Mobile App Design</Text>
                    <Text>Mike and Anita</Text>
                    <View style={{ backgroundColor: '#7575CF', display:'flex', flexDirection:'row' }}>
                        <View style={{alignContent: 'flex-start', flex: 1 }}><Text>Left</Text></View>
                        <View style={{alignContent: 'flex-end' }}><Text>Right</Text></View>
                    </View>
                </Card>
                <Card><Text>test</Text></Card>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    taskContainer: {
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    taskMenuIcon: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    topLinks: {
        paddingHorizontal: 10,

    },
    taskRightContent: {
        textAlign: 'right',
    },
    taskProfileImg: {
        borderRadius: 50,
    },
    taskTitle01: {
        paddingHorizontal: 10,
    },
})

export default Hometask