import {Action, createStore, Store} from 'redux';

export interface IAppState {
    elementList: any[]
}


export const INITIAL_STATE: IAppState = {
    elementList: [],
};

export class ListActions {
    static REMOVE_ITEM = 'REMOVE_ITEM';
    static REMOVE_ALL = 'REMOVE_ALL';
    static ADD_ITEM = 'ADD_ITEM';

    removeItem(payload: number): any {
        return {type: ListActions.REMOVE_ITEM, payload: payload};
    }

    removeAll(): Action {
        return {type: ListActions.REMOVE_ALL};
    }
}

export function rootReducer(lastState: IAppState, action: any): IAppState {
    switch (action.type) {
        case ListActions.ADD_ITEM:
            return {
                elementList: [...lastState.elementList, {value: action.payload, completed: false}]
            };
        case ListActions.REMOVE_ITEM:
            lastState.elementList[action.payload] = {...lastState.elementList[action.payload], completed: true};
            return {elementList: lastState.elementList};
        case ListActions.REMOVE_ALL:
            return {
                elementList: lastState.elementList.map(item => {
                    item.completed = true;
                    return item;
                })
            };
    }

    return lastState;
}

export const storeInstance: Store<IAppState> = createStore(rootReducer, INITIAL_STATE);