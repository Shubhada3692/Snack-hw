import * as React from 'react';
import { View, Text } from 'react-native';

class Main extends React.Component {
  render() {
    return (
      <View>
        <Text style={{ marginTop: 60,marginLeft : 90, color: 'yellow', fontSize: 30 }}>
          Hey there!
        </Text>
        <Text style={{ marginTop: 65,marginLeft:70,color: 'green', fontSize: 30 }}>
          How r u doing?
        </Text>
        <Text style={{ marginTop: 70,marginLeft:40, color: 'purple', fontSize: 30 }}>
          This is my snack HW
        </Text>
      </View>
    );
  }
}

export default Main;
