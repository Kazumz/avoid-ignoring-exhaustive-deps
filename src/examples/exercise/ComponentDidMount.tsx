import React from 'react';

/*
Contains a useEffect that intends to act like 'ComponentDidMount' in a class based component.
 */
const ComponentDidMount: React.FC = () => {
    const [address, setAddress] = React.useState({ country: '', city: '' });

    //👇️ Unstable variable - created over and over again each render.
    const obj = { country: 'Germany', city: 'Hamburg' };

    useEffectOnce(() => {
        setAddress(obj);
        console.log('ComponentDidMount.useEffectAfterFirstRender called');
    });

    return (
        <div>
            <p>Country: {address.country}</p>
            <p>City: {address.city}</p>
        </div>
    );
}

export const useEffectOnce = (cb: () => void) => {
    React.useEffect(() => {
        cb()

        //👇️ The linting rule we wish we could remove. We'd have to include cb and obj, both unstable variables.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}

export default ComponentDidMount;