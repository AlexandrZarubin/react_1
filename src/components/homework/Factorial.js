import './Factorial.css';

function Factorial(props) {
  let n = props.number;
  let result;

  if (n < 0) {
    result = "Факториал не определён";
  } else if (n === 0 || n === 1) {
    result = 1;
  } else {
    result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
  }

  return (
    <div className="factorial">
      <h3>Факториал числа {n}</h3>
      <p>Результат: {result}</p>
    </div>
  );
}

export default Factorial;
