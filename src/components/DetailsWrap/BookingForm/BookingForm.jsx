import { Field, Form, Formik } from "formik";

import * as Yup from "yup";
import s from "./BookingForm.module.css";

const BookingForm = () => {
  // Схема валідації
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    bookingDate: Yup.date().required("Booking date is required").nullable(),
    comment: Yup.string().required("Comment is required"),
  });

  // Початкові значення
  const initialValues = {
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <div className={s.container}>
      <h3 className={s.title}>Book your campervan now</h3>
      <p className={s.text}>Stay connected! We are always ready to help you.</p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={s.form}>
          <ul className={s.formUl}>
            <li className={s.formLi}>
              <Field
                name="name"
                className={s.input}
                placeholder="Name*"
              ></Field>
              {/* <ErrorMessage name="name" component="span" className={s.error} /> */}
            </li>

            <li className={s.formLi}>
              <Field
                name="email"
                className={s.input}
                placeholder="Email*"
              ></Field>
              {/* <ErrorMessage name="email" component="span" className={s.error} /> */}
            </li>

            <li className={s.formLi}>
              <Field
                name="bookingDate"
                className={s.input}
                placeholder="Booking date*"
              ></Field>
              {/* <ErrorMessage
                name="bookingDate"
                component="span"
                className={s.error}
              /> */}
            </li>

            <li className={s.formLi}>
              <Field
                name="comment"
                className={s.input}
                placeholder="Comment"
              ></Field>
              {/* <ErrorMessage
                name="comment"
                component="span"
                className={s.error}
              /> */}
            </li>
          </ul>

          <button type="submit" className={s.btn}>
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookingForm;
