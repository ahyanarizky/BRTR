
var React = require('react');
var ReactNative = require('react-native');
var {
    Alert,
    AsyncStorage
} = ReactNative;

import type { Action } from './types';

export const LOAD_USER_BY_ID = 'LOAD_USER_BY_ID'
export const LOAD_USER_BY_ID_SUCCESS = 'LOAD_USER_BY_ID_SUCCESS'
export const LOAD_USER_BY_ID_FAILURE = 'LOAD_USER_BY_ID_FAILURE'
export const CLEAR_USER = 'CLEAR_USER'

import decode from 'jwt-decode'
import {stopLoading} from './loading'

export function loadUserById() {
    return {type: LOAD_USER_BY_ID}
}

export function loadUserSuccessById(user) {
    return {type: LOAD_USER_BY_ID_SUCCESS, user: user}
}

export function loadUserFailureById() {
    return {type: LOAD_USER_BY_ID_FAILURE}
}

export function clearUser() {
    return {type: CLEAR_USER}
}

export function getUserById(token, id, navigator) {
    const userDecoded = decode(token)
    return (dispatch) => {
        // dispatch(loadUserById())
        fetch(`http://br-tr-dev.ap-southeast-1.elasticbeanstalk.com/api/auth/user/${id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
              if (responseJson) {
                dispatch(loadUserSuccessById(responseJson))
                dispatch(stopLoading())
              } else {
                Alert.alert(
                    'Session has expired',
                    'Please login again',
                    [
                        {text: 'OK', onPress: async()=>{
                          try {
                              await AsyncStorage.removeItem("myKey");
                              navigator.replace({id: 'loginPage'})
                          } catch (error) {

                          }

                        }
                        },
                    ]
                )
              }

            })
            .catch((error) => {
                dispatch(loadUserFailureById())
            });
    }
}
