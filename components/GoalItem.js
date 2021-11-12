import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return (
      <TouchableOpacity
        //bind to make it function with the onDelete inside the GoalItem in App 
        onPress={props.onDelete.bind(this, props.id)}
        activeOpacity={0.5}
      >
        <View style={styles.listItem}>
          <Text >{props.title}</Text>          
        </View>
        </TouchableOpacity>      
    )
}

export default GoalItem

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        margin: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
      }
})