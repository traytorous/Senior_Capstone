import { Button } from 'react-bootstrap';

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
            }
            
            .btn-gold {
                background-color: #B9975B;
                color: white;
            }

            .btn-gold:hover {
                background-color: #866A39;
                color: white;
            }

            .btn-white {
                background-color: #FFFFFF;
                color: #B9975B;
                border-color: #B9975B;
            }

            .btn-white:hover {
                background-color: #B9975B;
                color: white;
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