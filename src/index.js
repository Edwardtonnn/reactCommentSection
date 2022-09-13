import React from 'react';
import ReactDom from 'react-dom';
import { faker } from '@faker-js/faker';
import CommentDetail from './CommentDetail';

const rootEl = document.getElementById('root');

const App = () => {
    return (
        <div className='ui container comments'>
            <CommentDetail 
            author="Ingrid" 
            age={32}
            content="Possible baby mama, though I highly doubt it.I honestly don't want it to be her."
            avatar={faker.image.avatar()}
             />
            <CommentDetail 
            author="Athziri" 
            age={23}
            content="Great person. Super funny and I like her a lot."
            avatar={faker.image.avatar()} />
            <CommentDetail 
            author="Sophia" 
            age={27}
            content="Super fun to be with. Great sex."
            avatar={faker.image.avatar()} />

        </div>
    );
}

ReactDom.render(<App />, rootEl);