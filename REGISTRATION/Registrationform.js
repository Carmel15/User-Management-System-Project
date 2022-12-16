import React from "react";
import { useNavigate ,Link} from "react-router-dom";
class validationInReact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        email: "",
        firstName: "",
        lastName:"",
        password: "",
        gender:"",
        mobileNo: "",
        userType:"",      
      },
      errors: {
        email: "",
        firstName: "",
        lastName:"",
        password: "",
        gender:"",
        mobileNo: "",
        userType:"",
      }
    };
  }
  validate = (name, value) => {
    const { fields } = this.state;
    switch (name) {
      case "firstName":
        if (!value || value.trim() === "")
         {
          return "First name is Required";
         } else 
        {
          return "";
        }
        case "lastName":
            if (!value || value.trim() === "")
           {
              return "Last name is Required";
            }
             else {
              return "";
            }
      case "email":
        if (!value)
       {
          return "Email is Required";
        } 
        else if (!value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/))
        {
          return "Enter a valid email address";
        }
         else
        {
          return "";
        }
      case "mobileNo":
        if (!value || value.trim() === "")
       {
          return "Mobile number is Required";
        }
         else if (!value.match(/^[6-9]\d{9}$/))
        {
          return "Enter a valid mobile number.";
        }
       else 
         {
          return "";
        }
      case "password":
        if (!value) {
          return "Password is Required";
        } 
        else if (value.length < 8 || value.length > 15) 
        {
          return "Please fill at least 8 character";
        } 
        else if (!value.match(/[a-z]/g)) 
        {
          return "Please enter at least lower character.";
        }
        else if (!value.match(/[A-Z]/g)) 
        {
          return "Please enter at least upper character.";
        } 
        else if (!value.match(/[0-9]/g)) 
        {
          return "Please enter at least one digit.";
        }
        else 
        {
          return "";
        }
        case "gender":
          {
            
            if (!value ) {
              return "Gender is Required";
            } 
          }
        case "userType":
          {
            if (!value) {
              return "User Type is Required";
            }
          }
      default: {
        return "";
      }
    }
  };

  handleUserInput = e => {
    this.setState({
      errors: {
        ...this.state.errors,
        [e.target.name]: this.validate(e.target.name, e.target.value)
      },
      fields: {
        ...this.state.fields,
        [e.target.name]: e.target.value
      }
    });
  };
  handleSubmit = e => {
    const { fields } = this.state;
    e.preventDefault();
    let validationErrors = {};
    Object.keys(fields).forEach(name => {
      const error = this.validate(name, fields[name]);
      if (error && error.length > 0) 
      {
        validationErrors[name] = error;
      }
    });
    if (Object.keys(validationErrors).length > 0) 
    {
      this.setState({ errors: validationErrors });
      return;
    }
    if (fields.firstName && fields.lastName && fields.email && fields.password &&fields.gender&& fields.mobileNo && fields.userType) 
    {
      const data = {

        firstName: fields.firstName,
        lastName:fields.lastName,
        email: fields.email,
        mobileNo: fields.mobileNo,
        password: fields.password,
        gender:fields.gender,
        userType:fields.userType,
        
      };
      fetch('http://localhost:8080/registeruser',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
        
    }).then((response) => console.log(response)).catch(console.log("error"));
  
      window.alert("Submit Sucessfull", JSON.stringify(data));
      console.log("----data----", data);
   }
  };

  render() {
    const { fields, errors } = this.state;
    return (
      <>
      <nav>
      <div >
       <ul id="navbar">
       <li>Hi..{localStorage.getItem("names")}</li>
           
           <li><a className="active" href="http://localhost:3000">Logout</a></li>
          
       </ul>
      </div>
   </nav>
    <div className="Form1">
        <center><h1>REGISTERATION FORM</h1></center>
        <div className="container">
            <div>
              <div>
              <label>First name:</label>
              <input
                type="text"
                name="firstName"
                value={fields.firstName}
                onChange={event => this.handleUserInput(event)}
                placeholder="First Name"
              />
               </div>
                 <div>
                    <span className="text-danger">{errors.firstName}</span>
                 </div>
         </div>
        <div>
            <div>
              <label>Last name:</label>
              <input
                type="text"
                name="lastName"
                value={fields.lastName}
                onChange={event => this.handleUserInput(event)}
                placeholder="Last Name"
              />
            </div>
            <div>
              <span className="text-danger">{errors.lastName}</span>
            </div>
          </div>
          <div>
              <label>Email:</label>
              <input
              type="email"
              name="email"
              value={fields.email}
              onChange={event => this.handleUserInput(event)}
              placeholder="Email Address"
               />
               <div>
                <span className="text-danger">{errors.email}</span>
               </div>
          </div>
          <div>
            <label>Mobile Number:</label>
            <input
              name="mobileNo"
              value={fields.mobileNo}
              onChange={event => this.handleUserInput(event)}
              placeholder="Mobile"
            />
            <div>
              <span className="text-danger">{errors.mobileNo}</span>
            </div>
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={fields.password}
              onChange={event => this.handleUserInput(event)}
              placeholder="Password"
            />
            <div>
              <span className="text-danger">{errors.password}</span>
            </div>
          </div>
        <div>
        <label>Gender:</label>
        <div class="select">
            <select  name="gender" value={fields.gender} onChange={event => this.handleUserInput(event)} placeholder="gender">
            <option value="">SELECT</option>
                <option value="male">MALE</option>
                <option value="female">FEMALE</option>
            </select>
        </div>
            <div>
              <span className="text-danger">{errors.gender}</span>
            </div>
        </div>
        <br></br>
        <div>
            <label>User Type:</label>
              <div class="select">
                    <select  name="userType" value={fields.userType} onChange={event => this.handleUserInput(event)} placeholder="userType">
                      <option value="">SELECT</option>
                      <option value="admin">ADMIN</option>
                      <option value="user">USER</option>
                    </select>
               </div>
               <div>
                 <span className="text-danger">{errors.userType}</span>
               </div>
         </div>
         <br></br> <br></br>        
        <button
          type="button"
          className="login-button pointer"
          onClick={this.handleSubmit} >
          Submit
        </button>
        <button className="login-button pointer"> <Link to="/Adminhomepage" className="login-button pointer">Back</Link>
        </button>
      </div>
    </div>
    </>
    );
   
  }
}
export default validationInReact;
