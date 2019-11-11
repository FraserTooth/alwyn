import SidebarItem from './sidebaritem'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default () => {
    return (
        <div>
            <ListItem>
                <ListItemText>
                    Drag and drop these items onto the canvas.
                </ListItemText>
            </ListItem>
                <SidebarItem
                    type="top/bottom"
                    ports={ {
                    port1: {
                        id: 'port1',
                        type: 'top',
                        properties: {
                        custom: 'property',
                        },
                    },
                    port2: {
                        id: 'port1',
                        type: 'bottom',
                        properties: {
                        custom: 'property',
                        },
                    },
                    } }
                    properties={ {
                    custom: 'property',
                    }}
                />
        </div>
    )
}