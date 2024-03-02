// AuthStack.js
import React from 'react';
import {View, Button} from 'react-native';
import {connect} from 'react-redux';
import { login } from '../redux/Action';


const AuthScreen = ({dispatchLogin}) => {
  const handleLogin = () => {
    dispatchLogin();
  };

  return (
    <View>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatchLogin: () => dispatch(login()),
});

export default connect(null, mapDispatchToProps)(AuthScreen);
