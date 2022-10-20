import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

function UnderstandingComponent() {

    const dispatch = useDispatch(); //director
    const history = useHistory(''); //used for moving
    const [understanding, setUnderstanding] = useState(0); //setter


    //sending 'feeling' recorded on this page to local store, move user to next page
    const handleUnderstanding = (event) => {
        event.preventDefault();
        dispatch({
            type: 'NEW_UNDERSTANDING',
            payload: understanding
        });
        history.push('/support')
    }

    return (
        //rendering stuff hrer
        <>
            <h1>HOWS YOUR UNDERSTANDING</h1>
            <form onSubmit={handleUnderstanding}>
                <input
                    required placeholder="response"
                    onChange={(event) => setUnderstanding(event.target.value)}
                    type="number"/>
                <button>next!</button>
            </form>
        </>
    )
}

export default UnderstandingComponent