import React, {useEffect, useState} from 'react'
import { View, Text } from 'react-native';
// import CountDown from 'react-native-countdown-component';

function Timer() {

  const [watchTime, setWatchTime] = useState(3600)
  const [min, setMin] = useState(Math.floor(watchTime / 60))
  const [sec, setSec] = useState(watchTime % 60)

  useEffect(() => {
    if (watchTime > 0) {
      setTimeout(() => {
        setWatchTime(watchTime - 1);
        if (sec === 0){
          setSec(59)
        } else{
          setSec(sec - 1)
        }
        setMin(Math.floor(watchTime / 60))
      }, 1000)
    } else {
      alert('Finished')
    }
  })

  return (
    <>
      
      <View style={{justifyContent: 'center', flexDirection: 'row', alignItems: 'center', marginBottom: 10,}}>
        <Text style={{fontSize: 16,  fontWeight:'bold', textAlign: 'center', marginRight: 5,}}>Expires in</Text>
        <Text style={{fontSize: 16,  fontWeight:'bold', textAlign: 'center'}}>00:00:{min}:{sec === 0 ? "00" : sec}</Text>
    </View>
    </>
    
  )
}

export default Timer
