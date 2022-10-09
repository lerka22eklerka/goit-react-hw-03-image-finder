import { Component } from "react";
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import {
  FormBtnStyled,
  FormStyled,
  InputStyled,
  SearchbarBox,
} from './Searchbar.styled';


export class Searchbar extends Component {
    render() {
        return (
          <SearchbarBox>
            <Formik
              initialValues={{ search: '' }}
              onSubmit={(values, actions) => {
                this.props.onSubmit(values.search);
                actions.setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <FormStyled>
                  {isSubmitting && <div>Loading...</div>}
                  <FormBtnStyled type="submit" disabled={isSubmitting}>
                  </FormBtnStyled>
                  <InputStyled
                    name="search"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                  />
                </FormStyled>
              )}
            </Formik>
          </SearchbarBox>
        );

    }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};