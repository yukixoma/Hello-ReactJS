import React, { Component } from 'react';
import './css/main.css';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products : [
                {
                    name: "Iphone",
                    image: "https://staticshop.o2.co.uk/product/images/bau-35251-iphone-8-plus-space-grey-sku-header-master-130917.png?cb=0786701511f1bc4897e12bf1798f01af",
                    price: 20000000,
                },
                {
                    name: "Samsung",
                    image: "https://cdn.tgdd.vn/Products/Images/42/78479/samsung-galaxy-s8-4-400x460-400x460.png",
                    price: 18000000,
                },
                {
                    name: "LG",
                    image: "https://cdn.homeshopping.pk/product_images/q/920/image-1__88599_zoom.png",
                    price: 16000000,
                },
                {
                    name: "Sony",
                    image: "https://cellphones.com.vn/media/catalog/product/cache/7/image/500x500/9df78eab33525d08d6e5fb8d27136e95/x/z/xzs-blue.png",
                    price: 15000000
                }
            ],
            isShow: false,
            formValue: {}
        };
    }
    onShow = () => {
        this.state.isShow? this.setState({ isShow: false}) : this.setState({ isShow: true})
    }
    onAddToCart = (text) => {
        alert(text);
    }

    onHandleChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        let update = this.state.formValue;
        update[name] = value;
        this.setState({formValue: update}); 
    } 

    onHandleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            products: this.state.products.concat(this.state.formValue)}
            ,()=> {
                console.log(this.state.products);
            }
        );
    }
    render() {
        let main = [];
        for (let i = 0; i < this.state.products.length; i++) {
            main
                .push(
                    <div className="col-lg-4" key={i}>
                        <div className="card text-center">
                            <img className="card-img-top" src={this.state.products[i].image}  alt=""/>
                            <div className="card-block">
                                <h3 className="card-tittle"> {this.state.products[i].name} </h3>
                                <p> {this.state.products[i].price} </p>
                                <button className="btn btn-outline-primary" 
                                    onClick={ () => { this.onAddToCart(this.state.products[i].name) } }> 
                                        Mua ngay
                                </button>
                            </div>
                        </div>
                        <br/>
                    </div>
                )
        };
      return (
        <div className="text-center">
            <form className="col-lg-8 offset-lg-2" onSubmit = { this.onHandleSubmit}>
                <div className="form-group row">
                    <label htmlFor="" className="col-2 col-form-label" > Name </label>
                    <div className="col-10">
                        <input 
                            type="text" 
                            className="form-control" 
                            name="name"
                            onBlur = { this.onHandleChange }
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="" className="col-2 col-form-label" > Price </label>
                    <div className="col-10">
                        <input 
                            type="text" 
                            className="form-control" 
                            name="price" 
                            onBlur = {  this.onHandleChange }
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="" className="col-2 col-form-label"> Image URL </label>
                        <div className="col-10">
                            <input 
                                type="text" 
                                className="form-control" 
                                name="image" 
                                onBlur = {  this.onHandleChange }
                            />
                        </div>
                </div>
                <button type="submit" className="btn btn-primary mr-2" > 
                    Add 
                </button>
                <button type="reset" className="btn btn-warning mr-2" >
                    Clear
                </button>
                
            </form> 
            <div style={{marginTop:10}}>
                <button className="btn btn-danger" onClick={ this.onShow }> 
                    {this.state.isShow? "Hide": "Show"}
                </button>
            </div>
            <div className="row" style={{marginTop:10}} >
                {this.state.isShow? main : null}          
            </div>
            
            
        </div>
      );
    };
  }
  
  export default Main;
  