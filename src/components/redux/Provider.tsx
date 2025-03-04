'use client';
import React, {ReactNode} from 'react';
import {Provider} from 'react-redux';
import store from './store';

interface ProviderProps {
    children: ReactNode;
}

const prvider: React.FC<ProviderProps> = ({children}) => {
    return <Provider
    store={store}
    >{children}</Provider>
}