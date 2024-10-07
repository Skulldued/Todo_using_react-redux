import { ADD_USER } from "../constants/constants";

export function addUserTodoActionCreator(user){
    return{
      type:ADD_USER,
      payload:user
    }
  }