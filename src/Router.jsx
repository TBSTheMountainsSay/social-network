import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './Components/Login/Login';
import React, { Suspense } from 'react';
import PrivateLayout from './Layouts/PrivateLayout';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './Redux/app-reducer';
import styles from './App.css';
import SvgSelector from './Components/SvgSelector/SvgSelector';
import { withRouter } from './hoc/withRouter';

const ProfileContainer = React.lazy(() =>
  import('./Components/Wrapper/Main/Profile/ProfileContainer')
);
const FriendsContainer = React.lazy(() =>
  import('./Components/Wrapper/Main/Friends/FriendsContainer')
);
const MessengerContainer = React.lazy(() =>
  import('./Components/Wrapper/Main/Messenger/MessengerContainer')
);

const Error = React.lazy(() => import('./Components/Wrapper/Main/Error/Error'));

class Router extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <SvgSelector id="preloader" className={styles['app-preloader']} />;
    }

    return (
      <Suspense>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateLayout />}>
            <Route path="*" element={<Error />} />
            <Route path="/" element={<Navigate to="/profile" />} />
            <Route
              exact
              path="/profile/:userId?"
              element={<ProfileContainer />}
            />
            <Route exact path="/friends" element={<FriendsContainer />} />
            <Route exact path="/dialogs/*" element={<MessengerContainer />} />
            <Route exact path="/communities" element={<Error />} />
            <Route exact path="/music" element={<Error />} />
            <Route exact path="/videos" element={<Error />} />
            <Route exact path="/feed" element={<Error />} />
            <Route exact path="/settings" element={<Error />} />
          </Route>
        </Routes>
      </Suspense>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(Router);
