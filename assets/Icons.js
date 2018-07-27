import React from 'react';
import FA from 'react-native-vector-icons/FontAwesome'; 

export const LoginIcon = (props) => (<FA name='user' size={40} color='#fff' {...props}>{props.children || ''}</FA>);