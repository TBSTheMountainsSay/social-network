import profileReducer from './profile-reducer';
import messengerReducer from './messenger-reducer';

let store = {
  _state: {
    profilePage: {
      postsData: [
        {
          id: '0',
          message: 'Hello, how are you?',
          likes: '80',
          comments: '54',
          reposts: '10',
        },
        {
          id: '1',
          message: 'This is my first post!!!',
          likes: '125',
          comments: '20',
          reposts: '5',
        },
      ],
      newPostText: '',
    },
    messengerPage: {
      usersData: [
        { id: '0', name: 'Кузин Лука' },
        { id: '1', name: 'Петрова Камилла' },
        { id: '2', name: 'Бессонов Григорий' },
        { id: '3', name: 'Маркова Элина' },
        { id: '4', name: 'Соколов Дмитрий' },
        { id: '5', name: 'Макаров Максим' },
        { id: '6', name: 'Ковалева Анна' },
        { id: '7', name: 'Куприянова Аделина' },
      ],

      messagesData: [
        { id: '0', message: 'Сообщение 0' },
        { id: '1', message: 'Сообщение 1' },
        { id: '2', message: 'Сообщение 2' },
        { id: '3', message: 'Сообщение 3' },
        { id: '4', message: 'Сообщение 4' },
        { id: '5', message: 'Сообщение 5' },
      ],
      newMessageText: '',
    },
  },

  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messengerPage = messengerReducer(
      this._state.messengerPage,
      action
    );
    this._callSubscriber(this._state);
  },
};
