import React from "react";
import { Bundle } from "utils";

const createComponent = (props, call) => {
  return (
    <Bundle load={cb=>{call(cb)}}>{Component => <Component {...props} />}</Bundle>
  );
};

/*layout*/
const Layout = props => createComponent(props, cb=>{
  require.ensure([], require => {
    cb(require('views/Layout'));
  })
});

/*滞留物品处理*/
const Home = props => createComponent(props, cb=>{
  require.ensure([], require => {
    cb(require('views/Home/Index'));
  })
});

/*404页面*/
const Err = props => createComponent(props, cb=>{
  require.ensure([], require => {
    cb(require('components/NotFoundComponent/Index'));
  })
});


const config = [
  { path: "/", 
    component: Layout,
    exact: false,
    routes: [{
      path: 'home',
      component: Home,
      name: '首页',
      exact: true
    }]
  },

  // 404未找到
  { component: Err }
];

export default config;
