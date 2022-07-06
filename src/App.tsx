import React from 'react';

import './App.scss';

import { ReactComponent as Logo } from './assets/logo.svg';
import Card from './components/Card';
import MissingDependency from './examples/MissingDependency';
import MemoDependency from './examples/MemoDependency';
import NoDependency from './examples/NoDependency';
import ComponentDidMount from './examples/exercise/ComponentDidMount';

/*
Comment out any examples you do not want to run concurrently.
 */
const App: React.FC = () => {
    return (
        <div className="app">
            <header className="app__header">
                <Logo className="app__header-logo"/>
            </header>

            <main className="app__main">
                <Card title='Missing useEffect Dependency'>
                    <MissingDependency />
                </Card>
                <Card title='Memo useEffect Dependency'>
                    <MemoDependency />
                </Card>
                <Card title='No useEffect Dependency'>
                    <NoDependency />
                </Card>
                <Card title='ComponentDidMount useEffect Equivalent'>
                    <ComponentDidMount />
                </Card>
                <Card title='ComponentDidMount useEffect Equivalent Solution'>
                    <MissingDependency />
                </Card>
            </main>
        </div>
    );
}

export default App;