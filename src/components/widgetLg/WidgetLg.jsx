import React from 'react';
import './widgetLg.css'

const WidgetLg = () => {

    const Button = ({type}) => {
        return <button className={'widgetLgButton ' + type}> {type} </button>
    }

    return (
        <div className='widgetLg'>
            <h3 className="widgetLgTitle">Latest transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className='widgetLgTr'>
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/3620769/pexels-photo-3620769.jpeg" alt="" className='widgetLgImg' />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">15 May 2023</td>
                    <td className="widgetLgAmount">$102.33</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>

                <tr className='widgetLgTr'>
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/3620769/pexels-photo-3620769.jpeg" alt="" className='widgetLgImg' />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">15 May 2023</td>
                    <td className="widgetLgAmount">$102.33</td>
                    <td className="widgetLgStatus">
                        <Button type="Declined" />
                    </td>
                </tr>

                <tr className='widgetLgTr'>
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/3620769/pexels-photo-3620769.jpeg" alt="" className='widgetLgImg' />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">15 May 2023</td>
                    <td className="widgetLgAmount">$102.33</td>
                    <td className="widgetLgStatus">
                        <Button type="Pending" />
                    </td>
                </tr>

                <tr className='widgetLgTr'>
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/3620769/pexels-photo-3620769.jpeg" alt="" className='widgetLgImg' />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">15 May 2023</td>
                    <td className="widgetLgAmount">$102.33</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default WidgetLg;
