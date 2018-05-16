import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { NavBar } from 'antd-mobile';
import { Main, Loading } from 'components';

import './Index.less';

class Index extends React.Component {
	constructor(props) {
    super(props);
    /*方法绑定*/
    /*状态初始化*/
    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    setTimeout(()=>{
      this.setState({
        loading: false
      });
    }, 1500);
  }
  render() {
    const { loading } = this.state;
    return (
      <div>
        <NavBar
          className="bxs-header"
          mode="dark"
        >首页</NavBar>
        <Main>
          <div className="bxs-home">
            <div className="bxs-panel-list">
              <div className="bxs-panel-item">
                <div className="bxs-panel-title">
                  <div className="bxs-panel-name">demo</div>
                  <div className="bxs-panel-extra" style={{color: '#999'}}>编号</div>
                </div>
                <div className="bxs-panel-body">
                  <div className="bxs-text">
                    <div className="bxs-label">text</div>
                    <div className="bxs-value">3</div>
                  </div>
                </div>
              </div>
              <Loading loading={loading}/>
            </div>
          </div>
        </Main>
      </div>
    );
  }
}

Index.propTypes = {
  location: PropTypes.object
}

export default Index;