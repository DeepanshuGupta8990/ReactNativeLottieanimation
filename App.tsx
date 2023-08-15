import { View, Text } from 'react-native'
import React, { useRef,useEffect } from 'react'
import LottieView from 'lottie-react-native';
const App = () => {
  return (
    <View style={{flex:1,display:'flex',justifyContent:'center',alignItems:'center'}}>
  <Text selectable style={{fontSize:30,fontWeight:'bold',color:"black"}}>Animation</Text>
  {/* <View>
  <LottieView style={{width:100,height:100}}
      source={require('./Lottie/com.json')}
      autoPlay
    />
  </View> */}
  <View>
  <LottieView style={{width:200,height:200}}
      source={require('./Lottie/anim.json')}
      autoPlay
    />
  </View>
  </View>
  )
} 

export default App