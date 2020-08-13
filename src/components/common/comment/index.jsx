import { Rate } from 'antd';
import React from 'react'
import './index.scss'


class Comment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            starNum: 5
        }
    }

    onChange = (number) => {
        this.setState({
            starNum: number
        })
    }

    commitComment = () => {

    }

    render() {
        return <div className="comment-wrapper">
            <div className="star-wrapper">
                <Rate allowHalf defaultValue={this.state.starNum} onChange={this.onChange}/>
            </div>
            <div className="comment-text">
                <textarea name="" id="" cols="160" rows="10"></textarea>
            </div>
            <div className="commit-wrapper">
                <button onClick={this.commitComment}>提交</button>
            </div>
        </div>
    }
}

export default Comment

