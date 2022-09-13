import React from "react";
// import { faker } from '@faker-js/faker';

const CommentDetail = props => {
    return (
        <div className='comment'>
        <a href='/' className='avatar'>
        <img alt="avatar" src={props.avatar} height='70px' width='70px' />
        </a>
        <div className='content'>
            <a href='/' className='author' >
                {props.author}
            </a>
            <div className='metadata'>
                <span className='date'>Age: {props.age}</span>
            </div>
            <div className='text'>{props.content}</div>
        </div>
    </div>
    );
}

export default CommentDetail;