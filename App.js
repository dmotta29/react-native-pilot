import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [isAddMode, setIsAddMode] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);
  const addGoalHanlder = goalTitle => {
    setCourseGoals([...courseGoals, {id: Math.random().toString(), value: goalTitle}])
    setIsAddMode(false)
}

const removeGoalHandler = goalId => {
  setCourseGoals(currentGoals => {
    return currentGoals.filter((goal) => goal.id !== goalId)
  })
  
}

const cancelAddGoal = () => {
  setIsAddMode(false)
}

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={()=> setIsAddMode(true)}/>
      <GoalInput 
        visible={isAddMode} 
        onAddGoal={addGoalHanlder} 
        onCancel={cancelAddGoal}/>
      <FlatList 
        keyExtractor={(item) => item.key}
        data={courseGoals} 
        renderItem={itemData => 
          <GoalItem 
            onDelete={removeGoalHandler}
            id={itemData.item.id}  
            title={itemData.item.value}/>}/>
    </View>    
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30
  }
})