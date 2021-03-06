
import { combineReducers } from 'redux';

import auth from './auth';
import items from './items';
import itemId from './itemId';
import categories from './categories';
import searchItem from './searchItem';
import categoryId from './categoryId';
import listMessage from './listMessage';
import createMessageItem from './createMessageItem';
import updateProfile from './updateProfile';
import getUserById from './getUserById';
import loading from './loading';
import token from './token';


import messageDetail from './messageDetail';

export default combineReducers({

    auth,
    items,
    itemId,
    categories,
    searchItem,
    categoryId,
    listMessage,
    createMessageItem,
    messageDetail,
    updateProfile,
    getUserById,
    loading,

});
