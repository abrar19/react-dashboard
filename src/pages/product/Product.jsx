import React from 'react';
import './product.css'
import { Link } from 'react-router-dom';
import Chart from '../../components/chart/Chart'
import {productData} from '../../dummyData'
import {Publish} from '@mui/icons-material'

const Product = () => {
    return (
        <div className='product'>
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to='/newProduct'>
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey='Sales' title='Sales Performance'/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg" alt="" className="productInfoImg" />
                        <span className="productName">Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">ID:</span>
                            <span className="productInfoValue">1</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">Sales:</span>
                            <span className="productInfoValue">$153</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">Availability:</span>
                            <span className="productInfoValue">Available</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">Stock:</span>
                            <span className="productInfoValue">12</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder='Apple Airpods' />
                        <label>Availability</label>
                        <select name="avilability" id="availability">
                            <option value="available">Available</option>
                            <option value="Unavailable">Unavailable</option>
                        </select>
                        <label>Stock</label>
                        <input type="text" placeholder='12' />
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg" alt="" className="productUploadImg" />
                            <label htmlFor="file">
                                <Publish />
                            </label>
                            <input type="file" id='file' style={{display: 'none'}}/>
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Product;
