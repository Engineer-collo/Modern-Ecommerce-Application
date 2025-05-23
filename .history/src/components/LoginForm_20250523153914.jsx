
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';




function LoginForm() {
  const navigate = useNavigate()
  const signupNavigation = () => {
    navigate("/signup")
  }
  return (
    <>
    
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Required')
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="mt-6 bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="email">Email</label>
          <Field name="email" type="email" className="w-full p-2 border rounded" />
          <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="password">Password</label>
          <Field name="password" type="password" className="w-full p-2 border rounded" />
          <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
        </div>
        <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded w-full">Login</button>
        <p>Dont have an account? <button className='text-purple-700 rounded p-1' onClick={signupNavigation}>Sign Up</button> </p>

      </Form>

    </Formik>
    </>
  )
}

export default LoginForm