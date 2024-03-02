// AuthStack.js
import React from 'react';
import {View, Button, Text} from 'react-native';
import {connect} from 'react-redux';
import {login} from '../src/redux/Action';
import {update} from '../src/redux/Action';

const AuthScreen = ({dispatchLogin, myArray}) => {
  const handleLogin = () => {
    dispatchLogin();
  };
  console.log('xxx', dispatchLogin);

  return (
    <View style={{backgroundColor: 'blue', flex: 1}}>
      <View style={{backgroundColor: 'green', flex: 0.5}}>
        {myArray.map(item => {
          // console.log('xxx', item);
          return (
            <Text
              key={item.id}
              style={{color: 'red', fontSize: 20, textAlign: 'center'}}>
              {item.name}
            </Text>
          );
        })}
      </View>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};
const mapStateToProps = state => ({
  myArray: state.auth.myArray,
});

const mapDispatchToProps = dispatch => ({
  dispatchLogin: () => dispatch(login()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);
