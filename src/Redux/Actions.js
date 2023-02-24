import AsyncStorage from "@react-native-async-storage/async-storage";


export const Init = () => {
    return async dispatch => {
        let token = await AsyncStorage.getItem("token");
        let token1 = await AsyncStorage.getItem("token Mail");
        if (token !== null) {
            console.log("Typing Token Fetch", token)
            // console.log("Mail Token Fetch", token1)
            dispatch({
                type: 'LOGIN',//MAIL
                payload: token,//token
            })
        }
        else if (token1 !== null) {
            console.log("Mail Token Fetch", token1)
            dispatch({
                type: 'MAIL',
                payload: token1,
            })
        }
    }
}

export const UserLogin = (username, password) => {
    return async dispatch => {
        let token = null;
        if (username === username && password == password) {
            token = username + password;
            await AsyncStorage.setItem("token", token);
            console.log("Token Stored", token)
        }
        dispatch({
            type: 'LOGIN',
            payload: token,
        })
    }
}

export const UserMailLogin = (name, img) => {
    return async dispatch => {
        let token1 = null;
        let phote = null;
        if (name === name && img === img) {
            token1 = name;
            phote = img;
            await AsyncStorage.setItem("token Mail", token1);
            await AsyncStorage.setItem("token Mail Img", phote);
            console.log("Mail Token Stored", token1)
            console.log("token Mail Img", phote);
        }
        dispatch({
            type: 'MAIL',
            payload: token1,
        })
    }
}

export const UserLogout = () => {
    return async dispatch => {
        await AsyncStorage.clear();
        // await AsyncStorage.removeItem('token'); for one item
        dispatch({
            type: 'LOGOUT',
            // payload: token,
        })
    }
}