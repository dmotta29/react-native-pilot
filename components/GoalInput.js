import React, { useState } from 'react'
import {View, TextInput, Button, StyleSheet, Modal } from 'react-native'

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHanlder = (enteredText) => {
        setEnteredGoal(enteredText)
      }

    const addGoalHandler = () => {
      props.onAddGoal(enteredGoal)
      setEnteredGoal('')
    }
    
    return (
        <Modal visible={props.visible} animationType='slide'>     
          <View style={styles.inputContainer}>
            <TextInput 
              placeholder="Course Goal" 
              style={styles.inputField}
              onChangeText={goalInputHanlder}
              value={enteredGoal}/>
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button 
                  title="ADD"
                  onPress={addGoalHandler}/>
              </View>
              <View style={styles.button}>
                <Button
                  onPress={props.onCancel}
                  title="CANCEL"
                  color="red"/>
                </View>
            </View>  
           
          </View>
        </Modal>
    )
}

const styles = StyleSheet.create({

  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    
  },
  inputField: {
    borderColor: 'black', 
    borderWidth: 2, 
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    width: '40%'
  }
});


export default GoalInput