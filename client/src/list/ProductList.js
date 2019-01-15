import React from "react";
import List from "./List";
import { Search } from '../search/search';


export class ProductList extends React.Component {

	state = {
    	lists: []
	};

  componentDidMount() {
  	
    this.callApi()
      .then(res => {
       
        const newLists = res.results.slice(0, 4).map(c => {
        	var value = c.price;
        	var result = value.toLocaleString('es-ar', {
					    style: 'currency',
					    currency: 'ARS',
					    minimumFractionDigits: 0
					});

					var valueId = c.id;
					var resultId = "/items/"+valueId;
          return {
            id: resultId,
            name: c.title,
            thumbnail: c.thumbnail,
            price: result,
            address: c.address
          };
        });
        
        this.state = newLists;

        const newState = Object.assign({}, this.state, {
          lists: newLists
        });
        this.setState(newState);
      })
      .catch(err => console.log(err));

   

  }

  callApi = async () => {
  	//get url from search
		var getUrl = window.location.search;
		var query = getUrl.replace('?search=','');

    const response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q="+query);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  //link to detail product
  handleClick() {  
    var input = document.querySelector(".form input");
    var getQuery = input.value;
    const newTo = { 
		  pathname: '/items',
		  search: '?search='
		};	
	 	
	 	window.location.href = newTo.pathname+newTo.search+getQuery;
	}

  render() {
    return (
      
    <div>
		  <Search />
		  <div className="wrapper-list">
			  <div className="breadcumb">
			  	<a href="/">Home ></a>  <span>{ window.location.search.replace('?search=','') }</span>
			  </div>
			</div>

		  <div className="wrapper-list">
		  	{this.state.lists.map(c =>  <List key={c.id} id={c.id} thumbnail={c.thumbnail.replace('-I','-O')} name={c.name}  price={c.price} address= {c.address}  onClick={this.handleClick}/> )}
		  </div>

		</div>
        
    );
  }
}
