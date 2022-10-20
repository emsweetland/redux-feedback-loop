import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function CommentComponent() {

    const dispatch = useDispatch(); //director
    const history = useHistory(''); //used for moving
    const [comment, setComment] = useState(''); //setter



    const handleComment = (event) => {
        event.preventDefault();
        dispatch({
            type: 'NEW_COMMENT',
            payload: comment
        });
        history.push('/review')
    }

    return(
        <>
           <h1>ANYTHING YOU WANT TO SAY FOR YOURSELF?</h1>
            <form onSubmit={handleComment}>
                <input
                    placeholder="response"
                    onChange={(event) => setComment(event.target.value)}
                    type="text"/>
                <button>next!</button>
            </form>
        </>
    )

}

export default CommentComponent