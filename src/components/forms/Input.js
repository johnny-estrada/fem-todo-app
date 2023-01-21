import "./Input.css";

function Input() {
  return (
    <>
      <section className="input-container">
        {/* <div className="checkbox"> */}
          {/* <input type="checkbox" id="" name=""></input> */}
          <div className="checkbox"></div>
        {/* </div> */}

        <input className="input"
          type="text"
          id=""
          name=""
          placeholder="Create a new todo..."
        ></input>
      </section>
    </>
  );
}

export default Input;
