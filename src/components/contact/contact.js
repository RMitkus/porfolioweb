import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import styles from './contact.module.scss';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const Contact = ({ contactForm }) => {
  const [success, setSuccess] = useState(false);
  const [loader, setLoader] = useState(false);

  const SignupSchema = Yup.object().shape({
    user_name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('I really want to know your name!'),
    text: Yup.string()
      .min(2, 'Too Short!')
      .max(500, 'Too Long!')
      .required('Empty message? Tell me how can I help you :)'),
    user_email: Yup.string().email('Invalid email').required('You do want me to write you back, yup?'),
  });
  return (
    <div className={styles.contact}>
      {loader ? (
        <div className={styles.loader}>
          <Loader
            className={styles.spinner}
            type="Puff"
            color="#023047"
            height={100}
            width={100}
          />
        </div>
      ) : null}
      <div className={styles.cancel} onClick={contactForm}>
        x
      </div>

      {!success ? (
        <>
          <h3>Contact me!</h3>
          <Formik
            initialValues={{
              user_name: '',
              user_email: '',
              text: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              emailjs.send('Rytis', 'portfolio', {
                user_name: values.user_name,
                user_email: values.user_email,
                text: values.text,
              }, 'user_madlpmHhJiG5BQw17KAXQ')
                .then(() => (setSuccess(!success)))
                .then(() => {
                  setTimeout(() => contactForm(), 3000);
                });
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Field name="user_name" placeholder="Your name" disabled={loader} />
                {errors.user_name && touched.user_name ? (
                  <div className={styles.err}>{errors.user_name}</div>
                ) : null}
                <Field name="user_email" type="email" placeholder="Your email" disabled={loader} />
                {errors.user_email && touched.user_email
                  ? <div className={styles.err}>{errors.user_email}</div> : null}
                <Field name="text" as="textarea" placeholder="Your message" disabed={loader} />
                {errors.text && touched.text ? (
                  <div className={styles.err}>{errors.text}</div>
                ) : null}

                <button type="submit">Send!</button>
              </Form>
            )}
          </Formik>
        </>
      ) : null}
      {success ? <div className={styles.err}>Message was sent, thanks!</div> : null}
    </div>
  );
};

export default Contact;
