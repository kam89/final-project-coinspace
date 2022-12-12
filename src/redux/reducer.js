import { coinsReducer } from 'redux/coins/reducer';
import { settingsReducer } from './settings/reducer';

export const rootReducer = {
  coins: coinsReducer,
  settings: settingsReducer,
};
