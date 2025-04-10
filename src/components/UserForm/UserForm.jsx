import { useState } from 'react';
import { connect } from 'react-redux';
import { setUserInfo } from '../../redux/action';

const UserForm = ({ setUserInfo }) => {
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() && status.trim()) {
            setUserInfo({ name, status });
            setName('');
            setStatus('');
        } else {
            alert('Пожалуйста, заполните оба поля.');
        }
    };

    return (
        <>
            <h2>Edit User Information</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input
                    id='name'
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                /> <br />
                <label htmlFor="name">Status: </label>
                <input
                    id='status'
                    type="text"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                />
                <br />
                <button type="submit">Save</button>
            </form>
        </>
    );
};

export default connect(null, { setUserInfo })(UserForm);
