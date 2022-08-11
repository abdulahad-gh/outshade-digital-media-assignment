import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hooks = () => {
    const [user, setUser] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {

        if (user) {
            navigate('/dashboard')
        }

    }, [user, navigate])
    return [setUser]
};

export default Hooks;