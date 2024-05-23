// Redux Middleware 'Logger'
const logger = store => next => action => {
    console.log('dispatching', action);
    console.log('next state', store.getState());
    return next(action);
};
// Redux Middleware 'thunk'
const thunk = sotre => next => action => {
    return typeof action === 'function'
        ? action(dispatch, sotre.getState)
        : next(action);
};