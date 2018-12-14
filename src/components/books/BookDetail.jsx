import React,{Component} from 'react'
import {detailBooks} from '../../services/books'
import {Link} from 'react-router-dom'

class BookDetail extends Component {
    state={
        book:{}
    }
    componentWillMount() {
        const {id} = this.props.match.params
        detailBooks(id)
            .then(book=> {
                console.log(book)
                this.setState({book})
            })
            .catch(e=> console.log(e))
    }

    render(){
        const {book} = this.state
        console.log(book)
        return(
            <div>
                <Link to="/" className="btn btn-primary" style={{width:"100vw"}}>Home</Link>
                <div className="d-flex justify-content-center">
                    <div className="card col-md-6">
                        <div className="align-items-center">
                            <img className="card-img-top" style={{maxWidth:"20%"}} src="http://manoharbooks.com/img/not.jpg" alt="Beer pic"/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{book.name}</h5>
                            <Link to="/profile" className="btn btn-primary">Go back</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default BookDetail