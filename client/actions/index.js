export const currentUser = (state = {}, action) => {
  switch (action.type) {
    case "SET_USER":
      console.log("id of the connected user", action?.payload?.name);
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
      };
    case "LOG_OUT":
      console.log("id of the disconnected user", state?.user?.name);
      return {
        ...state,
        user: {},
        loggedIn: false,
      };
    default:
      return state;
  }
};

export const homePage = (state = {}, action) => {
  switch (action.type) {
    case "HOME_PAGE":
      console.log("inside home page");
      return {
        ...state,
      };
    default:
      return state;
  }
};

export const itemClickState = (state = {}, action) => {
  switch (action.type) {
    case "ITEM_CLICK":
      console.log("item selectionnee dans le menu", action?.payload?.name);
      return {
        ...state,
        name: action.payload,
      };

    default:
      return state;
  }
};

export const addFormState = (state = {}, action) => {
  switch (action.type) {
    case "ADD_FORM":
      console.log("Formulaire ajoute avec succes");
      return {
        ...state,
      };
    default:
      return state;
  }
};

export const idSelectedState = (state = {}, action) => {
  switch (action.type) {
    case "ITEM_SELECTED":
      console.log("ID of selected item", action?.payload?.name);
      return {
        ...state,
        name: action.payload,
      };

    default:
      return state;
  }
};
