import React from "react";
import PropTypes from "prop-types";
//import "./List.sass";

function List(props) {
  return (
  	<a href={props.id}>
	    <div className="list">
	    	<div className="img-product"> 
	    		<img src={props.thumbnail} alt={props.price}/>
	    		
	    	</div>
	    	<div className="price"> 
	    		<h3>{props.price}</h3>
	    		<h2>{props.name}</h2>
	    	</div>
	    	<div className="location">
	    		<h3>{props.address.state_name}</h3>
	    	</div>
	       	<hr/>
	    </div>
  	</a>
  		
  );
}

List.propTypes = {
	id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  address: PropTypes.object.isRequired
};

export default List;