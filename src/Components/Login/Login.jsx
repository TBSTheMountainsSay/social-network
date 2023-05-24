import React from 'react';
import styles from './Login.module.css';
import { useForm, Controller } from 'react-hook-form';
import { connect } from 'react-redux';
import { login } from '../../Redux/auth-reducer';
import { Navigate } from 'react-router';

const Login = (props) => {
  const { handleSubmit, control } = useForm({
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });
  const onSubmit = (data) => {
    props.login(data.email, data.password, data.rememberMe);
  };

  if (props.isAuth) {
    return <Navigate to="/profile" />;
  }
  return (
    <div className={styles.main}>
      <div className={styles.title}>LOGIN</div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          rules={{
            required: 'This field is required',
            validate: {
              myValidator: (value) =>
                /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value) ||
                'Incorrect email',
            },
          }}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <div>
              <input
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                className={`${styles.input} ${error ? styles.error : ''}`}
                placeholder={'Email'}
                type={'text'}
              />
              <div className={styles[`error-message`]}>
                {error && error.message && error.message}
              </div>
            </div>
          )}
        />

        <Controller
          name="password"
          control={control}
          rules={{
            required: 'This field is required',
            minLength: { value: 6, message: 'Min length - 6 symbols' },
          }}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <div>
              <input
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                className={`${styles.input} ${error ? styles.error : ''}`}
                placeholder={'Password'}
                type={'password'}
              />
              <div className={styles[`error-message`]}>
                {error && error.message && error.message}
              </div>
            </div>
          )}
        />

        <div className={styles.checkbox}>
          <Controller
            name="rememberMe"
            control={control}
            render={({
              field: { onChange, onBlur, value },
              fieldState: {},
            }) => (
              <input
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                type={'checkbox'}
              />
            )}
          />
          remember me
        </div>
        <div>
          <button type={'submit'} className={styles.button}>
            Login
          </button>
        </div>
      </form>
      {props.errorMessage && (
        <div className={styles[`server-error`]}>{props.errorMessage}</div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    errorMessage: state.auth.errorMessage,
  };
};

export default connect(mapStateToProps, { login })(Login);
