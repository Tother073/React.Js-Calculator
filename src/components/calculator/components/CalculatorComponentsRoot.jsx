import "../styles/CalculatorComponentsRoot.css";






function CalculatorComponentsRoot ({ children }) {
    return (
        <>
        <div className="c-components-s">
            <div className="c-numerics-s">
                <div className="c-bnts">
                    {children}
                </div>
            </div>
        </div>
        </>
    )
};



export default CalculatorComponentsRoot;
