import './Power.css';

function Power(props) {
    const base = props.base;
    const exponent = props.exponent;

  return (
    <div className="power">
      <h3>Возведение числа в степень</h3>
      <p>
        {base} {"^"} {exponent} {"="} {base ** exponent}
      </p>
    </div>
  );
}

export default Power;
