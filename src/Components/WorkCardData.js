
import todo from '../Images/todo.png';
import portfoliopic from '../Images/portfoliopic1.png';
import EmployeeFormLogin from '../Images/EmployeeFormLogin.png';
import './WorkCardStyles.css';


const WorkCardData = [
    {
        imgsrc: todo,
        title: "Todo Application",
        text: "This is a Todo application, a dynamic typed task management tool built with the modern tech stack built with ReactJS and TypeScript for a responsive and type-safe frontend. The backend uses NestJS, providing the robust API's for managing your tasks, while MySQL handles the database, ensuring efficient task storage. It offers smooth task creation, updating, and deletion, making it a reliable tool for daily task management.",
        view: "https://github.com/Ganeshkumar208"
    },
    {
        imgsrc: portfoliopic,
        title: "Portfolio",
        style: { width: '500px' },
        text: "Welcome to my Portfolio! Hello, I’m Ganesh Kumar, a passionate full-stack developer with experience in creating dynamic, user-friendly web applications. Specialised in Tech Languages like ReactJs, TypeScript, and NestJs for Backend etc., I can combine clean design with efficient coding practices to deliver robust solutions. Browse through my projects, explore my skills, and let's create something great together! With a strong performance and scalability.",
        view: "https://github.com/Ganeshkumar208"
    },
    {
        imgsrc: EmployeeFormLogin,
        title: "Employee Form With Login",
        text: "This employee form project is a full-stack web application using ReactJS, NestJS, and MySQL. The ReactJS frontend includes a login page for secured access and an employee form for managing data like names, IDs, and experience. NestJS handles the backend API, managing form data validation and CRUD operations, while communicating with a MySQL database for data storage. This login system ensures authenticated access.",
        view: "https://github.com/Ganeshkumar208"
    }
]

export default WorkCardData;