
import React from 'react';
import { StyleSheet, View } from 'react-native';

function ActiveDayCard(props:any) {
  return (
    <View style={styles.card}>
            <View style={styles.cardContent}>
            <View style={styles.cardOuter}>
                {props.children}
                </View>
            </View>
    </View>
  )
}

const styles = StyleSheet.create ({
    card: {
        borderRadius: 25,
        elevation: 10,
        backgroundColor: '#6660CC',
        shadowColor: "#333",
        shadowOffset: {width: 1, height:1},
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginVertical: 10,
    },
    cardContent: {
        fontSize: 25,
        marginVertical: 25,
        marginHorizontal: 15,
    },
    cardOuter: {
        flexDirection: 'column', 
        width: 30, 
        justifyContent: 'center', 
        alignItems:'center'
      }
})

export default ActiveDayCard
