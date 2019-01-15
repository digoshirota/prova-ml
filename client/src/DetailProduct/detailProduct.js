import React from "react";
import PropTypes from "prop-types";


function DetailProduct(props) {
  return (
    <div>

      <div className="detail">
      	<div className="img-product"> 
      		<img src={props.mainImg} />
      	</div>
      	<div className="price"> 
          <div className="qtde">
            <p>{props.condition} - {props.sold_quantity} vendidos</p>
          </div>
          <h2>{props.title}</h2>
      		<h3>{props.price}</h3>
      	</div>
      	<div className="cta">
      		<button>Comprar</button>
      	</div>
      </div>
      <div className="description">
        <h3>Descripción del producto</h3>
      </div>
    </div>

  );
}

DetailProduct.propTypes = {
  name: PropTypes.string.isRequired,
  mainImg: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  condition: PropTypes.string.isRequired,
  sold: PropTypes.number.isRequired

};

export default DetailProduct;