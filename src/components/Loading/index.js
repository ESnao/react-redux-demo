import React from 'react';
import PropTypes from 'prop-types';

const Index = (props) => {
	const { loading=false, text } = props
  return loading?(
  	<div className="bxs-loading">
  		<div className="bxs-loading-snake"></div>
  		<div className="bxs-loading-text">{text}</div>
  	</div>
  ):null
}

Index.propTypes = {
	loading: PropTypes.bool,
	text: PropTypes.string
}

export default Index;