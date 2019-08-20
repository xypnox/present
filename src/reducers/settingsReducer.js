export default function settingsReducer(
  // Here the initial state has been declared
  state = {
    settings: {
      // For strict mode evaluation
      strict: false
    }
  },

  // action should be an object with type and value
  action
) {
  switch (action) {
    // Set the settings
    case 'SETTINGS':
      state = {
        ...state,
        settings: action.value
      };
      break;
    default:
      return state;
  }
}
