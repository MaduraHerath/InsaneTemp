import alt from '../../alt';
import PostActions from './../actions/PostActions';
import axios from 'axios';

class PostStore {
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

module.exports = alt.createStore(PostStore, 'PostStore')