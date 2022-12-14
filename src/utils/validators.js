import React from "react";

//export const required = value => (value || typeof value === 'number' ? undefined : 'Required')
//const maxLength = max => value =>
    //value && value.length > max ? `Должно быть не больше ${max} букв` : undefined


const maxLength = max=>value=>
    value && value.length>max ?
        `Должно быть не более ${max} букв`:
        undefined

export const maxLength15 = maxLength(15)
 const minLength = min => value =>
    value && value.length < min ? `Должно быть не менее ${min} букв` : undefined
export const minLength2 = minLength(2)



export  const maxLength30= maxLength(30)
export const alphaNumeric = value =>
    value && /[^a-zA-Z0-9 ]/i.test(value)
        ? 'Только буквенно-цифровые символы'
        : undefined

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined