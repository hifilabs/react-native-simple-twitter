/* client */
import Client from './client';
import TWLoginButton from './Components/Button';
import {
  decodeHTMLEntities,
  getRelativeTime,
} from './lib';

import useTwitter from './hooks';

/* export Client as default */
export default Client;

/* export other */
export {
  TWLoginButton,
  decodeHTMLEntities,
  getRelativeTime,
  useTwitter,
};
