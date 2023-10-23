import {
  GENERAR_QR,
  GENERAR_QR_SUCCESS,
  GENERAR_QR_ERROR
} from '../contants';

// actions creators exportados como funciones

export const generarQR = (user, history) => ({
  type: GENERAR_QR,
  payload: { user, history },
});
export const generarQRSuccess = (user) => ({
  type: GENERAR_QR_SUCCESS,
  payload: user,
});
export const generarQRError = (message) => ({
  type: GENERAR_QR_ERROR,
  payload: { message },
});
