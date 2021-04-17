import React from 'react'
import { Switch, Route } from 'react-router-dom'
const Home = () => <div>this is home</div>
const Forum = () => <div>this is a Forum</div>
const Articles = () => <div>this is the Articles</div>
const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/forum' component={Forum} />
            <Route exact path='/articles' component={Articles} />
        </Switch>
    </main>
)
export default Main;