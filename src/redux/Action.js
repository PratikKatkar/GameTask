export const UPDATE_ARRAY = 'UPDATE_ARRAY';
export const INDEX = 'INDEX';
export const COMPAREVALUE = 'COMPAREVALUE';
export const login = () => ({
  type: 'LOGIN',
});
export const logout = () => ({
  type: 'LOGOUT',
});

export const update = newArray => ({
  type: UPDATE_ARRAY,
  payload: newArray,
});
export const dispachIndex = index => ({
  type: INDEX,
  payload: index,
});
export const compareValue = index => ({
  type: COMPAREVALUE,
  payload: index,
});
