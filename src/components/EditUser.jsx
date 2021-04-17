import React from 'react'
import '../../App.css'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { editUserProfile, getUser } from '../../actions/userActions'

class EditUser extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      emailAddress: '',
      bullish: '',
      profilePicture: '',
      aboutMe: '',
      myCoins: '',
      base64TextString: '',
      didUpdate: false
    }
    this.onChange = this.onChange.bind(this);
    this.handlePictureChange = this.handlePictureChange.bind(this);
  }

  componentDidUpdate(){
      if(this.didUpdate){
        this.props.getUser();
        this.setState({
            didUpdate: false
        })
      }

  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handlePictureChange(event) {
    console.log("file to upload: ", event.target.files[0]);
    let file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }
  _handleReaderLoaded = (readerEvt) => {
    let binaryString = readerEvt.target.result;
    this.setState({
      base64TextString: btoa(binaryString),
    });
  };

  onSubmit(e, propertyToModify) {
    e.preventDefault();

    
    var updatedUserInfo;
    if(propertyToModify === "profilePicture"){
        updatedUserInfo = {
            [propertyToModify]: this.state.base64TextString
        }
        // const preview = document.getElementById('profile-pic');
        // preview.src = "data:image/png;base64," + this.state.base64TextString
    }else{
        updatedUserInfo =
        { 
            [propertyToModify]: this.state[propertyToModify]
        }
    }
    this.props.editUserProfile(updatedUserInfo);
    
    this.setState({
        didUpdate: true
    });
  }
 

  render() {
    return (
        <div className="col-6">
            <div className="login-div">
                <h3 className="text-center">Edit User</h3>
                <form onSubmit={(e) => this.onSubmit(e, "username")}>
                    Username: <input
                    type="text" name="username"
                    value={this.state.username}
                    placeholder={this.props.username}
                    onChange={(e) => this.onChange(e)}/>
                     <button type="submit">
                        Submit
                    </button>
                </form>
                    <br></br>
                <form onSubmit={(e) => this.onSubmit(e, "password")}>
                    Password: <input
                    type="password" name="password"
                    value={this.state.password}
                    onChange={(e) => this.onChange(e)}/>
                    <button type="submit">
                        Submit
                    </button>
                </form>
                    <br></br>
                <form onSubmit={(e) => this.onSubmit(e, "emailAddress")}>
                    Email: <input
                    type="email" name="emailAddress"
                    value={this.state.emailAddress}
                    placeholder={this.props.emailAddress}
                    onChange={(e) => this.onChange(e)}/>
                    <button type="submit">
                        Submit
                    </button>
                </form>
                    <br></br>
                <form onSubmit={(e) => this.onSubmit(e, "aboutMe")}>
                    About me: <textarea
                    type="text" name="aboutMe"
                    value={this.state.aboutMe}
                    placeholder={this.props.aboutMe}
                    onChange={(e) => this.onChange(e)}/>
                    <button type="submit">
                        Submit
                    </button>
                </form>
                    <br></br>
                <form onSubmit={(e) => this.onSubmit(e, "birdCall")}>
                    Bird Call: <textarea
                    type="text" name="birdCall"
                    value={this.state.birdCall}
                    placeholder={this.props.birdCall}
                    onChange={(e) => this.onChange(e)}/>
                    <button type="submit">
                        Submit
                    </button>
                </form>    
                    <br></br>
                {/* <form onSubmit={(e) => this.onSubmit(e, "myBirds")}>    
                    My Birds: <textarea
                    type="text" name="myBirds"
                    value={this.state.myBirds}
                    placeholder={this.props.myBirds}
                    onChange={(e) => this.onChange(e)}/>
                    <button type="submit">
                        Submit
                    </button>
                </form>
                     <br></br>
                <form onSubmit={(e) => this.onSubmit(e, "birdsIWatch")}>
                    Birds I Watch: <textarea
                    type="text" name="birdsIWatch"
                    value={this.state.birdsIWatch}
                    placeholder={this.props.birdsIWatch}
                    onChange={(e) => this.onChange(e)}/>
                    <button type="submit">
                        Submit
                    </button>
                </form> */}
                    <br></br>
                    <div><br></br>
                <form onSubmit={(e) => this.onSubmit(e, "profilePicture")}>                                    
                    <input
                        type="file"
                        name="profilePicture"
                        id="file"
                        accept=".jpeg, .png, .jpg"
                        onChange={(e) => this.handlePictureChange(e)}
                    />
                    <button type="submit">
                        Submit
                    </button>
                  </form>  
                    </div>
                <br></br>
                <img className="profile-pic" alt="profile" src={`data:image/png;base64,${this.base64TextString}`}/>
            </div>
        </div>
       

         
        
     
    );
  }
}
const mapDispatchToProps = dispatch => {
    return {    
      editUserProfile: data => dispatch(editUserProfile(data)),
      getUser: () => dispatch(getUser())
    }
  }

const mapStateToProps = (state) => {
    return {  
        username: state.user.info.username,
        emailAddress: state.user.info.emailAddress,
        bullish: state.user.info.bullish,
        aboutMe: state.user.info.aboutMe,
        myCoins: state.user.info.myCoins
    }
}

EditUser.propTypes = {
    editUserProfile: PropTypes.func.isRequired,
    getUser:  PropTypes.func.isRequired
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditUser);