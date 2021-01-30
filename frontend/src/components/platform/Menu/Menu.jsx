import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import { ListItemIcon, ListItemText, MenuItem, MenuList } from '@material-ui/core'

function Menu(props) {
    return (
        <MenuList>
            <a href="/produtos/Todos">
                <MenuItem>Produtos</MenuItem>
            </a>
        </MenuList>
    )
}

export default Menu