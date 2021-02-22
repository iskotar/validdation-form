import React, {useState} from 'react';
import Form from './components/Form'
import Message from './components/Message'

function App() {
    const [statusMessage, setStatusMessage] = useState('');

        return (<div>
            <Form setStatusMessage={setStatusMessage}/>
            <Message status={statusMessage}/>
        </div>);
}

export default App;
