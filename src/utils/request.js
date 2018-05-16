import axios from "axios";
import qs from "qs";
import Cookies from "js-cookie";
import { Toast } from 'antd-mobile';

// axios.defaults.baseURL = "/m";
axios.defaults.baseURL = '/';

const transformRequest = [
  function(data) {
    data = qs.stringify(
      Object.assign({}, data, {
        __mt_token_: Cookies.get("__mt_token_")
      }), { allowDots: true }
    );
    return data;
  }
];

const request = ({ url, method, data = {}, params = {} }) => {
  const option = {
    method: method.toLocaleUpperCase(),
    url,
    data,
    params,
    transformRequest
  };
  return new Promise((resolve, reject) => {
    axios(option)
      .then(response => {
        const { code, msg } = response.data;
        if (code == 1) {
          return resolve({
            ...response.data
          });
        }
        Toast.info(msg, 1.5);
        reject({ code, msg });
      })
      .catch(err => {
        if (err.response.status === 403) {
          const from = `${window.location.hash.replace("#", "")}`;
          return window.location.href = `${window.location.origin}/#/login?from=${from}`;
        }
        reject({ msg: "服务器错误，请联系管理员！", err });
      });
  });
};

request.get = (url, data) => request({ url, method: 'GET', params: data });
request.post = (url, data) => request({ url, method: 'POST', data });
request.put = (url, data) => request({ url, method: 'PUT', data });
request.delete = (url, data) => request({ url, method: 'DELETE', data });
request.patch = (url, data) => request({ url, method: 'PATCH', data });

export default request;