import React from 'react';
import { ActivityIndicator } from 'react-native';
import theme from '../../styles/theme';

export function Load() {
  return (
    <ActivityIndicator 
        color={theme.colors.main}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        size="large"    
    />
  );
}