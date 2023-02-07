import React, { Fragment, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store/hook';

type Props = {
    children: React.ReactNode
}

const PrivateRoute = (props: Props) => {
    const { children } = props
    const navigate = useNavigate()
    const {user} = useAppSelector(state => state.user)
    useEffect(() => {
        if(!user) {
            navigate('/')
        }
    })
  return (
    <Fragment>
        {children}
    </Fragment>
  );
};

export default PrivateRoute;
