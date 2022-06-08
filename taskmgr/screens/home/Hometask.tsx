import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground } from "react-native"
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Octicons';
import Card from '../../components/Card';
import { styles } from './style';

{/* <View><Image style={styles.landImg} source={require('../../assets/bgCurve.jpg')} /></View> */ }
const image = { uri: "../../assets/taskmgrImg01.jpg" };

function Hometask(props: any) {

    return (
        <View style={styles.taskContainer}>
            <ImageBackground source={require('../../../assets/transImg.png')} style={styles.image} resizeMode='cover'>
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
                        <Text style={[styles.fontColorWhite, styles.taskReview]} onPress={() => props.navigation.navigate('ongoing')}><Icon name="note" size={20} /></Text>
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
                            <Text onPress={() => props.navigation.navigate('ongoing')} style={[styles.fontColorWhite, styles.fontSize22Bold, styles.centerText]}>22</Text>
                            <Text onPress={() => props.navigation.navigate('ongoing')} style={[styles.fontColorWhite, styles.fontSize11, styles.centerText]}>
                                Ongoing
                            </Text>
                        </Card>
                    </View>
                    <View style={styles.taskReviewItem}>
                        <Card>
                            <Text style={[styles.altCol, styles.fontColorWhite, styles.fontSize22Bold, styles.centerText]}>22</Text>
                            <Text style={[styles.fontColorWhite, styles.fontSize11, styles.centerText]}>Waiting for review</Text>
                        </Card>
                    </View>
                </View>
            </ImageBackground>
        </View >

    )
}



export default Hometask