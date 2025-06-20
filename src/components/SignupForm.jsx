import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function SignupForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email').required('Required'),
          password: Yup.string().min(6, 'Must be at least 6 characters').required('Required'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Required')
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="bg-white p-6 rounded-lg shadow-md w-80">
          <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

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

          <div className="mb-6">
            <label className="block mb-1" htmlFor="confirmPassword">Confirm Password</label>
            <Field name="confirmPassword" type="password" className="w-full p-2 border rounded" />
            <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm" />
          </div>

          <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded w-full hover:bg-purple-600">
            Sign Up
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default SignupForm;
