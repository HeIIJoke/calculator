import { useState } from "react";

const Calculator = () => {
  const operations: { label: string; value: string }[][] = [
    [
      { label: "xʸ", value: "^" },
      { label: "lg", value: "lg" },
      { label: "ln", value: "ln" },
      { label: "1/x", value: "1/x" },
      { label: "π", value: "pi" },
    ],
    [
      { label: "√", value: "sqrt" },
      { label: "C", value: "C" },
      { label: "⌫", value: "del" },
      { label: "%", value: "%" },
      { label: "÷", value: "/" },
    ],
    [
      { label: "x!", value: "factorial" },
      { label: "7", value: "7" },
      { label: "8", value: "8" },
      { label: "9", value: "9" },
      { label: "x", value: "*" },
    ],
    [
      { label: "sin", value: "sin" },
      { label: "4", value: "4" },
      { label: "5", value: "5" },
      { label: "6", value: "6" },
      { label: "-", value: "-" },
    ],
    [
      { label: "cos", value: "cos" },
      { label: "1", value: "1" },
      { label: "2", value: "2" },
      { label: "3", value: "3" },
      { label: "+", value: "+" },
    ],
    [
      { label: "tan", value: "tan" },
      { label: "e", value: "exponenta" },
      { label: "0", value: "0" },
      { label: ".", value: "." },
      { label: "=", value: "=" },
    ],
  ];

  return (
    <div>
      <div>{"0"}</div>
      <div>
        {operations.map((row, rowIndex) => (
          <div key={rowIndex} className="buttons-row">
            {row.map((operation) => (
              <button key={operation.value} onClick={() => {}}>
                {operation.label}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
