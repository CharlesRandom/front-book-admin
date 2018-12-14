import React,{Component} from 'react'
import {allBooks} from '../../services/books'
import {Link} from 'react-router-dom'

class BookList extends Component{
    state={
        books:[]
    }
    componentWillMount() {
        allBooks()
            .then(books => {
                this.setState({books})
            })
            .catch(e=> console.log(e))
    }

    render() {
        const {books} = this.state
        console.log(books)
        return (

            <div className="jumbotron">
                <h1 className="display-4">Books List</h1>
                <p className="lead">This data comes from books api made by Charles&Associates-Amazon Squad</p>
                <hr className="my-4" />
                <ul className="list-group">
                    {books.map((e,i)=> <Link to={`/books/${e._id}`}><li key={i} className="list-group-item">{e.name}</li></Link>)}

                </ul>
            </div>
        )
    }
}
export default  BookList