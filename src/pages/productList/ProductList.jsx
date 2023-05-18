import React, { useState } from 'react';
import './productList.css'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material'
import {productRows} from '../../dummyData'
import {Link} from 'react-router-dom'

const ProductList = () => {

    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'product', headerName: 'Product', width: 220, renderCell: (params) => {
            return (
                <div className="productListUser">
                    <img src={params.row.img} alt="" className='productListImg'/>
                    {params.row.name}
                </div>
            )
         } },
        { field: 'stock', headerName: 'Stock', width: 220 },
        { field: 'status', headerName: 'Status', width: 150, renderCell: (params) => {
            return(
                <>
                    {(params.row.status === 'available') ? <>{params.row.status}<div className="productListStatusGreenDot"></div></> : <>{params.row.status}<div className="productListStatusRedDot"></div></>} 
                </>
            )
        } },
        { field: 'price', headerName: 'Price', width: 210 },
        { field: 'action', headerName: 'Action', width: 150, sortable: false, renderCell: (params) => {
            return(
                <div className='productListButton'>
                    <Link to={'/products/'+params.row.id}>
                        <button className="productListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className='productListDelete' onClick={()=>handleDelete(params.row.id)}/>
                </div>
            )
        } }
      ];

    return (
        <div className='productList'>
            <DataGrid
                rows={data}
                columns={columns}
                initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 8 },
                },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </div>
    );
}

export default ProductList;
