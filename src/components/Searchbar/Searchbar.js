import { Component } from "react";
import { Field, Form, Formik } from 'formik';
import PropTypes from 'prop-types';


export class Searchbar extends Component {
    render() {
        return (
          <div>
            <Formik
              initialValues={{ search: '' }}
              onSubmit={(values, actions) => {
                this.props.onSubmit(values.search);
                actions.setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  {isSubmitting && <div>Loading...</div>}
                  <button
                    type="submit"
                    className="button"
                    disabled={isSubmitting}
                  ></button>
                  <Field
                    name="search"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                  />
                </Form>
              )}
            </Formik>
          </div>
        );

    }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};