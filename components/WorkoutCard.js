import react from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function WorkoutCard({title, time, imageUrl} ) {
    //const {title, time, image, onPress} = item;
    return (
        <View>
            <Text>{title}</Text>
            <Text>{time.toString()} min</Text>
        </View>
    )
}
