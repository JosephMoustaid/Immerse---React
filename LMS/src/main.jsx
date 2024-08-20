import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './css/style.css';


import Y from './assets/Y.png'
import engine from './assets/assets-images/engine.png'
import motherboard from './assets/assets-images/motherboard.png'
import arduinoCourse from './assets/course-preview/arduino.png'
import engineCourse from './assets/course-preview/motor.png'
import groupProfile from './assets/group-profiles/group.png'

import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from 'react-router-dom';

// Import your page components
import Dashboard from './pages/Dashboard.jsx';
import Courses from './pages/Courses.jsx';
import Groups from './pages/Groups.jsx';
import Students from './pages/Students.jsx';
import Assets from './pages/Assets.jsx';
import Profile from './pages/Profile.jsx';
import Settings from './pages/Settings.jsx';
import SignUp from './pages/SignUp.jsx';
import SignIn from './pages/SignIn.jsx';
import ForgotPassword from "./pages/ForgotPassword.jsx";
import Resetpassword from "./pages/Resetpassword.jsx";
import GroupChat from './pages/GroupChat.jsx';
import Notifications from './pages/Notifications.jsx';
import MakeCourse from './pages/MakeCourse.jsx';
import Help from "./pages/Help.jsx";
import CreateGroup from "./pages/CreateGroup.jsx";
import Test from "./pages/Test.jsx";
import MakeQuiz from "./pages/MakeQuiz.jsx";
import Quiz from "./pages/Quiz.jsx";
import Rate from "./pages/Rate.jsx";
import EditCourse from "./pages/EditCourse.jsx";
import ViewCourse from "./pages/ViewCourse.jsx";
import Enrollment from './components/DashboardComponents/Enrollment.jsx';
import JoinCourse from './pages/JoinCourse.jsx';

// this is just for testing
const settings1 ={
  id: 1,
  userType: "student",
  userId: 3500,
  twoFactorAuth: true,
  emailNotification: true,  // true for on , false for off
  language : "eng" , // eng ,fr 
  theme : "dark" , // dark , light
  recoveryEmailSett :false, // true for on , false for off
  recoveryEmail :"yomo@gmail.com", // recovery email if recoveryEmailSett is On
};
const notification1 = {
  id: 102,
  type: "success", // types are : sucess , warning , danger , dismissible
  message: "Your account has been created succesfully , Happy learning",
  time: "11:00 pm",
  date: "22/01/2024",
};
const notification2 = {
  id: 102,
  type: "danger", // types are : sucess , warning , danger , dismissible
  message: "You have not sat a recovery email yet , go to settings to set one",
  time: "11:30 pm",
  date: "22/01/2024",
};
const notifications3 = {
  id: 102,
  type: "dismissible", // types are : sucess , warning , danger , dismissible
  message: "You have new messages from the 3IIR group",
  time: "10:00 am",
  date: "30/01/2024",
};
const student = {
  id: 10253,
  firstname: "youssef",
  lastname: "moustaiid",
  email: "testingemail@gmail.com",
  password: "aaaaaaaaaa",
  gender: "m",
  birthdate: "22/01/2004",
  profile: Y ,
  notifications : [notification1 , notification2,notifications3]
};
const student2 = {
  id: 10253,
  firstname: "Amine",
  lastname: "elbalawi",
  email: "testingemail@gmail.com",
  password: "aaaaaaaaaa",
  gender: "m",
  birthdate: "22/01/2004",
  profile: Y 
};
const teacher1 = {
  id: 301,
  profile: Y, // Assuming Y is a placeholder profile image
  firstname: "John",
  lastname: "Doe",
  email: "johndoe@example.com",
  password: "teacherpassword",
  gender: "m",
  speciality: "Robotics",
};
const asset1 = {
  id: 1,
  name: "Engine",
  description: "High-performance engine",
  url : "",
  type: "hardware",
  format: "image",
  preview: engine,
};
const asset2 = {
  id: 2,
  name: "Motherboard",
  description: "Advanced motherboard",
  url : "",
  type: "hardware",
  format: "image",
  preview: motherboard,
};
const course1 = {
  id: 101,
  name: "Arduino Basics",
  type: "public",
  category : "software",
  description:"This is a course to teach Basic functionnality of Mechanical engines in general , we will go over the basics , some componewnts ..",
  teacher: teacher1.firstname+ teacher1.lastname, 
  teacherProfile: teacher1.profile,
  previewImg: arduinoCourse,
  bookmark :false ,
  rating : {percentage : 4.5 , number :  354},
};
const course2 = {
  id: 102,
  description :"This is a course to teach Basic functionnality of Mechanical engines in general , we will go over the basics , some componewnts ...",
  name: "Engine Mechanics",
  type: "private",
  category : "mechanics",
  teacher: teacher1.firstname+ teacher1.lastname, 
  teacherProfile: teacher1.profile,
  previewImg: engineCourse,
  bookmark :false ,
  rating : {percentage : 3.5 , number :  714},

};
const course3 = {
  id: 103,
  description: "This is a course to teach basic functionality of mechanical engines in general. We will go over the basics, some components...",
  name: "Engine Mechanics",
  category: "mechanics",
  type: "private",
  teacher: teacher1.firstname + " " + teacher1.lastname, 
  teacherProfile: teacher1.profile,
  previewImg: engineCourse,
  bookmark: true,
  ratings: [
    {
      studentName: "John Doe",
      rating: 4.5,
      comment: "Great introduction to engine mechanics. The instructor was clear and the content was well-organized.",
      date: "2024-08-01"
    },
    {
      studentName: "Jane Smith",
      rating: 4.0,
      comment: "Good course, but could use more advanced examples. Overall, a solid foundation.",
      date: "2024-08-03"
    },
    {
      studentName: "Robert Brown",
      rating: 5.0,
      comment: "Excellent course! I learned a lot about the basics of engine mechanics. The practical examples were very helpful.",
      date: "2024-08-05"
    },
    {
      studentName: "Emily White",
      rating: 3.5,
      comment: "The course was decent, but I felt some topics were rushed. More detail would have been appreciated.",
      date: "2024-08-07"
    }
  ] ,
  rating : {percentage : 5 , number :  12354},

};

 //rating : {percentage : 5 , number :  12354},
