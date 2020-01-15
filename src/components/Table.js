import React from 'react';
import axios from 'axios';

class Table extends React.Component {
    state = {
        todos: [],
        sort: {
            id: false,
            userId: false,
            title: false,
            completed: false
        }
    }
    componentDidMount = () => {
        this.fetchTodos('id');
    }

    fetchTodos = async (item) => {
        const sort = { ...this.state.sort };
        sort[`${item}`] = !sort[`${item}`];
        this.setState({
            sort
        })
        const type = this.state.sort[`${item}`] ? 'asc' : 'desc';
        await axios.get(`https://jsonplaceholder.typicode.com/todos?_sort=${item}&_order=${type}`).then(res => this.setState({
            todos: res.data
        }))
        console.log(this.state.todos);
    }

    sortTable = e => {
        this.fetchTodos(e.target.getAttribute('sort'));
    }

    renderTable() {
        return this.state.todos.map(a => (
            <tr key={a.id}>
                <td>{a.userId}</td>
                <td>{a.id}</td>
                <td>{a.title}</td>
                <td>{a.completed ? 'Tamamlanıb' : 'Tamamlanmayıb'}</td>
            </tr>
        ))
    }


    render() {
        return (
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th sort={'id'} onClick={this.sortTable}>ID</th>
                            <th sort={'userId'} onClick={this.sortTable}>UserID</th>
                            <th sort={'title'} onClick={this.sortTable}>Title</th>
                            <th sort={'completed'} onClick={this.sortTable}>Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;