import React from "react";
import { Search } from '../search/search';


export class Detail extends React.Component {

	state = {
      lists: []
  };
  state2 = {
      lists2: []
  };

  componentDidMount() {
  	
    this.callApi()
      .then(res => {
        var value = res.price;
        var result = value.toLocaleString('es-ar', {
            style: 'currency',
            currency: 'ARS',
            minimumFractionDigits: 0
        });
        var id = res.id;
        var name = res.title;
        var price = result;
        var sold = res.sold_quantity;
        var mainImg = res.pictures[0].secure_url;
        var condition =  res.condition;

        var newArray =[id,name,price,sold,mainImg,condition];
        
        this.state = newArray;
        const newState = Object.assign({}, this.state, {
          lists: newArray
        });
        this.setState(newState);
        
      })
      .catch(err => console.log(err));

    this.callApi2()
      .then(res => {
        var plain_text = res.plain_text;

        var newArray =[plain_text];
        this.state2 = newArray; 
        const newState = Object.assign({}, this.state2, {
          lists2: newArray
        });
        this.setState(newState);

      })
      .catch(err => console.log(err));

   


   

  }

  callApi = async () => {
  	//get url from search
		var getUrl = window.location.pathname;
		var query = getUrl.replace('/items/','');

    const response = await fetch("https://api.mercadolibre.com/items/"+query);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  callApi2 = async () => {
    //get url from search
    var getUrl2 = window.location.pathname;
    var query2 = getUrl2.replace('/items/','');

    const response2 = await fetch("https://api.mercadolibre.com/items/"+query2+'/description');
    const body2 = await response2.json();
    

    if (response2.status !== 200) throw Error(body2.message);

    return body2;
  };



  render() {
    return (
      
    <div>
		  <Search />
		  <div className="wrapper-list">
       
			  <div className="breadcumb">
			  	<a href="/">Home ></a>  <span>{this.state.lists[1]}</span>
			  </div>
			</div>

		  <div className="wrapper-list">
		  	
         <div>
          <div className="detail">
            <div className="img-product"> 
              <img src={this.state.lists[4]} alt={this.state.lists[1]}/>
            </div>
            <div className="price"> 
              <div className="qtde">
                <p>{this.state.lists[5]} - {this.state.lists[3]} vendidos</p>
              </div>
              <h2>{this.state.lists[1]}</h2>
              <h3>{this.state.lists[2]}</h3>
              <div className="cta">
                <button>Comprar</button>
              </div>
            </div>
            
          </div>
          <div className="description">
            <h3>Descripción del producto</h3>
            <p>{this.state2[0]} </p>
          </div>
        </div>
		  </div>

		</div>
        
    );
  }
}
