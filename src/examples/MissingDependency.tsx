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
            <p>Country: {address.country}</p>
            <p>City: {address.city}</p>
        </div>
    );
}

export default MissingDependency;