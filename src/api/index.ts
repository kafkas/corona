import * as firebase from 'firebase';
import config from './config';

export { User, UserInfo } from 'firebase';

export function initialize() {
  if(!firebase.apps.length) {
    return firebase.initializeApp(config);
  }
}

export * from './auth';
export * from './clusters';
export * from './config';
export * from './database';
