export const SET_NAME = "SET_NAME";
export const SET_AGE = "SET_AGE";

export function setName(name) {
  return {
    type: SET_NAME,
    payload: name
  };
}

export function setAge(age) {
  return {
    type: SET_AGE,
    payload: age
  };
}
