import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const SignUp = () => {
  const initialValues = {
    nom: '',
    prenom: '',
    email: '',
    password: ''
  };

  const validationSchema = Yup.object().shape({
    nom: Yup.string().required('Le nom est requis'),
    prenom: Yup.string().required('Le prénom est requis'),
    email: Yup.string().email('Format de l\'email invalide').required('L\'email est requis'),
    password: Yup.string().min(6, 'Le mot de passe doit comporter au moins 6 caractères').required('Le mot de passe est requis')
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await axios.post('http://localhost:3030/users', values);
      alert('Inscription réussie ! Vous pouvez vous connecter maintenant.');
      resetForm();
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
      alert('Erreur lors de l\'inscription. Veuillez réessayer.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Inscription</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="nom">Nom:</label>
              <Field type="text" id="nom" name="nom" />
              <ErrorMessage name="nom" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="prenom">Prénom:</label>
              <Field type="text" id="prenom" name="prenom" />
              <ErrorMessage name="prenom" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="password">Mot de passe:</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <button type="submit" disabled={isSubmitting}>S'inscrire</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
