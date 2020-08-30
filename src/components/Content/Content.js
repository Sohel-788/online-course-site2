import React, { useState } from 'react';
import fakeData from '../../fakeData/fakeData';
import './Content.css';
import Course from '../Course/Course';
// import '../../Assets/bootstrap.min.css';

const Content = () => {
    const data12 = fakeData.slice(0, 12);
    const [courses, setCourses] = useState(data12);
    const [cart,setCart]=useState([])
    //event handler
    const handleEnroll=(course)=>{
        const newCart=[...cart, course];
        setCart(newCart);
    }
    let total=0;
    for (let i = 0; i < cart.length; i++) {
        let course = cart[i];
        total=total+course.price;
    }
    // Tax and vat
    const tax=total/10;
    const grandTotal=Math.round(total+tax)
    return (
        <div>
            <article>
                <div className="container">
                    <div className="row">
                        <div className="course-section col-md-9">
                            {
                                courses.map(send => <Course handleEnroll={handleEnroll} course={send}></Course>)
                            }
                        </div>
                        <div className="col-md-3">
                            <h4>Order Summary</h4>
                            <h6>Enrolled Courses:{cart.length}</h6>
                            <p>Course price:${total.toFixed(2)}</p>
                            <p>Tax and Vat:${tax.toFixed(2)}</p>
                            <p>Total:${grandTotal}</p>
                            <button className='btn btn-primary btn-lg'>Checkout</button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Content;