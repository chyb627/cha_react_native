// 파일을 만든 다음 가장 먼저 해야 할 일은 상단에 React를 불러오는 일.
// 다음으로 사용할 컴포넌트를 불러오는 일.
import React from 'react';
import { View, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';

function Greeting (props) {
    return (
        <View style={tw`bg-black`}>
            <Text style={tw`text-3xl font-bold text-red-500`}> Hello, {props.name} </Text>
        </View>
    );
}

// 다른 파일에서 이 컴포넌트를 불러올 수 있게 해주는 코드를 최하단에 작성
export default Greeting;
