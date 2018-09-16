import alt from '../../alt';
import PostActions from './../actions/PostActions';
import axios from 'axios';

class DisplayStore {
    state = {
        posts: []
    }
    constructor() {

        this.handlefetchposts()
    }
    componentWillMount() {

        console.log("will mount")
    }

    handlefetchposts() {
        axios.get(`https://jsonplaceholder.typicode.com/todos`)
            .then(res => {
                console.log(res);
                const posts = res.data;
                this.setState({ posts });
            })

    }
}

module.exports = alt.createStore(DisplayStore, 'DisplayStore')

var login ={
    componentStack :{
        InsText,
        Image
    }
}