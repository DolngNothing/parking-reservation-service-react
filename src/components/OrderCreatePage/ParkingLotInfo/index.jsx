import React from 'react'
import PropTypes from 'prop-types';
import { Card, Divider, Rate, Comment, List } from 'antd';
import { getCommentsByParkingLotId } from '../../../http/api'
import './index.css'

class ParkingLotInfo extends React.Component {

  constructor(props) {
    super(props);

		/**
		 * this.state中的数据为模拟数据，因为暂时没办法从redux的state中取得parkingLot的数据
		 */

    this.state = {
      comments: [],
      // parkingLot: {
      // 	'name': 'XXX停车场',
      // 	'position': '广东省珠海市香洲区软件园路1号',
      // 	'empty': 3
      // },
      lotPic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597050740122&di=080c47c6adc4de32dcab471775ef2d7e&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fb0831050509164a7f8dfbe133f936eae9ab6e6d45835b-7I6j2L_fw658'
    }
  }

  componentWillMount() {
    getCommentsByParkingLotId(this.props.parkingLot.id).then((res) => {
      this.setState({ comments: res.data })
    })
  }

  render() {
    const { name, description,price } = this.props.parkingLot
    const { lotPic, comments } = this.state
    const { emptyPosition} = this.props
    console.log(comments);
    return (
      <div className="parkingInfo">
          <Card
            className="parkingLot-wrapper"
            title={name}
            hoverable
            style={{ width: 550 }}
            cover={<img alt="example" src={lotPic} />}
          >
            <p>
              具体地址:
            			{description}
            </p>
            <Divider className="diver" />
            <p>
              实时空位:
            			{emptyPosition}
            </p>
            <Divider className="diver" />
            <p>
              价格￥:&nbsp;
            			{price}
/hour
            </p>
          </Card>

        <div className="comment-wrapper">
          <List
            className="comment-list"
            itemLayout="horizontal"
            dataSource={comments.comments}
            renderItem={item => (
              <li className="comment-li">
                <Comment
                  actions={[<Rate disabled defaultValue={item.score} />]}
                  avatar="https://pic3.zhimg.com/v2-ccfdc90c69dce8e0227960b45aa53c02_r.jpg"
                  content={item.content}
                  author={item.userName}
                  datetime={item.createTime}
                />
              </li>
            )}
          />
        </div>
      </div>
    );
  }

}

ParkingLotInfo.propTypes = {
  parkingLot: PropTypes.object.isRequired,
  emptyPosition: PropTypes.number.isRequired
}

export default ParkingLotInfo;