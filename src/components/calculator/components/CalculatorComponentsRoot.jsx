import "../styles/CalculatorComponentsRoot.css";






function CalculatorComponentsRoot ({ children }) {
    return (
        <>
        <div className="c-components-s">
            <div className="c-bnts">
                {children}
            </div>
        </div>
        </>
    )
};



export default CalculatorComponentsRoot;
