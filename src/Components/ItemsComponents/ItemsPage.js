import { useReducer } from "react"
import Items from './ItemsList'
import reducer from './ItemsReducer'
import ItemsContext from './ItemsContext'
import ItemssForm from './ItemsForm'
import "./Items.css"


const DefaultState = {
    items: [{
        id: '1',
        name: 'Item 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
    },
    {
        id: '2',
        name: 'Item 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
    },
    {
        id: '3',
        name: 'Item 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
    }],
}
export default function ItemsPage() {
    const [state, dispatch] = useReducer(reducer, DefaultState);
    return <>
        <ItemsContext.Provider value={{ state, dispatch }}>
            <>
                <ItemssForm>
                </ItemssForm>
                <Items source={state.items} />
            </>
        </ItemsContext.Provider>
    </>
}
