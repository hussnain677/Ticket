import React from 'react'
import { KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';

function KeyboardWrap({children}) {
  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior='padding'>
        <ScrollView>
                {children}
        </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default KeyboardWrap