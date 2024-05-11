'use client';

import {SessionProvider} from 'next-auth/react';
import CheckAuth from "@/app/auth/CheckAuth";

const AuthProvider = ({children}) => {
    return (
        <SessionProvider>
            <CheckAuth/>
            {children}
        </SessionProvider>
    );
};

export default AuthProvider;