import React from 'react';
import './Course.css';
const Course = (props) => {
    const {name,instructor,price,topic,access,image}=props.course;
    return (
        <div className='d-flex course-container'>
           <div className="course-img">
               <img src={image} alt=""/>
           </div>
           <div className="course-detail">
                <h2>{name}</h2>
                <h6>Instructor: {instructor}</h6>
                <p>Category: {topic}</p>
                <p>Price: ${price}</p>
                <p><small><sapn className='text-danger'>Deadline: </sapn>{access}</small></p>
                <br/>
                <button onClick={()=>props.handleEnroll(props.course)} className='btn btn-success btn-lg'>Enroll Now</button>
           </div>
        </div>
    );
};

export default Course;