import "./styles/CalculatorDisplay.css";






function viewerFormatter(viewer) {
    let maxCharacters = 13;
    let formattedViewer = '';

    for (let i = 0; i < viewer.length; i += maxCharacters) {
        formattedViewer += viewer.slice(i, i + maxCharacters) + '\n';
    }

    return formattedViewer;
};

function CalculatorDisplay ({ viewer }) {
    return (
        <>
            <div className="c-display-s">
                <span id="expression">{viewerFormatter(viewer)}</span>
            </div>
        </>
    )
};


export default CalculatorDisplay;