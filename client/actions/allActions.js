export const setUser = (userObj) => {
  return {
    type: "SET_USER",
    payload: userObj,
  };
};
export const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};

export const homePage = () => {
  return {
    type: "HOME_PAGE",
  };
};

export const itemClick = (name) => {
  return {
    type: "ITEM_CLICK",
    payload: name,
  };
};

export const addForm = (name) => {
  return {
    type: "ADD_FORM",
  };
};

export const itemSelect = (name) => {
  return {
    type: "ITEM_SELECTED",
    payload: name,
  };
};
