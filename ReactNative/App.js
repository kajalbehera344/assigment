import React from 'react';
import { View, StyleSheet } from 'react-native';
import ButtonComponent from './ButtonComponent';

const App = () => {
  return (
    <View style={styles.container}>
      <ButtonComponent kind="primary" size="large" iconName="star">
        Primary Button
      </ButtonComponent>
      <ButtonComponent kind="secondary" variant="outlined" size="medium">
        Secondary Button
      </ButtonComponent>
      <ButtonComponent kind="success" size="small" iconName="thumbs-up">
        Success Button
      </ButtonComponent>
      <ButtonComponent kind="danger" variant="default" iconName="alert">
        Danger Button
      </ButtonComponent>
      <ButtonComponent kind="warning" size="large" iconName="warning" >Warning Button</ButtonComponent>
      <ButtonComponent kind="info" iconName="information-circle">
        Info Button
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
