import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from "react-native";
import { styles } from './style';
import Icon from 'react-native-vector-icons/Octicons';
import DayCard from '../../components/DayCard';
import Card from '../../components/Card';
import ActiveDayCard from '../../components/ActiveDayCard';

const image = { uri: "../../assests/" };

function Ongoing() {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
    <View style={styles.taskContainer}>
      <View style={styles.taskMenuIcon}>
        <View><Text style={styles.topLinks}><Icon name="arrow-left" size={25} color="#274060" /></Text></View>
        <View style={styles.taskRightContent}><Text><Icon name="person" size={30} color="#274060" /></Text></View>
      </View>
      <View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5, marginVertical: 10 }}>
          <Text style={{ flex: 1, justifyContent: 'flex-start' }}><Icon name="arrow-left" size={15} color="#274060" /> Mar</Text>
          <Text style={{ flex: 1, justifyContent: 'center', textAlign: 'center' }}>April</Text>
          <Text style={{ flex: 1, justifyContent: 'flex-end', textAlign: 'right' }}>May <Icon name="arrow-right" size={15} color="#274060" /></Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 10 }}>
          <DayCard>
            <Text style={styles.fontSize14Bold}>22</Text>
            <Text>Wed</Text>
          </DayCard>
          <ActiveDayCard>
            <Text style={styles.fontSize14Bold}>22</Text>
            <Text>Wed</Text>
          </ActiveDayCard>
          <DayCard>
            <Text style={styles.fontSize14Bold}>22</Text>
            <Text>Wed</Text>
          </DayCard>
          <DayCard>
            <Text style={styles.fontSize14Bold}>22</Text>
            <Text>Wed</Text>
          </DayCard>
        </View>
      </View>
      <View>
        <Text style={{ marginVertical: 10, fontSize: 25, fontWeight: 'bold', color: '#274060' }}>Ongoing</Text>
      </View>
      <View>
        <View style={{ flexDirection: 'row', }}>
          <View style={{ flex: 1, flexDirection: 'column', paddingVertical: 20, height: 170, }}>
            <Text style={{ justifyContent: 'flex-start', flex: 3 }}>
              9 AM
            </Text>
            <Text style={{ justifyContent: 'flex-end', alignItems: 'baseline', flex: 2 }}>
              10 AM
            </Text>
          </View>
          <View style={{ flex: 5 }}>
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
        </View>
        <View style={{ display: 'flex', flexDirection: 'row',  marginBottom: 40}}>
          <Text style={{ flex: 1 }}>10 AM</Text>
          <Text style={{ borderColor: '#fff', backgroundColor: 'red', borderRadius: 30, borderWidth: 4, height: 10, width: 15, padding: 5, zIndex: 0, top: 5, marginRight: 5 }}>.</Text>
          <Text style={{ borderColor: 'red', flex: 5, borderBottomWidth: 2, bottom: 5 }}></Text>
        </View>
      </View>
      <View>
        <View style={{ flexDirection: 'row', }}>
          <View style={{ flex: 1, flexDirection: 'column', paddingVertical: 20, height: 170, }}>
            <Text style={{ justifyContent: 'flex-start', flex: 3 }}>
              9 AM
            </Text>
            <Text style={{ justifyContent: 'flex-end', alignItems: 'baseline', flex: 2 }}>
              10 AM
            </Text>
          </View>
          <View style={{ flex: 5 }}>
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
        </View>
        <View style={{ display: 'flex', flexDirection: 'row',}}>
          <Text style={{ flex: 1 }}>10 AM</Text>
          <Text style={{ borderColor: '#fff', backgroundColor: 'red', borderRadius: 30, borderWidth: 4, height: 10, width: 15, padding: 5, zIndex: 0, top: 5, marginRight: 5 }}></Text>
          <Text style={{ borderColor: 'red', flex: 5, borderBottomWidth: 2, bottom: 5 }}></Text>
        </View>
      </View>
    </View >
    </ScrollView>
  )
}

export default Ongoing