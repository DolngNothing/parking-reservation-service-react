import { connect } from 'react-redux'
import Comment from '../components/common/comment'

const mapStateToProps = state => {
    return {
      bookOrder: state.bookOrder,
      comment: state.comment
    }
  }

const CommentContainer = connect(mapStateToProps, null)(Comment)

export default CommentContainer