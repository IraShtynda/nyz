import './Contacts.scss';
import { useFormik } from 'formik';

const Contacts = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <main className='contacts'>
            <div className='container'>
                    <div className='contacts__wrapper'>
                        <div className='contacts__content'>
                            <h4>NYZ PRODUCTIONS ARE ALWAYS SEARCHING FOR NEW TALENT.</h4>
                            <p>If you believe you are an extraordinarily talented artist then we want to hear from you! Just fill in the following contact form and if you fit the profile, we will be in touch with you.</p>
                            <div className='contacts__text'>
                                <div>
                                    <p>500 Terry Francois St.</p>
                                    <p>San Francisco</p>
                                    <p>CA 94158.</p>
                                </div>
                                <div>
                                    <p>info@mysite.com</p>
                                    <p>Tel: 123-456-7890.</p>
                                </div>
                            </div>
                        </div> 
                        <form className='contacts__form' onSubmit={formik.handleSubmit}>
                            <h3>Contact Us</h3>
                            <label htmlFor="firstName">First Name
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.firstName}
                                /></label>

                            <label htmlFor="lastName">Last Name
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.lastName}
                                /></label>

                            <label htmlFor="email">Email Address
                            <input
                                id="email"
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                /></label>

                            <button className="submit" type="submit">Submit</button>
                        </form>
                    </div>
            </div>
        </main>
    );
}

export default Contacts;