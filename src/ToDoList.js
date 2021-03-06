import React, {Component} from 'react';

export default class ToDoList extends Component {
    state = {
      currentItem: '',
      items: [],
    }
  
    handleChange = (text) => {
      this.setState({
        currentItem: text.target.value
      });
    }
  
    addItem = () => {
      const newItem = {
        id: this.state.items.length,
        currentItem: this.state.currentItem,
        isCompleted: false,
      }
      const items = [ ...this.state.items, newItem ]
      this.setState({
        items: items,
        currentItem: ''
      });
    }
  
    render() {
      const test = this.state.items.map((item) => item.isCompleted);
      console.log (test)
  
      return (
        <div>
            <input type='text' onChange={this.handleChange} />
            <input type='submit' onClick={this.addItem} value='Save' />
            <ul>{this.state.items.map((item) => <li key = {item.id}>{item.currentItem}</li>)}</ul>
        </div>
      );
    }
  }