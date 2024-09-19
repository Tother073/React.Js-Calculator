import { Calculator } from "./calculator";
import { useEffect, useState } from "react";






const operators = {
    "op-per": ["%", "/ 100"],
    "op-div": ["÷", "/"],
    "op-mul": ["x", "*"],
    "op-sub": ["-", "-"],
    "op-sum": ["+", "+"],
    "op-com": [".", "."]
};


function Widget () {

    const [value, setValue] = useState("");
    const [viewer, setViewer] = useState("");
    const [expression, setExpression] = useState("");

    useEffect(() => {
        if (!value) return;

        const isOperator = !!operators[value];
        if (isOperator && viewer.endsWith(operators[value][0])) return;
        
        let newViewer = viewer + (isOperator ? String(operators[value][0]) : value);
        if (value.includes("0") && newViewer[0] == value) return;
        
        setViewer(newViewer);
        setExpression(v => v += (isOperator ? operators[value][1] : value));
        setValue("");
    }, [value]);


    return (
        <Calculator.Root>

            <Calculator.Display viewer={viewer || "0"} />

            <Calculator.Components.Root>

                <Calculator.Components.Button
                    className={'c-bnt-s bnt-cls-s'}
                    label={`AC`}
                    value={`AC`}
                    key={`AC`}
                    onClick={(e) => { setValue(""); setViewer(""); setExpression("") }}
                />
                <Calculator.Components.Button
                    className={'c-bnt-s bnt-operator-s'}
                    label={`()`}
                    value={`op-rel`}
                    key={`()`}
                    onClick={(e) => {
                        const open = (viewer.match(/\(/g) || []).length;
                        const close = (viewer.match(/\)/g) || []).length;
                        setValue(open > close ? ")" : "(");
                    }}
                />
                <Calculator.Components.Button
                    className={'c-bnt-s bnt-operator-s'}
                    label={`%`}
                    value={`op-per`}
                    key={`%`}
                    onClick={(e) => setValue(e.target.value)}
                />
                <Calculator.Components.Button
                    className={'c-bnt-s bnt-operator-s'}
                    label={`÷`}
                    value={`op-div`}
                    key={`/`}
                    onClick={(e) => setValue(e.target.value)}
                />
                {[7, 8, 9].map(number => <Calculator.Components.Button
                    label={number.toString()}
                    value={number.toString()}
                    onClick={(e) => setValue(e.target.value)}
                />)}
                <Calculator.Components.Button
                    className={'c-bnt-s bnt-operator-s'}
                    label={`x`}
                    value={`op-mul`}
                    key={`x`}
                    onClick={(e) => setValue(e.target.value)}
                />
                {[4, 5, 6].map(number => <Calculator.Components.Button
                    label={number.toString()}
                    value={number.toString()}
                    onClick={(e) => setValue(e.target.value)}
                />)}
                <Calculator.Components.Button
                    className={'c-bnt-s bnt-operator-s'}
                    label={`-`}
                    value={`op-sub`}
                    key={`-`}
                    onClick={(e) => setValue(e.target.value)}
                />
                {[1, 2, 3].map(number => <Calculator.Components.Button
                    label={number.toString()}
                    value={number.toString()}
                    onClick={(e) => setValue(e.target.value)}
                />)}
                <Calculator.Components.Button
                    className={'c-bnt-s bnt-operator-s'}
                    label={`+`}
                    value={`op-sum`}
                    key={`+`}
                    onClick={(e) => setValue(e.target.value)}
                />
                <Calculator.Components.Button
                    label={`0`}
                    value={`0`}
                    key={`0`}
                    onClick={(e) => setValue(e.target.value)}
                />
                <Calculator.Components.Button
                    className={'c-bnt-s bnt-comma-s'}
                    label={`.`}
                    value={`op-com`}
                    key={`.`}
                    onClick={(e) => setValue(e.target.value)}
                />
                <Calculator.Components.Button
                    className={'c-bnt-s bnt-del-s'}
                    label={`<`}
                    value={`<`}
                    key={`<`}
                    onClick={(e) => {
                        setViewer(v => v.slice(0, v.length-1));
                        setExpression(v => v.slice(0, v.length-1));
                    }}
                />
                <Calculator.Components.Button
                    className={'c-bnt-s bnt-resul-s'}
                    label={`=`}
                    key={`=`}
                    onClick={(e) => {
                        try {
                            const result = `${eval(expression)}`;
                            setViewer(result);
                            setExpression(result)
                        }
                        catch {
                            setViewer("")
                        }
                        setValue("");
                    }}
                />

            </Calculator.Components.Root>
            
        </Calculator.Root>
    )
}

export default Widget;