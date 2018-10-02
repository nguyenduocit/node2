import React, { Component } from 'react';

class Product extends Component {

	// constructor(props) 
	// {
	// 	super(props);
	// 	// this.onAddToCart = this.onAddToCart.bind(this);
	// }

	// onAddToCart() 
	// {
	// 	alert(this.props.children);
	// }
	// 
	onAddToCart2 = () => 
	{
		alert(this.props.children);
	}

	render() {
		return (
			<div>
				<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
					<div className="thumbnail">
						<img  alt={this.props.name} src={this.props.image}/>
						<div className="caption">
							<h3>{this.props.children} .</h3>
							<p>
								{this.props.price}
							</p>
							<p>
								{/*<a  className="btn btn-primary" onClick = { () => {this.onAddToCart(this.props.children)} }>Mua Luôn</a>*/}

								{/*<a  className="btn btn-primary" onClick = { this.onAddToCart } >Mua Luôn</a>*/}

								<a  className="btn btn-primary" onClick = { this.onAddToCart2 } >Mua Luôn</a>
								
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Product;