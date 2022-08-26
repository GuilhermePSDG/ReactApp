export default function reducer(state, action) {
    switch (action.type) {
        case 'ADD_ITEM': return ADD_ITEM();

        case 'REMOVE_ITEM': return REMOVE_ITEM()

        case 'UPDATE_ITEM': return UPDATE_ITEM()

        default: throw new Error('no macthing action type for : ' + action.type);
    }

    function ADD_ITEM() {
        const nitems = [...state.items, action.payload];
        return { ...state, items: nitems }
    }

    function REMOVE_ITEM() {
        const nitems = state.items.filter(x => x.id !== action.payload);
        return { ...state, items: nitems }
    }
    function UPDATE_ITEM() {
        const index = state.items.findIndex(x => x.id === action.payload.id);
        const nItems = [...state.items]
        nItems[index] = action.payload;
        return { ...state, items: nItems }
    }

}