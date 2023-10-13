import { useRef } from "react";
import Sidebar from "./Sidebar";

const Form = () => {

  const nameRef = useRef();
	const lastNameRef = useRef();
	const bioRef = useRef();
	const genderManRef = useRef();
	const genderWomanRef = useRef();
	const genderOtherRef = useRef();

  const getForm = (e) => {
    e.preventDefault();
    console.log('xxx nameRef-->: ', nameRef.current.value);
  }

  return (
    <div id="form">
      <div className="center">
        <div id="content">
          {/* ***  */}
          <h1 className="subheader">Form</h1>
          <form className="mid-form" onSubmit={getForm}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" ref={nameRef} />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" ref={lastNameRef} />
            </div>

            <div className="form-group">
              <label htmlFor="bio">Biography</label>
              <textarea name="bio" ref={bioRef} ></textarea>
            </div>

            <div className="form-group radibuttons">
              <input type="radio" name="gender" value="hombre" ref={genderManRef} /> Man
              <input type="radio" name="gender" value="mujer" ref={genderWomanRef} /> Woman
              <input type="radio" name="gender" value="otro" ref={genderOtherRef} /> Otthe
            </div>

            <div className="clearfix"></div>

            <input type="submit" value="Send" className="btn btn-success" />

          </form>
        </div>

        <Sidebar
        />

      </div>
    </div>

  );
}

export default Form;
