import React from 'react';

/*
Contains a useEffect that has a hoisted useRef variable dependency.
 */
const ComponentDidMountSolution: React.FC = () => {
    const [address, setAddress] = React.useState({country: '', city: ''});

    //👇️ Stable variable - useRef is an equivalent of a class based variable carried across each render and pointing to the same space in memory.
    const obj = React.useRef({country: 'Germany', city: 'Hamburg'});

    React.useEffect(() => {
        setAddress(obj.current);
        console.log('ComponentDidMountSolution.useEffect called');
    }, []);

    return (
        <div>
            <p>Country: {address.country}</p>
            <p>City: {address.city}</p>
        </div>
    );
}

// 👌 We used the tooling available in React to resolve the issue, so our hook doesn't need to exist anymore.

export default ComponentDidMountSolution;