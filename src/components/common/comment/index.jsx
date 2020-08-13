import { Rate , Input } from 'antd';
import React from 'react'
import './index.scss'
import { addComment } from '../../../http/api'

const { TextArea } = Input;

class Comment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            starNum: 5,
            comment: ''
        }
    }

    onChange = (number) => {
        this.setState({
            starNum: number
        })
    }

    commitComment = () => {
        const { bookOrder } = this.props
        const { starNum, comment } = this.state
        const userInformation = JSON.parse(sessionStorage.getItem("userInformation"))
        const _this = this
        addComment({
            orderId: bookOrder.id,
            userId: userInformation.id,
            userName: userInformation.username,
            score: starNum,
            content: comment,
            parkingLotId: bookOrder.parkingLotId
        }).then(() => {
            _this.setState = {
                score: 5,
                comment: ''
            }
            document.getElementsByClassName("ant-input")[0].value = ''
        })
    }

    commentChange = (e) => {
        this.setState({
            comment: e.target.value
        })
    }

    render() {
        return (
            <div className="comment">
                <div className="star-wrapper">
                    <Rate allowHalf defaultValue={this.state.starNum} onChange={this.onChange} />
                </div>
                <div className="comment-text">
                    {/* <textarea name="" id="" cols="160" rows="10" /> */}
                    <TextArea rows={4} className="comtent-input" value={this.state.comment} onChange={this.commentChange} />
                </div>
                <div className="commit-wrapper">
                    <button type="submit" onClick={this.commitComment}>提交</button>
                </div>
            </div>
)
    }
}

export default Comment

