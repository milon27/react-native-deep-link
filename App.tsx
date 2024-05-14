import React from 'react';
import {Text, View} from 'react-native';
import {useInitialURL} from './src/useDeepLink';

export default function App() {
  const {url: initialUrl, processing} = useInitialURL();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>
        {processing
          ? 'Processing the initial url from a deep link'
          : `The deep link is: ${initialUrl || 'None'}`}
      </Text>
    </View>
  );
}
