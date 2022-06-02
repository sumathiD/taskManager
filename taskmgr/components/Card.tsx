import React from 'react';
import { StyleSheet, View } from 'react-native';

function Card(props:any) {
  return (
    <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
    </View>
  )
}

const styles = StyleSheet.create ({
    card: {
        borderRadius: 10,
        elevation: 5,
        backgroundColor: '#610481',
        shadowColor: "#333",
        shadowOffset: {width: 1, height:1},
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    cardContent: {
        fontSize: 25,
        marginVertical: 15,
        marginHorizontal: 15,
    },
})

export default Card