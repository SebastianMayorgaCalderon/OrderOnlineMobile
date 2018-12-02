import { ADD_EMAIL } from './authActionTypes';

export const addEmail=(email)=>(
    {
        type:ADD_EMAIL,
        data: email
    }
)