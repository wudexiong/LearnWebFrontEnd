import React, { Component } from 'react'
import TodoListUi from './TofoListUI'
import store from './store'
import { changeInputAction, addItemAction, deleteItemAction, getTodoList, getMyListAction } from './store/actionCreators'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.clickBut = this.clickBut.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        store.subscribe(this.storeChange)
    }
    componentDidMount() {
        // getTodoList()
        const action =getMyListAction()
        store.dispatch(action)
    }
    storeChange() {
        this.setState(store.getState())
    }
    changeInputValue(e) {
       const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    clickBut() {
        const action = addItemAction()
        store.dispatch(action)
    }
    deleteItem(index) {
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
    render() {
        return (
            <TodoListUi 
            inputValue={this.state.inputValue}
            list={this.state.list}
            changeInputValue={this.changeInputValue}
            clickBut={this.clickBut}
            deleteItem={this.deleteItem}
            />
        )
    }

}


export default TodoList


