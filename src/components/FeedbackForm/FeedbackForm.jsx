import { useState } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import {
  FormTitle,
  FormSubtitle,
  StyledButton,
  StyledForm,
  StyledInput,
  FormError,
  StyledTextarea,
} from './FeedbackForm.styled';
import { CalendarIcon } from './CalendarIcon';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  bookingDate: Yup.date()
    .min(new Date(), 'Date must be in the future')
    .required('Booking date is required'),
  comment: Yup.string(),
});

export const FeedbackForm = () => {
  const currentDate = new Date().toISOString().split('T')[0];
  const [dateType, setDateType] = useState('text');

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        bookingDate: '',
        comment: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.setSubmitting(false);
        window.location.reload();
      }}
    >
      {({ setFieldValue, isValid, isSubmitting, dirty, validateForm }) => (
        <StyledForm>
          <FormTitle>Book your campervan now</FormTitle>
          <FormSubtitle>
            Stay connected! We are always ready to help you.
          </FormSubtitle>

          <Field as={StyledInput} type="text" name="name" placeholder="Name" />
          <ErrorMessage name="name" component={FormError} />

          <Field
            as={StyledInput}
            type="email"
            name="email"
            placeholder="Email"
          />
          <ErrorMessage name="email" component={FormError} />

          <div style={{ position: 'relative' }}>
            <Field
              as={StyledInput}
              type={dateType}
              name="bookingDate"
              placeholder="Booking date"
              min={currentDate}
              onFocus={() => setDateType('date')}
              onBlur={(e) => {
                if (e.target.value === '') {
                  setDateType('text');
                }
              }}
              onChange={(e) => setFieldValue('bookingDate', e.target.value)}
            />
            <CalendarIcon />
          </div>
          <ErrorMessage name="bookingDate" component={FormError} />

          <Field as={StyledTextarea} name="comment" placeholder="Comment" />

          <StyledButton
            type="submit"
            disabled={!isValid || isSubmitting || !dirty}
            onClick={() => {
              if (!dirty) {
                validateForm();
              }
            }}
          >
            Send
          </StyledButton>
        </StyledForm>
      )}
    </Formik>
  );
};
