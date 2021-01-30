import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

function Nav(props) {
    return (
        <div >
            <nav>
                <List>
                <a href="/admin/users">
                    <ListItem>
                    Usuários
                    </ListItem>
                </a>
                </List>
            </nav>
        </div>
    )
}

export default Nav