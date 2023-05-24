const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
  usersData: [{ id: '0', name: 'Геральт из Ривии' }],

  messagesData: [
    {
      id: '0',
      message: 'Хм. Знаешь, здесь неподалеку есть маяк.',
      isMyMessage: false,
    },
    { id: '1', message: 'Геральт ! Ты предлагаешь ?', isMyMessage: true },
    {
      id: '2',
      message: 'Нет. ну по крайней мере не сейчас. Просто хотел сказать.',
      isMyMessage: false,
    },
    {
      id: '3',
      message:
        'Хотел сказать, после. после Новиграда, когда я вижу свет маяка, мне становиться хорошо. Думаю о тебе.',
      isMyMessage: false,
    },
    {
      id: '4',
      message:
        'Невероятно. Ты сказал что-то романтичное ! Ты, Геральт из Ривии !',
      isMyMessage: true,
    },
    { id: '5', message: 'Минута слабости', isMyMessage: false },
    {
      id: '6',
      message:
        'Только бы не во время битвы, пожалуйста. Если с тобой что-то случиться.',
      isMyMessage: true,
    },
    { id: '7', message: 'Не нужно думать об этом.', isMyMessage: false },
    { id: '8', message: 'А о чем я должна думать ?', isMyMessage: true },
    {
      id: '9',
      message: 'Эмгыр вар Эмрейс. На параде. Голый.',
      isMyMessage: false,
    },
    { id: '10', message: 'Я справлюсь.', isMyMessage: false },
    { id: '11', message: 'Ты всегда так говоришь.', isMyMessage: true },
    { id: '12', message: 'И я все еще жив.', isMyMessage: false },
  ],

  newMessageText: '',
};

const messengerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        messagesData: [
          ...state.messagesData,
          { id: '14', message: state.newMessageText, isMyMessage: true },
        ],
        newMessageText: '',
      };
    }

    case UPDATE_NEW_MESSAGE_TEXT: {
      return {
        ...state,
        newMessageText: action.newText,
      };
    }

    default:
      return state;
  }
};

export const addMessage = () => ({ type: ADD_MESSAGE });

export const updateNewMessageText = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

export default messengerReducer;
