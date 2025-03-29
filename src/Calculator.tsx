import { useState } from "react";
import styles from "./calculator.module.css";

const Calculator = () => {
  const [display, setDisplay] = useState<string>("");
  const [result, setResult] = useState<boolean>(false);
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);

  const handleClick = (value: string) => {
    if (value === "=") {
      if (previousValue !== null && operator) {
        const currentValue = parseFloat(display);
        let result;

        if (operator === "+") {
          result = previousValue! + currentValue;
        } else if (operator === "-") {
          result = previousValue! - currentValue;
        } else if (operator === "*") {
          result = previousValue! * currentValue;
        } else if (operator === "/") {
          result = previousValue! / currentValue;
        }

        setDisplay(String(result));
        setPreviousValue(null);
        setOperator(null);
        setResult(true);
      }
    } else if (value === "C") {
      setDisplay("");
      setResult(false);
    } else if (value === "exponenta") {
      const e = Math.E;
      setDisplay(String(e));
      setResult(true);
    } else if (value === "+") {
      setPreviousValue(parseFloat(display));
      setOperator("+");
      setResult(true);
    } else if (value === "-") {
      setPreviousValue(parseFloat(display));
      setOperator("-");
      setResult(true);
    } else if (value === "*") {
      setPreviousValue(parseFloat(display));
      setOperator("*");
      setResult(true);
    } else if (value === "/") {
      setPreviousValue(parseFloat(display));
      setOperator("/");
      setResult(true);
    } else if (value === "del") {
      setDisplay((prev) => prev.slice(0, -1));
    } else {
      if (result && /[0-9]/.test(value)) {
        setDisplay(value);
        setResult(false);
      } else {
        setDisplay((prev) => (result ? value : prev + value));
        setResult(false);
      }
    }
  };
  const operations: { label: string; value: string; className: string }[][] = [
    [
      { label: "xʸ", value: "^", className: styles.anotheroperations },
      { label: "lg", value: "lg", className: styles.anotheroperations },
      { label: "ln", value: "ln", className: styles.anotheroperations },
      { label: "1/x", value: "1/x", className: styles.anotheroperations },
      { label: "π", value: "pi", className: styles.anotheroperations },
    ],
    [
      { label: "√", value: "sqrt", className: styles.anotheroperations },
      { label: "C", value: "C", className: styles.operations },
      { label: "⌫", value: "del", className: styles.operations },
      { label: "%", value: "%", className: styles.operations },
      { label: "÷", value: "/", className: styles.operations },
    ],
    [
      { label: "x!", value: "factorial", className: styles.anotheroperations },
      { label: "7", value: "7", className: styles.numbers },
      { label: "8", value: "8", className: styles.numbers },
      { label: "9", value: "9", className: styles.numbers },
      { label: "x", value: "*", className: styles.operations },
    ],
    [
      { label: "sin", value: "sin", className: styles.anotheroperations },
      { label: "4", value: "4", className: styles.numbers },
      { label: "5", value: "5", className: styles.numbers },
      { label: "6", value: "6", className: styles.numbers },
      { label: "-", value: "-", className: styles.operations },
    ],
    [
      { label: "cos", value: "cos", className: styles.anotheroperations },
      { label: "1", value: "1", className: styles.numbers },
      { label: "2", value: "2", className: styles.numbers },
      { label: "3", value: "3", className: styles.numbers },
      { label: "+", value: "+", className: styles.operations },
    ],
    [
      { label: "tan", value: "tan", className: styles.anotheroperations },
      { label: "e", value: "exponenta", className: styles.numbers },
      { label: "0", value: "0", className: styles.numbers },
      { label: ".", value: ".", className: styles.numbers },
      { label: "=", value: "=", className: styles.result },
    ],
  ];

  return (
    <div className={styles.calculator}>
      <div className={styles.display}>{"0"}</div>
      <div className={styles.buttons}>
        {operations.map((row, rowIndex) => (
          <div key={rowIndex} className="buttons-row">
            {row.map((operation) => (
              <button
                key={operation.value}
                onClick={() => {}}
                className={operation.className}
              >
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
