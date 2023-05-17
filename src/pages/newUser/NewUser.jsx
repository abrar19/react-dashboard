import React from 'react';
import './newUser.css'

const NewUser = () => {
    return (
        <div className='newUser'>
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder='ex: john'/>
                </div>

                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder='ex: John Smith'/>
                </div>

                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder='ex: john@email.com'/>
                </div>

                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder='Password'/>
                </div>

                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder='ex: +49 123 456 789'/>
                </div>

                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder='ex: Chemnitz | Germany'/>
                </div>

                <div className="newUserItem">
                    <label>Gender</label>

                    <div className="newUserGender">
                        <input type="radio" name='gender' id='male' value='male'/>
                        <label htmlFor="male">Male</label>

                        <input type="radio" name='gender' id='female' value='female'/>
                        <label htmlFor="female">Female</label>

                        <input type="radio" name='gender' id='others' value='others'/>
                        <label htmlFor="others">Ohters</label>
                    </div>
                </div>

                <div className="newUserItem">
                    <label>Active</label>
                    <select className='newUserSelect' name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    );
}

export default NewUser;
