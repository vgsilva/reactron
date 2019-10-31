import { connect } from 'react-redux'
import Counter from './Counter'

function mapStateToProps(state) {
  return { count: state.count }
}

export default connect(mapStateToProps)(Counter)