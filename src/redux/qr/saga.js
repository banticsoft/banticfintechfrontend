import { all, call, fork, put, takeEvery } from 'redux-saga/effects'; // takeLastest nos permite observar (Watcher) cada uno de los actions types que se estan disparando.
import { auth } from 'helpers/Firebase';
import { adminRoot, currentUser } from 'constants/defaultValues';
import { setCurrentUser } from 'helpers/Utils';
 import { loginRequest } from 'api/auth';
 import { v4 as uuid} from 'uuid'
import {
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
} from '../contants';

import {
  loginUserSuccess,
  loginUserError,
  registerUserSuccess,
  registerUserError,
  forgotPasswordSuccess,
  forgotPasswordError,
  resetPasswordSuccess,
  resetPasswordError,
} from './actions';

export function* watchLoginUser() {
  console.log("esta entrando aca #1")
  console.log(LOGIN_USER)
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(LOGIN_USER, loginWithEmailPassword); // start loginWithEmailPassword when LOGIN_USER is dispatched
}

const loginWithEmailPasswordAsync = async (email, password) => 
  // console.log("esta entrando aca #3")
  // eslint-disable-next-line no-return-await
  /* await auth
    .signInWithEmailAndPassword(email, password)
    .then((user) => user)
    .catch((error) => error); */
  // eslint-disable-next-line no-return-await
  await loginRequest({username: email, password})
  // console.log(respuesta.data)


function* loginWithEmailPassword({ payload }) { // action.payload
  console.log("esta entrando aca #2")
  const { email, password } = payload.user;
  const { history } = payload;
  try {
    const loginUser = yield call(loginWithEmailPasswordAsync, email, password); // call -> para consumir la API
    console.log(loginUser)
    const item = { uid: uuid(), ...currentUser };
    setCurrentUser(item);
    yield put(loginUserSuccess(item)); // put -> despachamos el action 
    history.push(adminRoot);
    
    /* if (!loginUser.message) {
      const item = { uid: loginUser.user.uid, ...currentUser };
      setCurrentUser(item);
      yield put(loginUserSuccess(item)); // put -> despachamos el action 
      history.push(adminRoot);
    } else {
      yield put(loginUserError(loginUser.message)); // put -> despachamos el action 
    } */
  } catch (error) {
    console.log("esta entrando a la excepcion")
    console.log(error.response.data)
    yield put(loginUserError(error.response.data[0]));
  }
}

export function* watchRegisterUser() {
  console.log("esta entrando aca #1.3")
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(REGISTER_USER, registerWithEmailPassword);
}

const registerWithEmailPasswordAsync = async (email, password) =>
  // eslint-disable-next-line no-return-await
  await auth
    .createUserWithEmailAndPassword(email, password)
    .then((user) => user)
    .catch((error) => error);

function* registerWithEmailPassword({ payload }) {
  const { email, password } = payload.user;
  const { history } = payload;
  try {
    const registerUser = yield call(
      registerWithEmailPasswordAsync,
      email,
      password
    );
    if (!registerUser.message) {
      const item = { uid: registerUser.user.uid, ...currentUser };
      setCurrentUser(item);
      yield put(registerUserSuccess(item));
      history.push(adminRoot);
    } else {
      yield put(registerUserError(registerUser.message));
    }
  } catch (error) {
    yield put(registerUserError(error));
  }
}

export function* watchLogoutUser() {
  console.log("esta entrando aca #1.2")
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(LOGOUT_USER, logout);
}

/* const logoutAsync = async (history) => {
  await auth
    .signOut()
    .then((user) => user)
    .catch((error) => error);
  history.push(adminRoot);
}; */

const logoutSync = (history) => {
  history.push(adminRoot);
};

function* logout({ payload }) {
  const { history } = payload;
  setCurrentUser();
  // yield call(logoutAsync, history);
  yield call(logoutSync, history);
}

export function* watchForgotPassword() {
  console.log("esta entrando aca #1.4")
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(FORGOT_PASSWORD, forgotPassword);
}

const forgotPasswordAsync = async (email) => {
  // eslint-disable-next-line no-return-await
  return await auth
    .sendPasswordResetEmail(email)
    .then((user) => user)
    .catch((error) => error);
};

function* forgotPassword({ payload }) {
  const { email } = payload.forgotUserMail;
  try {
    const forgotPasswordStatus = yield call(forgotPasswordAsync, email);
    if (!forgotPasswordStatus) {
      yield put(forgotPasswordSuccess('success'));
    } else {
      yield put(forgotPasswordError(forgotPasswordStatus.message));
    }
  } catch (error) {
    yield put(forgotPasswordError(error));
  }
}

export function* watchResetPassword() {
  console.log("esta entrando aca #5")
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(RESET_PASSWORD, resetPassword);
}

const resetPasswordAsync = async (resetPasswordCode, newPassword) => {
  // eslint-disable-next-line no-return-await
  return await auth
    .confirmPasswordReset(resetPasswordCode, newPassword)
    .then((user) => user)
    .catch((error) => error);
};

function* resetPassword({ payload }) {
  const { newPassword, resetPasswordCode } = payload;
  try {
    const resetPasswordStatus = yield call(
      resetPasswordAsync,
      resetPasswordCode,
      newPassword
    );
    if (!resetPasswordStatus) {
      yield put(resetPasswordSuccess('success'));
    } else {
      yield put(resetPasswordError(resetPasswordStatus.message));
    }
  } catch (error) {
    yield put(resetPasswordError(error));
  }
}

export default function* rootSaga() {
  yield all([
    fork(watchLoginUser),
    fork(watchLogoutUser),
    fork(watchRegisterUser),
    fork(watchForgotPassword),
    fork(watchResetPassword),
  ]);
}
