import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

function ReviewComponent() {
    const feedback = useSelector((store) => store.feedbackReducer); //getting feedback info from store
    const history = useHistory(); //navigates between pages

    const feedbackToSend = {
        feeling: feedback.feeling,
        understanding: feedback.understanding,
        support: feedback.support,
        comments: feedback.comments
    } //data packaged to post thru axios, pulled from the local store, data supplied from other components

    const submitButton = () => {
        console.log(feedbackToSend) //logging to see the data available client side before POST
        axios({
            method: 'POST',
            url: '/feedback',
            data: feedbackToSend
        }).then(response => {
            alert('feedback submitted!'); //what user sees after hitting submit
            history.push('/');
        }).catch(err => {
            console.log(err);
        })
    } //sending to server!

    return (
        <>
        <h1>review~</h1>
            <div>
                <p>feeling: {feedback.feeling}</p>
                <p>understanding: {feedback.understanding}</p>
                <p>support: {feedback.support}</p>
                <p>comments: {feedback.comments}</p>
            </div>
            <button onClick={submitButton}>SUBMIT</button>
        </>
    )
}

export default ReviewComponent //imported to App.jsx()