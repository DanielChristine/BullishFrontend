import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createAccount, loginSquawkUser} from '../../actions/userActions'
import { createBirdFact, createBirdImage } from '../../actions/birdActions'
import { deleteOldBlacklistedTokens } from '../../actions/generalActions'
import PropTypes from 'prop-types'

class Login extends Component {
  
  componentDidMount(){
    this.props.createBirdImage();
    this.props.createBirdFact();
  }

  constructor() {
    super()
    this.state = {
      usernameOrEmailAddress: '',
      password: ''
    }

    this.handleUserChange = this.handleUserChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleUserChange(event) {
    this.setState({ 
      usernameOrEmailAddress: event.target.value
     })
  }

  handlePasswordChange(event) {
    this.setState({ 
        password: event.target.value
     })
  }

  handleCreateUser(){
    console.log("button clicked")
    this.props.createAccount();
  }

  async handleSubmit(event) {
    console.log("clicked submit")
    event.preventDefault()
    const login = {  
          usernameOrEmailAddress: this.state.usernameOrEmailAddress, 
          password: this.state.password 
    }
    await this.props.loginSquawkUser(login);
    this.props.deleteOldBlacklistedTokens();
  }

  render() {
    return (
        <div className="col-6 text-center d-flex justify-content-center">
            <div className="login-div">
                <h3>Log in to Squawk</h3>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input
                    placeholder="Username or email address"
                    type="text"
                    value={this.state.usernameOrEmailAddress}
                    onChange={this.handleUserChange}
                    required={true}
                    size="26"
                    /><br></br>
                    <input
                    placeholder="Password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                    required={true}
                    size="26"
                    />
                    <div>
                    <button type="submit">
                        Submit
                    </button>
                    </div>
                </form>
                <div>
                    <br></br>
                    <button onClick={() => this.handleCreateUser()}>Company <ul>Sign-up</ul></button><br></br>
                    
                    <p className="hidden" id="invalid">Invalid login. Please try again.</p>
                </div>
            </div>
        </div>
    )
  }
}

Login.propTypes = {
  createAccount: PropTypes.func.isRequired,
  loginSquawkUser: PropTypes.func.isRequired,
  createBirdFact: PropTypes.func.isRequired, 
  createBirdImage:  PropTypes.func.isRequired,
  deleteOldBlacklistedTokens: PropTypes.func.isRequired
};

// const mapDispatchToProps = dispatch => {
//   return {    
//     createPost: data => dispatch(createPost(data)),
//     createFeed: () => dispatch(createFeed()),
//     likePost: data => dispatch(likePost(data)),
//     editPost: data => dispatch(editPost(data)),
//     deletePost: data => dispatch(deletePost(data)),
//     feedToggle: () => dispatch(feedToggle()),
//     deleteOldBlacklistedTokens: () => dispatch(deleteOldBlacklistedTokens())
//   }
// }

const mapStateToProps = (state) => ({
  pageDisplayed: state.pageDisplayed.type 
})

export default connect(
  mapStateToProps,
  {
  createAccount,
  loginSquawkUser,
  createBirdFact,
  createBirdImage,
  deleteOldBlacklistedTokens
})
(Login);