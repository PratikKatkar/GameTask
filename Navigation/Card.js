import React, {useEffect, useState} from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

const Card = ({character, onPress, matchArray, index, array}) => {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    console.log('matchArray : ', matchArray);
    if (matchArray.includes(index)) {
      console.log('index present', index);
      setDisable(true);
      setShow(false);
    }
  }, [matchArray]);

  useEffect(() => {
    console.log('array : ', array.length);
    if (array.length == 2) {
      setTimeout(() => {
        setShow(false);
      }, 1.5 * 1000);
    }
  }, [array]);

  const showFunction = () => {
    setCount(prevCount => {
      console.log('xxx', prevCount);
      console.log('first', prevCount < 2);
      if (prevCount > 1) {
        console.log('1111111111111');
        setShow(false);
        return 0;
      } else {
        console.log('elseee');
        setShow(true);
        return prevCount + 1;
      }
    });
  };

  return (
    <>
      <TouchableOpacity
        disabled={disable}
        style={[styles.card, {backgroundColor: disable ? 'red' : 'blue'}]}
        onPress={() => {
          onPress();
          showFunction();
          console.log('hiii');
        }}>
        {show && <Text style={styles.cardText}>{character}</Text>}
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    height: 100,
    width: 70,
    borderRadius: 10,
    backgroundColor: '#3498db',
  },
  cardText: {
    fontSize: 20,
    color: '#fff',
  },
});

export default Card;
