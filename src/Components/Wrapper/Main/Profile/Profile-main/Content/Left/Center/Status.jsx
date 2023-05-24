import React from 'react';
import styles from './Center.module.css';

class Status extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (event) => {
    this.setState({ status: event.currentTarget.value });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.status !== this.props.status) {
      console.log(this.props.status);
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    return (
      <div className={styles.status}>
        {!this.state.editMode && (
          <div>
            <span onClick={this.activateEditMode}>
              {this.state.status || 'Изменить статус'}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              className={styles['input-status']}
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Status;
