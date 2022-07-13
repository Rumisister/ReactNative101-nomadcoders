import { StatusBar } from 'expo-status-bar';
import { 
StyleSheet, 
Text, 
View, 
TouchableOpacity, 
TouchableHighlight,
TouchableWithoutFeedback,
Pressable
 } from 'react-native';
import { theme } from './colors';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.Header}>
        <TouchableOpacity>
          <Text style={styles.btnText}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.btnText}>Travel</Text>
        </TouchableOpacity>
      </View>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  Header: {
    justifyContent:"space-between",
    flexDirection: "row",
    marginTop: 100,
  },
  btnText:{
    fontSize: 40,
    fontWeight:"600",
    color: "white",

  }
});
