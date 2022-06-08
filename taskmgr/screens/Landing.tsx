import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

function Landing(props: any) {
    // const navigation = useNavigation();
    return (
        <LinearGradient colors={['#f1f1f1', '#8693ab']} style={styles.linearGradient}>
            <View style={styles.mainContainer}>
                <View style={styles.landImgMain}>
                    <Image style={styles.landImg} source={require('../../assets/taskmgrImg01.jpg')} />
                </View>
                <View>
                    <Text style={styles.title02}>Manage your daily tasks</Text>
                    <Text style={styles.textStyle01}>Team and Project management with solution providing App</Text>
                </View>
                <View>
                    <Text style={styles.circleWhite}></Text>
                    <Text style={styles.textStyle02} onPress={() => props.navigation.navigate('hometask')}>Get Started</Text>
                </View>
                <View>
                    {/* <Text style={[styles.textStyle02, styles.textStyle03]} onPress={() => props.navigation.navigate('workorder')}>Go to WorkOrder</Text> */}
                </View>
            </View>
            </LinearGradient>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        padding: 40,
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        height: '100%',
        // backgroundColor: '#f1f1f1'
    },
    landImgMain: {
        height: '50%',
        marginBottom: 60,
    },
    landImg: {
        borderBottomLeftRadius: 150,
        borderBottomRightRadius: 150,
        width: '100%',
        height: '100%',
        padding: 0,
        backgroundColor: '#ccc',
    },
    title02: {
        fontSize: 30,
        fontWeight: '700',
        color: '#274060',
        paddingBottom: 40,
    },
    textStyle01: {
        fontSize: 15,
        color: '#274060',
        paddingBottom: 30,
    },
    circleWhite: {
        backgroundColor: '#fff',
        height: 50,
        width: 50,
        borderRadius: 50,
        zIndex: 0,
    },
    textStyle02: { //get started
        fontSize: 15,
        fontWeight: '700',
        color: '#274060',
        marginTop: -35,
        marginLeft: 15,
    },
    textStyle03: { //work order link
        textAlign: 'right',
        paddingTop: 15,
    },
})

export default Landing