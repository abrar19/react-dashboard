import React from 'react';
import './newProduct.css'

const NewProduct = () => {
    return (
        <div className='newProduct'>
            <h1 className="addProductTitle">New Product</h1>
            <form className="addProductForm">
                <div className="addProductItem">
                <label>Image</label>
                <input type="file" id="file" />
                </div>
                <div className="addProductItem">
                <label>Name</label>
                <input type="text" placeholder="Apple Airpods" />
                </div>
                <div className="addProductItem">
                <label>Price</label>
                <input type="number" placeholder="$123" />
                </div>
                <div className="addProductItem">
                <label>Stock</label>
                <input type="text" placeholder="123" />
                </div>
                <div className="addProductItem">
                <label>Availability</label>
                <select name="availablity" id="availablity">
                    <option value="available">Available</option>
                    <option value="unavailable">Unavailable</option>
                </select>
                </div>
                <button className="addProductButton">Create</button>
            </form>
        </div>
    );
}

export default NewProduct;
