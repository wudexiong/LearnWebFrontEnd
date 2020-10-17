import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class List extends Component {
    constructor(props) {    
        super(props);
        this.state = { 
            list:[
                {cid:123,title:'个人博客-1'},
                {cid:456,title:'个人博客-2'},
                {cid:789,title:'个人博客-3'},
            ]
        }
    }
    render() { 
        return ( <ul>
            {this.state.list.map((item,index) => {
                return (
                <li key={index+item}>
                    <Link to={'/list/'+item.cid} />
                    {item.title}</li>
                )
            })}
        </ul> );
    }
    componentDidMount() {
        console.log(this.props.match.params.id)
        // patch:自己定义的路由规则，可以清楚的看到是可以产地id参数的。
        // url: 真实的访问路径，这上面可以清楚的看到传递过来的参数是什么。
        // params：传递过来的参数，key和value值
        this.setState({id : this.props.match.params.id})
    }
}
 
export default List;