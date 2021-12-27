import React from 'react';
import {SafeAreaView} from 'react-native';
import Greeting from './components/Greeting';
import Box from './components/Box';

const App = () => {

  const name = '차영빈';

  return (
    <SafeAreaView>
        <Greeting name={name} />
        <Box />
    </SafeAreaView> 
  );
};

// Greeting.defaultProps = {
//   name: "차영빈",
// }

export default App;