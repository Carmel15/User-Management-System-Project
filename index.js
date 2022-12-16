import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/////////////////////////////////////////////////////////////////////////////////////////////
// import App from './App';
// import React from "react";
// import ReactDOM from "react-dom";
// import Navbar from './Navbar';
// import {BrowserRouter} from 'react-router-dom';
// import Mylogo from './user LOGO.png';
// import Footer1 from './SocialFollow';
// import CRUDTable, {
//   Fields,
//   Field,
//   CreateForm,
//   UpdateForm,
//   DeleteForm
// } from "react-crud-table";

// // Component's Base CSS
// import "./index.css";

// <App/>

// const DescriptionRenderer = ({ field }) => <textarea {...field} />;

// let tasks = [
//   {
//      id:1,

//      firstName:"preethi",

// 	   lastName:"s",

// 	   emailId:"preegmailcom",

// 	   phone:1234567890,

// 	   gender:"F",

// 	   password:"PREETHIS",

// 	   userType:"User"
//   },
//   {

//     id:2,
  
//     firstName:"wwwwww",

// 	   lastName:"ee",

// 	   emailId:"tttt",

// 	   phone:122233344,

// 	   gender:"m",

// 	   password:"ppp",

// 	   userType:"iiii"
//   }
// ];

// const SORTERS = {
//   NUMBER_ASCENDING: mapper => (a, b) => mapper(a) - mapper(b),
//   NUMBER_DESCENDING: mapper => (a, b) => mapper(b) - mapper(a),
//   STRING_ASCENDING: mapper => (a, b) => mapper(a).localeCompare(mapper(b)),
//   STRING_DESCENDING: mapper => (a, b) => mapper(b).localeCompare(mapper(a))
// };

// const getSorter = data => {
//   const mapper = x => x[data.field];
//   let sorter = SORTERS.STRING_ASCENDING(mapper);

//   if (data.field === "id") {
//     sorter =
//       data.direction === "ascending"
//         ? SORTERS.NUMBER_ASCENDING(mapper)
//         : SORTERS.NUMBER_DESCENDING(mapper);
//   } else {
//     sorter =
//       data.direction === "ascending"
//         ? SORTERS.STRING_ASCENDING(mapper)
//         : SORTERS.STRING_DESCENDING(mapper);
//   }

//   return sorter;
// };

// let count = tasks.length;
// const service = {
//   fetchItems: payload => {
//     let result = Array.from(tasks);
//     result = result.sort(getSorter(payload.sort));
//     return Promise.resolve(result);
//   },
//   create: task => {
//     count += 1;
//     tasks.push({
//       ...task,
//       id: count
//     });
//     return Promise.resolve(task);
//   },
//   update: data => {
//     const task = tasks.find(t => t.id === data.id);
//     task.firstName = data.firstName;
//     task.lastName = data.lastName;
//     task.emailId = data.emailId;
//     task.phone = data.phone;
//     task.title = data.title;
//     task.gender = data.gender;
//     task.password = data.password;
//     task.userType = data.userType;
//     return Promise.resolve(task);
//   },
//   delete: data => {
//     const task = tasks.find(t => t.id === data.id);
//     tasks = tasks.filter(t => t.id !== task.id);
//     return Promise.resolve(task);
//   }
// };

// const styles = {
//   container: { margin: "auto", width: "fit-content" }
// };

// const Example = () => (
//   <div style={styles.container}>
//      <BrowserRouter>
//    <Navbar/>
//    </BrowserRouter>
//    <img src={Mylogo} /> 
//      < Footer1 />   
//     <CRUDTable
 
//       fetchItems={payload => service.fetchItems(payload)}
//     > 
//       <Fields>
//         <Field name="id" label="Id" hideInCreateForm />
//         <Field name="firstName" label="firstName" placeholder="firstName" />
//         <Field name="lastName" label="lastName" placeholder="lastName" />
//         <Field name="emailId" label="emailId" placeholder="emailId" />
//         <Field name="phone" label="phone" placeholder="phone" />
//         <Field name="gender" label="gender" placeholder="gender" />
//         <Field name="password" label="password" placeholder="password" />
//         <Field name="userType" label="userType" placeholder="userType" />
//       </Fields>
//       <CreateForm
//         title="Task Creation"
//         message="Create a new task!"
      
//         onSubmit={task => service.create(task)}
//         submitText="Create"
//         validate={values => {
//           const errors = {};
//           if (!values.title) {
//             errors.title = "Please, provide task's title";
//           }

//           if (!values.description) {
//             errors.description = "Please, provide task's description";
//           }

//           return errors;
//         }}
//       />

//       <UpdateForm
//         title="Task Update Process"
//         message="Update task"
//         trigger="Update"
//         onSubmit={task => service.update(task)}
//         submitText="Update"
//         validate={values => {
//           const errors = {};

//           if (!values.id) {
//             errors.id = "Please, provide id";
//           }

//           if (!values.firstName) {
//             errors.title = "Please, provide  firstName";
//           }

//           if (!values.lastName) {
//             errors.title = "Please, provide  lastName";
//           }

//           if (!values.emailId) {
//             errors.title = "Please, provide  emailId";
//           }

//           if (!values.phone) {
//             errors.title = "Please, provide  phone";
//           }

//           if (!values.password) {
//             errors.description = "Please, provide  password";
//           }

//           if (!values.userType) {
//             errors.description = "Please, provide  userType";
//           }

//           return errors;
//         }}
//       />

//       <DeleteForm
//         title="Task Delete Process"
//         message="Are you sure you want to delete the task?"
//         trigger="Delete"
//         onSubmit={task => service.delete(task)}
//         submitText="Delete"
//         validate={values => {
//           const errors = {};
//           if (!values.id) {
//             errors.id = "Please, provide id";
//           }
//           return errors;
//         }}
//       />
  

  
//     </CRUDTable>
    
//     < Footer1 />  
//   </div>
// );

// Example.propTypes = {};

// ReactDOM.render(<Example />, document.getElementById("root"));
