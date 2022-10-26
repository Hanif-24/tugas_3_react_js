import React, { Component } from 'react';

class MenuKontak extends Component{
	constructor(props){
		super(props);
		this.state={
			alamat: "Jl.Swadya IV, Cipayung, Kota Jakarta Timur, DKI Jakarta 13860",
			kontak: "Kontak Kami : 0812345678"
		}
	}

	render(){
		return(
			<div>
			<center>
			<h3>{this.state.alamat}</h3>
			<h4>{this.state.kontak}</h4>
			</center>
			</div>

			)
	}
}

export default MenuKontak;