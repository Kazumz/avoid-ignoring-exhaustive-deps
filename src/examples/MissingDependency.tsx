import React from 'react';

/*
Contains a missing dependency in the useEffect.
 */
const MissingDependency: React.FC = () => {
    const [address, setAddress] = React.useState({country: '', city: ''});

    // 👇️ objects/arrays are different on re-renders
    const obj = {country: 'Germany', city: 'Hamburg'};

    React.useEffect(() => {
        setAddress(obj);
        console.log('MissingDependency.useEffect called');

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <h1>Country: {address.country}</h1>
            <h1>City: {address.city}</h1>
        </div>
    );
}

export default MissingDependency;