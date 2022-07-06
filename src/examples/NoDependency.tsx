import React from 'react';

/*
Contains a useEffect with no dependencies.
 */
const NoDependency: React.FC = () => {
    const [address, setAddress] = React.useState({country: '', city: ''});

    React.useEffect(() => {
        // 👇️ move object / array / function declaration
        // inside of the useEffect hook
        const obj = {country: 'Germany', city: 'Hamburg'};

        setAddress(obj);
        console.log('NoDependency.useEffect called');
    }, []);

    return (
        <div>
            <h1>Country: {address.country}</h1>
            <h1>City: {address.city}</h1>
        </div>
    );
}

export default NoDependency;