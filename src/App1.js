import React, { Component } from 'react';
import Header from './component/Header';


class App extends Component {

    showInForProduct(product) {
        if (product.status) {
            return <h3>
                name : {product.name}
                price : {product.price}
                active : { product.status ? "active" : " No"}
                </h3>
        }
    }
    render() {
        var a = 5;
        var name = 'duocnvoit';
        var b = 5;

        var product = {
            id : 1,
            name : 'I phone',
            price : 2000000,
            status: true
        }

        var users = [
            {
                id: 1,
                name: 'A',
                age: 18
            },
            {
                id: 2,
                name: 'B',
                age: 20
            },
            {
                id: 3,
                name: 'C',
                age: 29
            },
            {
                id: 4,
                name: 'D',
                age: 17
            },

        ];

        var element = users.map((user, index) => {
            return <div key={index}>
                <h2>Ten : {user.name}</h2>
                <p> Age : {user.age}</p>
            </div>
        });
        return (
            <div className='container'>
                <Header></Header>

                <h2>name : { name }</h2>
                <p> a+b = {a + b }</p>
                
                {this.showInForProduct(product)}

                {element}
            </div>
        );
    }
}

export default App;
