import {COMPAREVALUE, INDEX, UPDATE_ARRAY} from './Action';


const initialState = {
  isLoggedIn: false,
  number: 10,
  matches: [],
  compare: [],
  myArray: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {...state, isLoggedIn: true};
    case 'LOGOUT':
      return {...state, isLoggedIn: false};
    case UPDATE_ARRAY:
      return {
        ...state,
        myArray: action.payload,
      };
    case INDEX:
      console.log(state.matches);
      return {
        ...state,
        matches: [...state.matches, action.payload],
      };
    case COMPAREVALUE:
      // if (!state.compare.includes(action.payload.value)) {
      // console.log('line35');
      // state.compare.push(action.payload);
      // console.log("action.paylod : ",state.compare)
      // console.log("state.matches : ",state.matches)
      console.log('state.matches : ', action.payload);
      // return {
      //   ...state,
      //   matches: [...state.matches, action.payload.index],
      //   compare: [],
      // };
      if (state.compare.length == 2) {
        console.log('line38');
        console.log('line39', state.compare[0].value);
        console.log('line40', state.compare[1].value);
        if (state.compare[0].value == state.compare[1].value) {1
          console.log('line42');
          // if (
          //   !state.matches.includes(state.compare[0]) &&
          //   !state.matches.includes(state.compare[1])
          // ) {
          console.log('reached');
          console.log('0 : ', state.compare[0].index);
          console.log('1 : ', state.compare[1].index);
          let temp = state.matches.concat([
            state.compare[0].index,
            state.compare[1].index,
          ]);
          console.log('temp : ', temp);
          console.log('state.compare : ', state.compare);
          console.log('state.match : ', state.matches);
          return {
            ...state,
            // matches: [state.matches.concat([...state.compare[0].index])],
            matches: [
              ...state.matches,
              state.compare[0].index,
              state.compare[1].index,
            ],
            compare: [],
          };

          // }
        } else {
          return state;
        }
      } else {
        return state;
      }
    // }
    default:
      return state;
  }
};

export default authReducer;
