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
            <p>Country: {address.country}</p>
            <p>City: {address.city}</p>
        </div>
    );
}

export default NoDependency;