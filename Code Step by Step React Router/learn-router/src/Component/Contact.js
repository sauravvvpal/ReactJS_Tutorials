import {Link,Outlet} from 'react-router-dom'
function Contact(){
    return (
        <>
        <h1>This is Contact Us Page </h1>
        <h3>We have other bussinesses also</h3>
        <Link to='Company'>Company</Link>
        <Link to='Channel'>Channel</Link>
        <Link to='Others'>Others</Link>
        <Outlet/>
        </>
    )
}

export default Contact;