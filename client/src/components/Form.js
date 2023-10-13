import { useRef, useState } from "react";
import Sidebar from "./Sidebar";

const Form = () => {

  const [user, setUser] = useState({});

  const nameRef = useRef();
  const lastNameRef = useRef();
  const bioRef = useRef();
  const genderManRef = useRef();
  const genderWomanRef = useRef();
  const genderOtherRef = useRef();

  const getForm = (e) => {
    e.preventDefault();

    var gender = '';

    if (genderManRef.current.checked) {
      gender = genderManRef.current.value;
    } else if (genderWomanRef.current.checked) {
      gender = genderWomanRef.current.value;
    } else {
      gender = genderOtherRef.current.value;
    };

    setUser({
      name: nameRef.current.value,
      lastName: lastNameRef.current.value,
      bio: bioRef.current.value,
      gender: gender
    });

  }

  return (
    <div id="form">
      <div className="center">
        <div id="content">

          <h1 className="subheader">Form</h1>

          {user.name &&
            <div id="user-data">
              {user.name &&
                <p>Name: <strong>{user.name}</strong></p>
              }
              {user.lastName &&
                <p>Las Name: <strong>{user.lastName}</strong></p>
              }
              {user.bio &&
                <p>Biography: <strong>{user.bio}</strong></p>
              }
              {user.gender &&
                <p>Gender: <strong>{user.gender}</strong></p>
              }
            </div>
          }

          <form className="mid-form" onSubmit={getForm} onChange={getForm}>
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
              <input type="radio" name="gender" value="name" ref={genderManRef} /> Man
              <input type="radio" name="gender" value="woman" ref={genderWomanRef} /> Woman
              <input type="radio" name="gender" value="other" ref={genderOtherRef} /> Other
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
