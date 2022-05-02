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
            
            .btn-gold:focus {
                background-color: #5b4318;
                color: white;
                outline: 0;
                box-shadow: none;
            }

            .btn-gold {
                background-color: #B9975B;
                color: white;
            }

            .btn-red {
                background-color: #E81B1B;
                color: white;
            }

            .btn-red:hover {
                background-color: #7A0F0F;
                color: white;
            }

            .btn-red:focus {
                background-color: #7A0F0F;
                color: white;
            }

            .btn-gold:hover {
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
                width: 20em;
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