import React from 'react';
import './widgetSm.css'
import {Visibility} from '@mui/icons-material'

const WidgetSm = () => {
    return (
        <div className='widgetSm'>
            <h3 className="widgetSmTitle">New Members</h3>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/2311710/pexels-photo-2311710.jpeg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon'/> Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/2311710/pexels-photo-2311710.jpeg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon'/> Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/2311710/pexels-photo-2311710.jpeg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon'/> Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/2311710/pexels-photo-2311710.jpeg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon'/> Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/2311710/pexels-photo-2311710.jpeg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon'/> Display
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default WidgetSm;
