import React from 'react';

/*
Contains a useEffect with no dependencies.
 */
const NoDependency: React.FC = () => {
    const [address, setAddress] = React.useState({country: '', city: ''});

    // 👇️ get memoized value
    const obj = React.useMemo(() => {
        return {country: 'Germany', city: 'Hamburg'};
    }, []);

    React.useEffect(() => {
        setAddress(obj);
        console.log('NoDependency.useEffect called');

        // 👇️ safely include in dependencies array
    }, [obj]);

    return (
        <div>
            <h1>Country: {address.country}</h1>
            <h1>City: {address.city}</h1>
        </div>
    );
}

export default NoDependency;