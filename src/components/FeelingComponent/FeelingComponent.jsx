import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

function FeelingComponent() {

    const dispatch = useDispatch(); //director
    const history = useHistory(''); //used for moving
    const [feeling, setFeeling] = useState(0); //setter


    //sending 'feeling' recorded on this page to local store, move user to next page
    const handleFeeling = (event) => {
        event.preventDefault();
        dispatch({
            type: 'NEW_FEELING',
            payload: feeling
        });
        history.push('/understanding')
    }

    return (
        <>
            <h1>HOW ARE YOU FEELING</h1>
            <form onSubmit={handleFeeling}>
                <input
                    required placeholder="response"
                    onChange={(event) => setFeeling(event.target.value)}
                    type="number"/>
                <button>next!</button>
            </form>
        </> //end wrapper
    ) //end return
} //end component

export default FeelingComponent