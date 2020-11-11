import React from 'react';
import axios from 'axios';

import Index from './Index';
import Create from './Create';
import Update from './Update';
import Delete from './Delete';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default Home;

function Home() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/view">
                        <Index />
                    </Route>
                    <Route path="/create">
                        <Create />
                    </Route>
                    <Route path="/update">
                        <Update />
                    </Route>
                    <Route path="/delete">
                        <Delete />
                    </Route>
                    <Route path="/">
                        <ul>
                            <li>
                                <Link to={`/view`}>View</Link>
                            </li>
                            <li>
                                <Link to={`/create`}>Create</Link>
                            </li>
                            <li>
                                <Link to={`/update`}>Update</Link>
                            </li>
                            <li>
                                <Link to={`/delete`}>Delete</Link>
                            </li>
                        </ul>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}
