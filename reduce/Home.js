/**
 * Created by zerowolf on 2018/2/3.
 */
export const ACTION_TYPE = {
    ACTION_LOGIN: "ACTION_LOGIN",
    ACTION_SUCCESS: "ACTION_SUCCESS",
    ACTION_FAILURES: "ACTION_FAILURES",
    ACTION_LOGOUT: "ACTION_LOGOUT",
    ACTION_READHOMEDATA: "ACTION_READHOMEDATA"
}

export const initialState = {
    user: null,
    isLoading: false,
    error: null
};

export default reducers = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPE.ACTION_LOGIN:
            // console.log('logining')
            console.log(action.payload.email)
            return {...state, isLoading: true, user: action.payload.email}
        case ACTION_TYPE.ACTION_SUCCESS:
            return {...state, isLoading: false, user: action.user}
        case ACTION_TYPE.ACTION_FAILURES:
            return {...state, isLoading: false, error: action.error()}
        case ACTION_TYPE.ACTION_LOGOUT:
            // console.log('loginout')
            console.log(action.email);
            return {...state, isLoading: false, user: '1122'}
        // case ACTION_TYPE.ACTION_READHOMEDATA:
        //     // console.log('loginout')
        //     // console.log(action.email);
        //     return {...state, isLoading: action.isLoading, user: action.user,error:action.error}
        default:
            return state;
    }
}

export const LOGIN = (state = {}, action) => {
    switch (action.type) {
        case ACTION_TYPE.ACTION_LOGIN:
            console.log('logining')
            console.log(action.data)
            return Object.assign(
                {}, state,
                {data: action.data}
            );
        default:
            return state;
    }
}

export const login = (data) => {
    return {
        type: ACTION_TYPE.ACTION_LOGIN,
        data
    }
}
export const actions = {
    login: (email, password) => ({type: ACTION_TYPE.ACTION_LOGIN, payload: {email, password}}),
    loginOut: (email) => ({type: ACTION_TYPE.ACTION_LOGOUT, email}),
    readHomeData: (user, isLoading, error) => ({type: ACTION_TYPE.ACTION_READHOMEDATA, user, isLoading, error})
};

