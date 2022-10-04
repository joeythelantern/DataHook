import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAxios } from './useAxios';

export interface IJsonResposne {
    data: IUserData[];
    page: number;
    per_page: number;
    total: number;
}

export interface IUserData {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

const Application: React.FunctionComponent = () => {
    const [loading, data, error, request] = useAxios<IJsonResposne>({ method: 'GET', url: 'https://reqres.in/api/users' });

    if (loading) return <p>Loading ....</p>;

    if (error !== '') return <p>{error}</p>;

    if (!data) return <p>Data was null</p>;

    return (
        <div>
            {data.data.map((u) => (
                <p key={u.first_name}>
                    {u.first_name} {u.last_name} - {u.email}
                </p>
            ))}
        </div>
    );
};

export default Application;
