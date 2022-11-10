import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function FootballField({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Close"
        onPress={() => navigation.pop()}
      />
      <Button
        title="Add Valuation"
        onPress={() => navigation.push("Valuation")}
      />
      <Button
        title="Valuation Bar (Placeholder)"
        onPress={() => navigation.push("Valuation")}
      />
      <Button
        title="Favorites"
        onPress={() => navigation.navigate("Coverage_2_Valuations")}
      />
      <StatusBar style="auto" />
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