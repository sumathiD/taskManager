import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
// import  Icon  from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Formik, Field, Form } from 'formik';

function Home() {
  const myIcon = <Icon name="rocket" size={30} color="#900" />;
  // const inputValues: any = [];
  const [inputValues, setInputValues] = useState([] as any);
  // const newValues: any = [];
  return (
    <View>
      <Text>
        Add ddd user
      </Text>
      <View>
        <Formik
          initialValues={{
            firstName: 'Suthi',
            email: 'a@aa.com',
          }}
          onSubmit={values => {
            console.log(values)
            // inputValues.push(values)
            const newValues = [...inputValues, values]

            setInputValues(newValues);
            console.log(newValues)
          }
          }
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <TextInput
                onChangeText={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
                value={values.firstName}
              />
              <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <Button onPress={handleSubmit} title="Submit" />

              <View>
                {/* <Text>Values are : { JSON.stringify(values, null, 20) }</Text> */}
                {/* <Text><Icon name="rocket" size={30} color="#900" /></Text> */}
              </View>

            </View>
          )}
        </Formik>

        <View>
          {/* <Text>Values are : {JSON.stringify(inputValues, null, 20)}</Text> */}
          <Text>Values are : </Text>
          {inputValues.map((user: any) =>
            <Text>Name: {user.firstName} , Mail: {user.email}</Text>
          )}

        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  inputTextStyle01: {
    borderWidth: 2,
    borderColor: '#ccc',
  },
  stylename: {

  },
  stylename1: {

  },
  stylename2: {

  },
})

export default Home