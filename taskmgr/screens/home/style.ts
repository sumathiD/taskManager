import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    taskContainer: {
        // backgroundColor: '#483D8B',
        height: '100%',
    },
    image: {
        // flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#483D8B',
        // backgroundColor: 'transparent',        
        // flexDirection: 'row',
        // alignItems: 'flex-start',
        // height: "100%",
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
        marginLeft: -7,
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
