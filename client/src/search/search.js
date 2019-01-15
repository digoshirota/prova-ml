import React from 'react';
import logo from '../assets/img/Logo_ML.png';
import iconsearch from '../assets/img/ic_Search.png';

export class Search extends React.Component {


	componentDidMount () {
		//link to ProductList
		var input = document.querySelector(".form input");
	  input.addEventListener("keyup", function(event) {
	    if (event.key === "Enter") {
	        var getQuery = input.value;
	        const newTo = { 
					  pathname: '/items',
					  search: '?search='
					};	
	        window.location.href = newTo.pathname+newTo.search+getQuery;
	    }
	  });
  }

  //link to ProductList
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
      <header>
      	<div className="wrapper">
				<div className="logo">
						<a href="/"><img src={logo} alt="logo"/></a>
				</div>
				<div className="busca">
				   <div className="form">	
				     	<input
				       placeholder="Nunca dejes de buscar"
				       ref={input => this.search = input}
				       onChange={this.handleInputChange}
				     	/>
				     	<button onClick={this.handleClick}><img src={iconsearch} alt="icon-search"/></button>
				   </div>
				</div>
      	</div>
      </header>  
    );
  }
}