import { Formik } from 'formik';
import { Form, Field, Button, ErrorMessage } from './Searchbar.styled';
import * as Yup from 'yup';
import { CiSearch } from 'react-icons/ci';

const SearchBar = ({ onSubmitData }) => {
  const validation = Yup.object().shape({
    query: Yup.string().min(2, 'Too short!').required('Required!'),
  });
  return (
    <Formik
      initialValues={{
        query: '',
      }}
      onSubmit={({ query }, actions) => {
        onSubmitData(query);
        actions.resetForm();
      }}
      validationSchema={validation}
      validateOnBlur={false}
    >
      <Form>
        <Field name="query" placeholder="Search image and photo" />
        <ErrorMessage name="query" component="span" />

        <Button type="submit">
          <CiSearch/>
        </Button>
      </Form>
    </Formik>
  );
};

export default SearchBar;

