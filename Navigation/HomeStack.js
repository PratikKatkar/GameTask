import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import Card from './Card';

const characters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let arr = [];
let cnt = 0;
const HomeStack = () => {
  const [cards, setCards] = useState([]);

  const [selectedCards, setSelectedCards] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [matches, setMatches] = useState(0);
  const [array, setArray] = useState([]);
  const [matchArray, setMatchArray] = useState([]);

  useEffect(() => {
    initializeGame();
  }, []);
  useEffect(() => {
    if (array.length == 2) {
      if (array[0].value == array[1].value && array[0].id != array[1].id) {
        setMatchArray(matchArray => [
          ...matchArray,
          ...[array[0].id, array[1].id],
        ]);
        // setArray([]);
      }
      setArray([]);
    }
  }, [array]);

  const initializeGame = () => {
    const shuffledCharacters = shuffle([...characters, ...characters]);
    setCards(
      shuffledCharacters.map((character, index) => ({
        id: index,
        value: character,
      })),
    );
    setSelectedCards([]);
    setAttempts(0);
    setMatches(0);
  };

  const shuffle = array => {
    let currentIndex = array.length;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const handleCardPress = (id, value) => {
    console.log('id : ', id);
    console.log('value : ', value);
    if (cnt < 2) {
      // let temp = [...array, {value, id}];
      let temp = array.concat({value, id});
      console.log('------------------------->', temp);
      arr.push({id, value});
      // setArray([...array, {value: value, id: id}]);
      setArray(array => [...array, ...[{value, id}]]);
      console.log(arr);
      cnt = cnt + 1;
      console.log(cnt);
      // setSelectedCards([...selectedCards, {id, value}]);
      // if (selectedCards.length === 1) {
      //   setAttempts(attempts + 1);
      //   console.log("88888888",selectedCards)
      // checkForMatch(selectedCards[0].value,selectedCards[1].value,selectedCards[0].id,selectedCards[1].id);
    }
    if (cnt === 2) {
      setSelectedCards(arr);
      console.log('88888888', arr);
      checkForMatch(arr[0].value, arr[1].value, arr[0].id, arr[1].id);
      cnt = 0;
      arr = [];
    }
  };

  const checkForMatch = (value1, value2, id1, id2) => {
    console.log(value1, value2, id1, id2);

    if (value1 === value2 && id1 !== id2) {
      flipCards(id1, id2, value1, value2);
      setMatches(matches + 1);
      console.log(matches);
      if (matches + 1 === characters.length) {
        Alert.alert(
          'Congratulations!',
          `You completed the game in ${attempts} attempts!`,
          [{text: 'Play Again', onPress: initializeGame}],
        );
      }
    } else {
      setAttempts(attempts + 1);
    }
    // else {
    //   setTimeout(() => {
    //     flipCards(id1, id2,value1, value2);
    //   }, 1000);
    // }
  };

  const flipCards = (id1, id2, value1, value2) => {
    const updatedCards = cards.map(card =>
      card.id === id1 || card.id === id2 ? {...card, value: '😄'} : card,
    );
    setCards(updatedCards);
    setSelectedCards([]);
  };

  const renderCard = ({item}) => (
    // console.log('xxx', item),

    <Card
      character={item.value}
      index={item.id}
      array={array}
      matchArray={matchArray}
      onPress={() => {
        handleCardPress(item.id, item.value);
      }}
    />
  );
  // useEffect(() => {
  //   console.log('matchArray :', matchArray);
  // }, [matchArray]);

  return (
    <View style={styles.container}>
      <Text style={styles.attemptsText}>
        Attempts: {attempts} Matches: {matches}
      </Text>
      <FlatList
        data={cards}
        renderItem={renderCard}
        keyExtractor={item => item.id.toString()}
        numColumns={4}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1', // You can customize the color
  },
  attemptsText: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default HomeStack;
