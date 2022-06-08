import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    taskContainer: {
        height: '100%',
        padding:20,
        backgroundColor: '#ccc'
    },
    taskMenuIcon: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    topLinks: {
        paddingHorizontal: 8,
        height: 33,
        paddingVertical: 5,
        marginTop: 5,
        borderRadius: 5,
        borderColor: '#aaa',
        borderWidth: 2,
    },
    taskRightContent: {
        textAlign: 'right',
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 50,
        paddingVertical: 5,
        paddingHorizontal: 10,
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
    fontColorWhite: {
        color: '#fff',
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
    taskProfileIcon: {
        textAlign: 'center',
        borderColor: '#ccc',
        borderWidth: 2,
        borderRadius: 50,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginLeft: -7,
        backgroundColor: '#fff',
        color: 'red',
    },
    taskContentRight: {
        justifyContent: 'flex-end',
        color: '#fff',
    },
    fontSize11: {
        fontSize: 11,
    },
    fontSize14Bold: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    dayCardBg: {
        backgroundColor: '#6660CC',
    },
})