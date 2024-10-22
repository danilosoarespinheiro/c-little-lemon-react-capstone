import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { MaskedTextInput } from "react-native-mask-text";

const CustomTextInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  ...args
}) => {
  return (
    <View>
      <Text
        style={{
          marginBottom: 1,
          fontSize: 8,
          fontWeight: 'bold',
          color: 'gray',
        }}
      >
        {label}
      </Text>
      <MaskedTextInput
        style={{
          padding: 8,
          borderRadius: 10,
          borderColor: 'lightgray',
          borderWidth: 1,
        }}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        {...args}
      />
    </View>
  );
};

export default CustomTextInput;
