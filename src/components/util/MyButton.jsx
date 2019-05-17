import React from 'react';
import Button from '@material-ui/core/Button'

const MyButton = (props) => {
    return (
        <Button
            href={props.link}
            target={props.target}
            variant="contained"
            size="large"
            style={{
                background: props.bck,
                color: props.color,
                margin: '20px',
                padding: '10px',

            }}
        >
        {props.text}
        </Button>
    );
};

export default MyButton;