import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function SupportComponent() {

    const dispatch = useDispatch(); //director
    const history = useHistory(''); //used for moving
    const [support, setSupport] = useState(0); //setter


    //sending recorded on this page to local store, move user to next page
    const handleSupport = (event) => {
        event.preventDefault();
        dispatch({
            type: 'NEW_SUPPORT',
            payload: support
        });
        history.push('/comments')
    }

    return (
        //rendering stuff here
        <>
            <h1>HOW SUPPORTED ARE YOU FEELING?</h1>
            <form onSubmit={handleSupport}>
                <input
                    required placeholder="response"
                    onChange={(event) => setSupport(event.target.value)}
                    type="number"/>
                <button>next!</button>
            </form>
        </>
    )
}

export default SupportComponent