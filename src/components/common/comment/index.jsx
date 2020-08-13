import { Rate , Input } from 'antd';
import React from 'react'
import './index.scss'

const { TextArea } = Input;

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
        return (
            <div className="comment">
                <div className="star-wrapper">
                    <Rate allowHalf defaultValue={this.state.starNum} onChange={this.onChange} />
                </div>
                <div className="comment-text">
                    {/* <textarea name="" id="" cols="160" rows="10" /> */}
                    <TextArea rows={4} className="comtent-input" />
                </div>
                <div className="commit-wrapper">
                    <button type="submit" onClick={this.commitComment}>提交</button>
                </div>
            </div>
)
    }
}

export default Comment

