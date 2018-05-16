import React from 'react';
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

class Index extends React.Component {
  constructor(props) {
    super(props);
    /*方法绑定*/
    /*初始化状态*/
    this.state = {

    }
  }
  
  componentDidMount() {
    console.log('进入Layout页面...', this.props);
    const { location, history, globel } = this.props;
    if(location.pathname === '/') {
      history.replace('/home');
    }
  }
  render() {
    const { routes, match, location } = this.props;
    const { tabItems, tabBarParams } = this.state;
    return (
      <div className={`bxs-layout bxs-layout-header-fixed`}>
        <Switch>
        {routes.map((route, i) => {
          const { exact, path } = route;
          return (
            <Route
              path={`${match.path}${path}`}
              exact={exact}
              key={path}
              routes={routes}
              render={props => (
                <route.component {...props} routes={route.routes} />
              )}
            />
          );
        })}
        </Switch>
      </div>
    );
  }
}

export default connect(state=>state)(Index);