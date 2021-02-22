import React from 'react';

const Message = ({status}) => {
  const message = status ? 'Form is Complete!' : 'Form is Incomplete!'

    return (
        <div>
            <h3 className="text-center message">{message}</h3>
        </div>
    )
};

export default Message;
