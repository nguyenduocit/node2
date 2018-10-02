import React, { Component } from 'react';
import Header from './component/Header';
// import Product from './component/Product';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products : [
                {
                    id : 1,
                    name :'Iphone 6 16 G',
                    price :'120000000',
                    image : 'https://hinhanhdepvai.com/wp-content/uploads/2017/05/anh-girl-xinh.jpg',
                    status : true
                },
                {
                    id : 2,
                    name :'Iphone 6 24 G',
                    price :'130000000',
                    image : 'https://hinhanhdepvai.com/wp-content/uploads/2017/05/anh-girl-xinh.jpg',
                    status : true
                },
                {
                    id : 3,
                    name :'Iphone 6 32 G',
                    price :'140000000',
                    image : 'https://hinhanhdepvai.com/wp-content/uploads/2017/05/anh-girl-xinh.jpg',
                    status :false
                },
                {
                    id : 4,
                    name :'Iphone 6 64 G',
                    price :'150000000',
                    image : 'https://hinhanhdepvai.com/wp-content/uploads/2017/05/anh-girl-xinh.jpg',
                    status : true
                }
            ],
            isAtive : true
        }
    }

    onClick() {
        console.log('click vào day hihi ');
    }

    onAddProduct = () => 
    {
        console.log(this.refs.name.value);
    }

    onSetState =  () => {
       this.setState({
        isAtive : !this.state.isAtive
       });
    }


    render() {
        // var  products = [
        //     {
        //         id : 1,
        //         name :'Iphone 6 16 G',
        //         price :'120000000',
        //         image : 'https://hinhanhdepvai.com/wp-content/uploads/2017/05/anh-girl-xinh.jpg',
        //         status : true
        //     },
        //     {
        //         id : 2,
        //         name :'Iphone 6 24 G',
        //         price :'130000000',
        //         image : 'https://hinhanhdepvai.com/wp-content/uploads/2017/05/anh-girl-xinh.jpg',
        //         status : true
        //     },
        //     {
        //         id : 3,
        //         name :'Iphone 6 32 G',
        //         price :'140000000',
        //         image : 'https://hinhanhdepvai.com/wp-content/uploads/2017/05/anh-girl-xinh.jpg',
        //         status :false
        //     },
        //     {
        //         id : 4,
        //         name :'Iphone 6 64 G',
        //         price :'150000000',
        //         image : 'https://hinhanhdepvai.com/wp-content/uploads/2017/05/anh-girl-xinh.jpg',
        //         status : true
        //     }
        // ];
        
        // var element = products.map((product, index) => {
        //         let result = '';
        //         if (product.status) {
        //             result = <Product 
        //                     key = {product.id}
        //                     price = {product.price}
        //                     image = {product.image}
        //                 >
        //                     {product.name} 
        //                 </Product>
        //         }
        //         return  result;
        // });
        
        var element = this.state.products.map((product, index) => {
                let result ='';
                if (product.status) {
                    result = <tr key ={index}>
                                <td>{index}</td>
                                <td>{product.name}</td>
                                <td><span className="label label-success">{product.price}</span></td>
                            </tr>
                }
                return  result;
        });
        return (
            <div>
                <Header />
                <div className="container" >
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="panel panel-danger">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Thêm sản phẩm</h3>
                                </div>
                                <div className="panel-body">
                                    <div className="form-group">
                                        <label >label</label>
                                        <input type="text" className="form-control" ref="name"/>
                                    </div>
                                    <button type="submit" className="btn btn-primary" onClick = { this.onAddProduct }>Lưu</button>
                                </div>
                            </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                       
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <button type="button" className="btn btn-warning" onClick = 
                            {this.onClick}> Click Me</button>
                        </div>
                    </div>
                    <hr />
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên sản phẩm</th>
                                <th>Giá</th>
                            </tr>
                        </thead>
                        <tbody>{element}</tbody>
                    </table>
                    <button type="button" className="btn btn-success" onClick = {this.onSetState}>
                        Active {this.state.isAtive ? "true"  : "false"}
                    </button>
                </div>
            </div>
        );
    }
}

export default App;
