import * as React from 'react';
import { View, Text, StyleSheet } from "react-native"
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Octicons';
import Card from '../components/Card';

function Hometask(props) {
    return (
        <View style={styles.taskContainer}>
            <View style={styles.taskMenuIcon}>
                <View><Text style={styles.topLinks}><Icon name="three-bars" size={30} color="#ccc" /></Text></View>
                <View style={styles.taskRightContent}><Text><Icon name="person" size={30} color="#ccc" /></Text></View>
            </View>
            <View style={styles.taskTitleMain}>
                <Text style={styles.taskTitle01}>Hi Mr. John</Text>
                <Text style={styles.taskTitle02}> 6 Tasks are pending</Text>
            </View>
            <View>
                <Card>
                    <View style={styles.cardTitleMain}>
                        <Text style={[styles.fontColorWhite, styles.fontSize14Bold]}>Mobile App Design</Text>
                        <Text style={[styles.fontColorWhite, styles.fontSize11]}>Mike and Anita</Text>
                    </View>
                    <View style={styles.taskCardContent01}>
                        <View style={styles.taskContentLeft}>
                            <Text style={styles.taskProfileIcon}><Icon name="person" size={30} color="#000" /></Text>
                            <Text style={styles.taskProfileIcon}><Icon name="person" size={30} color="#000" /></Text>
                            <Text style={styles.taskProfileIcon}><Icon name="person" size={30} color="#000" /></Text>
                        </View>
                        <View style={styles.taskContentRight}><Text style={styles.fontColorWhite}>New</Text></View>
                    </View>
                </Card>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', marginVertical: 10 }}>
                <View style={{ justifyContent: 'flex-start', flex: 1 }}>
                    <Text style={[styles.fontColorWhite, styles.fontSize18Bold]}>Monthly Review</Text>
                </View>
                <View style={{ justifyContent: 'flex-end' }}>
                    <Text style={[styles.fontColorWhite, styles.taskReview]}><Icon name="note" size={20} /></Text>
                </View>
            </View>
            <View style={styles.taskReviewContainer}>
                <View style={styles.taskReviewItem}>
                    <Card>
                        <Text style={[styles.altCol, styles.fontColorWhite, styles.fontSize22Bold, styles.centerText]}>22</Text><Text style={[styles.fontColorWhite, styles.fontSize11, styles.centerText]}>Done</Text>
                    </Card>
                </View>
                <View style={styles.taskReviewItem}>
                    <Card>
                        <Text style={[styles.fontColorWhite, styles.fontSize22Bold, styles.centerText]}>22</Text><Text style={[styles.fontColorWhite, styles.fontSize11, styles.centerText]}>In progress</Text>
                    </Card>
                </View>
                <View style={styles.taskReviewItem}>
                    <Card>
                        <Text style={[styles.fontColorWhite, styles.fontSize22Bold, styles.centerText]}>22</Text>
                        <Text style={[styles.fontColorWhite, styles.fontSize11, styles.centerText]} onPress={() => props.navigation.navigate('ongoing')}> Ongoing</Text>
                    </Card>
                </View>
                <View style={styles.taskReviewItem}>
                    <Card>
                        <Text style={[styles.altCol, styles.fontColorWhite, styles.fontSize22Bold, styles.centerText]}>22</Text><Text style={[styles.fontColorWhite, styles.fontSize11, styles.centerText]}>Waiting for review</Text>
                    </Card>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    taskContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#483D8B',
        height: '100%',
    },
    taskMenuIcon: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    topLinks: {
        paddingHorizontal: 10,
        marginTop: 5,
    },
    taskCardContent01: {
        display: 'flex',
        flexDirection: 'row',
    },
    taskContentLeft: {
        alignContent: 'flex-start',
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 10,
    },
    taskContentRight: {
        justifyContent: 'flex-end',
        color: '#fff',
    },
    taskRightContent: {
        textAlign: 'right',
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 50,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    taskProfileImg: {
        borderRadius: 50,
    },
    taskTitleMain: {
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    taskTitle01: {
        color: '#fff',
        fontSize: 30,
    },
    taskTitle02: {
        color: '#fff',
        fontSize: 15,
    },
    cardTitleMain: {
        marginVertical: 5,
    },
    centerText: {
        textAlign: 'center',
    },
    fontColorWhite: {
        color: '#fff',
    },
    fontSize11: {
        fontSize: 11,
    },
    fontSize14Bold: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    fontSize18Bold: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    fontSize22Bold: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    taskProfileIcon: {
        textAlign: 'center',
        borderColor: '#ccc',
        borderWidth: 2,
        borderRadius: 50,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginLeft: -10,
        backgroundColor: '#fff',
        color: 'red',
    },
    taskReview: {
        textAlign: 'center',
        borderColor: '#26c6f8',
        backgroundColor: '#26c6f8',
        borderRadius: 38,
        paddingVertical: 8,
        paddingHorizontal: 8,
    },
    altCol: {
        paddingVertical: '15%',
    },
    taskReviewContainer: {
        display: 'flex', flexDirection: 'column', flexWrap: 'wrap', height: 300, alignItems: 'flex-start'
    },
    taskReviewItem: {
        paddingHorizontal: '2%',
        width: '50%'
    },
})

export default Hometask