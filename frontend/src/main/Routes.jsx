import { Switch, Route, Redirect } from 'react-router'

import Home from '../pages/Home'
import Product from '../pages/Product'
import Admin from '../pages/AdminPage/Admin'
import Browse from '../pages/Browse/Browse'

function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/admin' component={Admin} />
            <Route path='/produtos/:categoria' component={Browse} />
            <Route path='/produtos/' component={Browse} />
            <Route path='/produto/:_id' component={Product} />
            <Redirect from='*' to='/' />
        </Switch>
    )
}

export default Routes