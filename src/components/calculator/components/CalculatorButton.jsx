import "../styles/CalculatorButton.css"





function CalculatorButton ({ label, ...props }) {
    return (
        <>
        <button
            className={`c-bnt-s`}
            {...props}
        >
            {label}
        </button>
        </>
    )
};



export default CalculatorButton;
