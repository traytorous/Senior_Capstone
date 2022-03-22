import { Button } from 'react-bootstrap';

/* Custom button with color and size variants. 
Can also pass text and onClick to this button.
See Navigation.js for examples.
*/

const CstmButton = (props) => {
    const { variant, size, text, onClick } = props
    return (
        <>
        <style type="text/css">
            {`
            .btn {
                width: 120px;
                text-align: center;
                font-size: 1rem;
                border-radius: 20px;
                outline: none;
            }
            
            .btn:focus {
                background-color: #5b4318;
                color: white;
                outline: 0;
                box-shadow: none;
            }

            .btn-gold {
                background-color: #B9975B;
                color: white;
            }

            .btn:hover {
                background-color: #866A39;
                color: white;
                border-color: #866A39;
            }

            .btn-white {
                background-color: #FFFFFF;
                color: #B9975B;
                border-color: #B9975B;
            }

            .btn-xl {
                width: 800px;
            }
            `}
        </style>

        <Button variant={variant} size={size} onClick={onClick}>
            {text}
        </Button>
        </>
    );
};
        

export default CstmButton;