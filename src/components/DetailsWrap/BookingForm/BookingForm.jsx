import { ErrorMessage, Field, Form, Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as Yup from "yup";
import s from "./BookingForm.module.css";

const BookingForm = () => {
  // Схема валідації
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // регулярний вираз для перевірки email
        "Invalid email format"
      )
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
    toast.success("Your booking has been successfully placed!");
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
              <div className={s.inputWrap}>
                <Field name="name" className={s.input} placeholder="Name*" />
                <ErrorMessage
                  name="name"
                  component="span"
                  className={s.error}
                />
              </div>
            </li>

            <li className={s.formLi}>
              <div className={s.inputWrap}>
                <Field name="email" className={s.input} placeholder="Email*" />
                <ErrorMessage
                  name="email"
                  component="span"
                  className={s.error}
                />
              </div>
            </li>

            <li className={s.formLi}>
              <div className={s.inputWrap}>
                <Field
                  name="bookingDate"
                  className={s.input}
                  placeholder="Booking date*"
                />
                <ErrorMessage
                  name="bookingDate"
                  component="span"
                  className={s.error}
                />
              </div>
            </li>

            <li className={s.formLi}>
              <div className={s.inputWrap}>
                <Field
                  name="comment"
                  as="textarea"
                  className={s.input}
                  placeholder="Comment"
                />
                <ErrorMessage
                  name="comment"
                  component="span"
                  className={s.error}
                />
              </div>
            </li>
          </ul>

          <button type="submit" className={s.btn}>
            Send
          </button>
          <ToastContainer />
        </Form>
      </Formik>
    </div>
  );
};

export default BookingForm;
