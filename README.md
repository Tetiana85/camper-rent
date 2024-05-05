# Camper Rent Ukraine

This application allows users to browse and rent campers available for rental in
Ukraine. It consists of three main pages:

1. **Home Page**: Provides general information about the services offered by the
   company.
2. **Catalog Page**: Displays a catalog of campers of various configurations
   that users can filter by location, equipment, and type.
3. **Favorites Page**: Displays a list of advertisements that users have added
   to their favorites.

### Technical Details

#### Frontend

- **React**: The application is built using React framework.
- **Redux Toolkit**: Redux Toolkit is used for state management.
- **React Router**: Used for routing between different pages.
- **Axios**: Axios is used for making HTTP requests.
- **Formik and Yup**: Utilized for form management and validation.
- **Date-fns**: Used for date manipulation.
- **React Datepicker**: Provides a date picker component for selecting dates.

#### Backend

- **MockAPI**: A custom backend is created using MockAPI service to simulate
  backend functionality.
- **Adverts Resource**: The application uses the Adverts resource in MockAPI to
  store and retrieve camper advertisements.

### Features

1. **Advertisement Card**: Each advertisement card displays information about a
   camper available for rental, including name, price, rating, location,
   specifications, description, gallery images, and reviews.
2. **Pagination**: The catalog page displays four advertisements initially, and
   additional advertisements can be loaded by clicking the "Load more" button.
3. **Favorites**: Users can add advertisements to their favorites list by
   clicking the heart icon on the advertisement card. The button's color changes
   to indicate whether an advertisement is favorited or not.
4. **Modal Window**: Clicking on the "Show more" button opens a modal window
   displaying detailed information about the camper, including photos, detailed
   specifications, and reviews. The modal window can be closed by clicking the
   close button, clicking outside the modal window, or pressing the Escape key.
5. **Booking Form**: The modal window includes a booking form with fields for
   name, email, booking date, comments, and any other necessary details. The
   form fields are validated, and the form submission is handled accordingly.
6. **Persistent Storage**: User preferences, including favorite advertisements
   and filters, are saved in the local storage for a seamless user experience.

### How to Run the Application

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server using `npm run dev`.

### Deployment

The project is deployed on GitHub Pages for demonstration purposes.

### Support

For any issues or inquiries, please contact
[luzhanska.tetiana@gmail.com](luzhanska.tetiana@gmail.com).

### Acknowledgments

Special thanks to [MockAPI](https://www.mockapi.io/) for providing a convenient
tool for mocking APIs.

### Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/introduction/getting-started)
- [React Router Documentation](https://reactrouter.com/)
- [Axios Documentation](https://axios-http.com/docs/intro)
- [Formik Documentation](https://formik.org/docs/overview)
- [Yup Documentation](https://github.com/jquense/yup)
- [Date-fns Documentation](https://date-fns.org/docs/)
- [React Datepicker Documentation](https://www.npmjs.com/package/react-datepicker)