const course4 = {
  id: 104,
  description :"This is a course to teach Basic functionnality of Mechanical engines in general , we will go over the basics , some componewnts ...",
  name: "Engine Mechanics",
  category : "mechanics",
  type: "private",
  teacher: teacher1.firstname+ teacher1.lastname, 
  teacherProfile: teacher1.profile,
  previewImg: engineCourse,
  bookmark :true ,
  rating : {percentage : 46 , number :  21},
};
const group1 = {
  id: 201,
  name: "Robotics Club",
  members: [student, student2],
  chat: [
    { message: "Guys, When will the exam take place?", time: "11:31 pm", username: "Alice", userProfile: student.profilePicture, isCurrentUser: false },
    { message: "The exam is scheduled for next Tuesday.", time: "11:33 pm", username: "Bob", userProfile: student2.profilePicture, isCurrentUser: true },
    { message: "Can someone share the study materials?", time: "11:35 pm", username: "Alice", userProfile: student.profilePicture, isCurrentUser: false },
    { message: "Sure, I'll upload them to the group folder.", time: "11:37 pm", username: "Bob", userProfile: student2.profilePicture, isCurrentUser: true }
  ],
  adminId: 1,
  profile: groupProfile || defaultGroupProfile
};
const group2 = {
  id: 202,
  name: "Engineering Society",
  members: [student],
  chat: [{ message: "Reminder: Meeting at 5 pm", time: "4:31 pm" }],
  adminId: 2,
  profile: groupProfile
};
const assignement1 ={
  id: 1023,
  name: "Combustion engine",
  type: "Mecanics",
  percentage: 88,
  passed: true
};
const assignement2 ={
  id: 1023,
  name: "MotherBoard structure",
  type: "Tech",
  percentage: 91,
  passed: true
};
const quizQuestions =[
  {
    questionText: 'What is the primary microcontroller used in the Arduino Uno?',
    helperText: 'Choose one',
    answerOptions: [
      { text: 'ATmega328P', isCorrect: true },
      { text: 'ATmega2560', isCorrect: false },
      { text: 'ATtiny85', isCorrect: false },
      { text: 'ATmega32', isCorrect: false }
    ]
  },
  {
    questionText: 'Which programming language is primarily used to program Arduino boards?',
    helperText: 'Choose one',
    answerOptions: [
      { text: 'Python', isCorrect: false },
      { text: 'JavaScript', isCorrect: false },
      { text: 'C/C++', isCorrect: true },
      { text: 'Java', isCorrect: false }
    ]
  },
  {
    questionText: 'What is the purpose of the "void setup()" function in an Arduino sketch?',
    helperText: 'This function is used to initialize settings and configure the hardware.',
    answerOptions: [
      { text: 'To set up the hardware and initialize variables', isCorrect: true },
      { text: 'To loop continuously', isCorrect: false },
      { text: 'To handle interrupts', isCorrect: false },
      { text: 'To terminate the program', isCorrect: false }
    ]
  },
  {
    questionText: 'Which pin on the Arduino Uno is used to send digital output?',
    helperText: 'Choose one',
    answerOptions: [
      { text: 'Analog pin A0', isCorrect: false },
      { text: 'Digital pin 13', isCorrect: true },
      { text: 'Power pin 5V', isCorrect: false },
      { text: 'Ground pin GND', isCorrect: false }
    ]
  },
  {
    questionText: 'What is the function of the "delay()" function in Arduino programming?',
    helperText: 'Choose one',
    answerOptions: [
      { text: 'To create a pause in the execution', isCorrect: true },
      { text: 'To handle interrupts', isCorrect: false },
      { text: 'To initialize hardware', isCorrect: false },
      { text: 'To read sensor data', isCorrect: false }
    ]
  },
  {
    questionText: 'Which of the following is a common sensor used with Arduino?',
    helperText: 'Choose one',
    answerOptions: [
      { text: 'BMP180', isCorrect: true },
      { text: 'Wi-Fi module', isCorrect: false },
      { text: 'Bluetooth module', isCorrect: false },
      { text: 'GPS module', isCorrect: false }
    ]
  },
  {
    questionText: 'What is the default baud rate for serial communication in Arduino?',
    helperText: 'Choose one',
    answerOptions: [
      { text: '9600', isCorrect: true },
      { text: '115200', isCorrect: false },
      { text: '57600', isCorrect: false },
      { text: '38400', isCorrect: false }
    ]
  },
  {
    questionText: 'Which command is used to read an analog input in Arduino?',
    helperText: 'Choose one',
    answerOptions: [
      { text: 'digitalRead()', isCorrect: false },
      { text: 'analogWrite()', isCorrect: false },
      { text: 'analogRead()', isCorrect: true },
      { text: 'digitalWrite()', isCorrect: false }
    ]
  },
  {
    questionText: 'What does the "LED_BUILTIN" constant refer to in an Arduino sketch?',
    helperText: 'Choose one',
    answerOptions: [
      { text: 'The internal LED connected to pin 13', isCorrect: true },
      { text: 'The external LED connected to an analog pin', isCorrect: false },
      { text: 'The LED connected to a digital pin', isCorrect: false },
      { text: 'The LED on the power supply', isCorrect: false }
    ]
  },
  {
    questionText: 'Which component is used to control the flow of current in an Arduino circuit?',
    helperText: 'Choose one',
    answerOptions: [
      { text: 'Resistor', isCorrect: true },
      { text: 'Capacitor', isCorrect: false },
      { text: 'Transistor', isCorrect: false },
      { text: 'Diode', isCorrect: false }
    ]
  },
  {
    questionText: 'What is the main purpose of the Arduino IDE?',
    helperText: 'Choose one',
    answerOptions: [
      { text: 'To write and upload code to Arduino boards', isCorrect: true },
      { text: 'To design hardware schematics', isCorrect: false },
      { text: 'To simulate Arduino projects', isCorrect: false },
      { text: 'To manage project documentation', isCorrect: false }
    ]
  },
  {
    questionText: 'What is the main purpose of the Arduino IDE?',
    helperText: 'Choose one',
    answerOptions: [
      { text: 'To write and upload code to Arduino boards', isCorrect: true },
      { text: 'To design hardware schematics', isCorrect: false },
      { text: 'To simulate Arduino projects', isCorrect: false },
      { text: 'To manage project documentation', isCorrect: false }
    ]
  },
  {
    questionText: 'What is the main purpose of the Arduino IDE?',
    helperText: 'Choose one',
    answerOptions: [
      { text: 'To write and upload code to Arduino boards', isCorrect: true },
      { text: 'To design hardware schematics', isCorrect: false },
      { text: 'To simulate Arduino projects', isCorrect: false },
      { text: 'To manage project documentation', isCorrect: false }
    ]
  },
  {
    questionText: 'What is the main purpose of the Arduino IDE?',
    helperText: 'Choose one',
    answerOptions: [
      { text: 'To write and upload code to Arduino boards', isCorrect: true },
      { text: 'To design hardware schematics', isCorrect: false },
      { text: 'To simulate Arduino projects', isCorrect: false },
      { text: 'To manage project documentation', isCorrect: false }
    ]
  },
  {
    questionText: 'What is the main purpose of the Arduino IDE?',
    helperText: 'Choose one',
    answerOptions: [
      { text: 'To write and upload code to Arduino boards', isCorrect: true },
      { text: 'To design hardware schematics', isCorrect: false },
      { text: 'To simulate Arduino projects', isCorrect: false },
      { text: 'To manage project documentation', isCorrect: false }
    ]
  }
];
const quiz = {
  title : "Assigngment 1" , 
  ratekeTime : "8 hours" ,
  description : "this is the quiz description" , 
  attemptsAllowed : 1,
  questions :  quizQuestions
}


