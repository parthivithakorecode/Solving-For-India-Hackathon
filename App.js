import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View } from 'react-native';
import girlWorkout from './assets/girlWorkout.jpg';
import pushup from './assets/pushup.jpg';
import squat from './assets/squat.jpg';
import WorkoutCard from './components/WorkoutCard';
const workouts = [
  {
    title:'Short, sweet, sweat',
    time: 3,
    image: girlWorkout,
    //onPress: () =>{ console.log("working"); setWorkoutType('3min') },
  },
  {
    title:'Full body burner',
    time: 5,
    image: pushup,
    //onPress: () =>{ setWorkoutType('5min') },
  },
  {
    title:'Daily intense workout',
    time: 8,
    image: squat, 
    //onPress: () =>{ setWorkoutType('8min') },
  },
]
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Lets Workout</Text>
      <Text>with home equipments</Text>
      <Text>Get Started in just a minute 💪</Text>
      {
      workouts.map(( workout) => { const {title, time, image} = workout;
      return WorkoutCard(title, time, image);
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
