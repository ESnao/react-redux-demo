import React from 'react';
import PropTypes from 'prop-types';
import { TabBar } from 'antd-mobile';

class Index extends React.Component {
  constructor(props) {
    super(props);
    const { hidden=true, activeItem } = this.props;
    this.state = {
      activeItem,
      hidden,
    };

    this.handleClickItem = this.handleClickItem.bind(this);
  }

  handleClickItem(val) {
    const { tabBarParams } = this.props; 

    const { handleChange } = tabBarParams;
    this.setState({
      activeItem: val,
    });
    handleChange(val)
  }

  render() {
    const { className, tabItems, tabBarParams } = this.props;
    return (
      <div className={className}>
        <TabBar
          {...tabBarParams}
          hidden={this.state.hidden}
        >
        {
          tabItems.map(item => <TabBar.Item
            title={item.name}
            key={item.key}
            icon={item.icon}
            selectedIcon={item.selectedIcon}
            selected={this.state.activeItem === item.key}
            onPress={() => {
              this.handleClickItem(item.key);
            }}
          >
          </TabBar.Item>)
        }
        </TabBar>
      </div>
    );
  }
}

Index.propTypes = {
  hidden: PropTypes.bool,
  tabItems: PropTypes.array,
  activeItem: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  tabBarParams: PropTypes.object
}

export default Index;