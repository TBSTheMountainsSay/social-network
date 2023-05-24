import { authAPI, profileAPI } from '../api/api';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_ERROR_MESSAGE = 'auth/SET_ERROR_MESSAGE';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  errorMessage: null,
  photos: {
    small: null,
    large: null,
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };

    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.errorMessage,
      };

    default:
      return state;
  }
};

export const setErrorMessage = (errorMessage) => {
  return {
    type: SET_ERROR_MESSAGE,
    errorMessage,
  };
};

export const setAuthUserData = (
  userId,
  email,
  login,
  isAuth,
  photos,
  fullName
) => {
  return {
    type: SET_USER_DATA,
    data: { userId, email, login, isAuth, photos, fullName },
  };
};

export const getAuthUserData = () => async (dispatch) => {
  const data = await authAPI.authMe();

  if (data.data.resultCode === 0) {
    let { id, email, login } = data.data.data;
    return profileAPI.getProfile(id).then((data) => {
      dispatch(
        setAuthUserData(
          id,
          email,
          login,
          true,
          data.data.photos,
          data.data.fullName
        )
      );
    });
  }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
  const data = await authAPI.login(email, password, rememberMe);

  if (data.data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    dispatch(setErrorMessage('Incorrect Email or Password!'));
  }
};

export const logout = () => async (dispatch) => {
  const data = await authAPI.logout();

  if (data.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false, null));
  }
};

export default authReducer;
