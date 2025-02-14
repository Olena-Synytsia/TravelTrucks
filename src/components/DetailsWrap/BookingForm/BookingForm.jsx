import { ErrorMessage, Field, Form, Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from "yup";
import s from "./BookingForm.module.css";

const BookingForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email format"
      )
      .required("Email is required"),
    bookingDate: Yup.date().required("Booking date is required").nullable(),
    comment: Yup.string().required("Comment is required"),
  });

  const initialValues = {
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    toast.success("Your booking has been successfully placed!");
    resetForm();
  };

  return (
    <div className={s.container}>
      <h3 className={s.title}>Book your camper van now</h3>
      <p className={s.text}>Stay connected! We are always ready to help you.</p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ setFieldValue, values }) => (
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
                  <Field
                    name="email"
                    className={s.input}
                    placeholder="Email*"
                  />
                  <ErrorMessage
                    name="email"
                    component="span"
                    className={s.error}
                  />
                </div>
              </li>

              <li className={s.formLi}>
                <div className={s.inputWrap}>
                  <DatePicker
                    selected={values.bookingDate}
                    onChange={(date) => setFieldValue("bookingDate", date)}
                    className={s.input}
                    placeholderText="Booking date*"
                    dateFormat="dd/MM/yyyy"
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
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
