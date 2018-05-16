import React from 'react';
import { WhiteSpace } from 'antd-mobile';

const Index = (props) => {
	const { text } = props;
  return (
  	<div>
	  	<WhiteSpace size="lg"/>
	    <div className="bxs-nodata">{text?text:'暂无数据'}</div>
	    <WhiteSpace size="lg"/>
    </div>
  )
}

export default Index;