const AppWrapper = (props) => {
  const location = useLocation();
  return <App currentLink={location.pathname} {...props} user={student2} />;
};

// Data for dashboard tests 
const comitementData = {
  complete: 120,
  audit: 45,
  uncommitted: 35,
};
const continentData = {
  "North America": 35,
  "Asia": 34,
  "Europe": 22,
  "South America": 5,
  "Africa": 2,
  "Oceania": 2
};
const countrytData = {
  "USA": 35,
  "Canada": 34,
  "Morocco": 12,
  "France": 5,
  "Egypt": 2,
  "Maltas": 2,
  "Croatia": 5,
  "Netherlands": 2,
  "Congo": 5,
  "South Africa": 2,

};
const enrollementData ={
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July'] , 
    dataPoints : [50, 100, 150, 200, 120, 76, 350] ,
}
const overviewData = {
  totalLearners:108554 ,
  countries:181 ,
  emergingEconomies:49458
};
// I grouped all the data in one object to make life easier
const teacherDashboardData = {
    overview : overviewData,
    enrollment : enrollementData ,
    comitement : comitementData ,
    continent : continentData,
    country : countrytData ,
}
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppWrapper />,
    children: [
      {
        path: '',
        element: <Dashboard teacherDashboard={teacherDashboardData} enrolledCourses={[course1 , course2, course3,course4 , course2 , course4]} bookmarksCourses={[course3, course4,course4 , course2 , course4]} recommendedCourses={[course1 , course2,course4 , course2 , course4,course4 , course2 , course4]}  assignments={[assignement1 , assignement2]}  user={student2}/>,
      },
      {
        path: 'dashboard',
        element: <Dashboard teacherDashboard={teacherDashboardData} enrolledCourses={[course1 , course2,course3,course4 , course2 , course4]} bookmarksCourses={[course3, course4,course4 , course2 , course4]} recommendedCourses={[course1 , course2,course4 , course2 , course4,course4 , course2 , course4]}  assignments={[assignement1 , assignement2]} user={student2}/>,
      },
      {
        path: 'courses',
        element: <Courses courses={[course1 ,course2 , course2 , course1, course2 , course1 , course2 , course1 , course2]} user={student2} />,
      },
      {
        path: 'groups',
        element: <Groups groups={[group1 , group2]} user={student2} />,
      },
      {
        path: 'group-chat',
        element: <GroupChat group={group1} user={student2} />,
      },
      {
        path: 'students',
        element: <Students students={[student , student2 , student , student2]} user={student2} />,
      },
      {
        path: 'assets',
        element: <Assets assets={[asset1 , asset2 , asset1 , asset2]} user={student2} />,
      },
      {
        path: 'profile',
        element: <Profile user={student} />,
      },
      {
        path: 'settings',
        element: <Settings settings={settings1} user={student2} />,
      },
      {
        path: 'notifications',
        element: <Notifications notifications={[notification1, notification2 , notifications3]} user={student2}/>,
      },
      {
        path: 'make-course',
        element: <MakeCourse user={student2}/>,
      },
      {
        path: 'sign-up',
        element: <SignUp user={student2}/>,
      },
      {
        path: 'sign-in',
        element: <SignIn user={student2}/>,
      },
      {
        path: 'help',
        element: <Help />,
      },
      {
        path: 'create-group',
        element: <CreateGroup />,
      },
      {
        path: 'test',
        element: <Test />,
      },
      {
        path: 'make-quiz',
        element: <MakeQuiz />,
      },
      {
        path: 'quiz',
        element: <Quiz quiz={quiz} />,
      },
      {
        path: 'rate',
        element: <Rate />,
      },
      {
        path: 'rate', // Only base path, without query parameters
        element: <Rate />,
      },
      {
        path: 'edit-course', // same in here
        element: <EditCourse course={course3} />,
      },
      {
      path: 'view-course', // same in here
      element: <ViewCourse course={course3} />,
      },
      {
        path: 'join-course', // same in here
        element: <JoinCourse />,
      },
      {
        path: 'forgot-password', // same in here
        element: <ForgotPassword />,
      } ,
      {
        path: 'reset-password', // same in here
        element: <Resetpassword />,
      } 
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
