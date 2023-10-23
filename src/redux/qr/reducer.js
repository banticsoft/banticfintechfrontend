import { getCurrentUser } from 'helpers/Utils';
import { isAuthGuardActive, currentUser } from 'constants/defaultValues';
import {
  GENERAR_QR,
  GENERAR_QR_SUCCESS,
  GENERAR_QR_ERROR
} from '../contants';

const INIT_STATE = {
  miqr: '',
  erro: '',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GENERAR_QR:
      return { ...state, erro: '' };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        miqr: action.payload,
        error: '',
      };
    case GENERAR_QR_SUCCESS:
      return {
        ...state,
        erro: action.payload.message,
      };
    default:
      return { ...state };
  }
};
