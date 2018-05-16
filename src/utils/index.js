import Bundle from './Bundle';
import Cookies from 'js-cookie';
import request from './request';

const trim = str => str?str.replace(/\s+/g,""):str

export {
  Bundle,
  Cookies,
  request,
  trim
};
