import React from "react";
import User from "./User";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/userReducer";
import {withRouter} from "react-router-dom";

class UserContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfile(response.data);
        });
    }

    render() {
        return (
            <>
                <User {...this.props}/>
            </>
        );
    }

}

let mapStateToProps = (state) => ({
    profile: state.pUser.profile
})

let WRUserContainer = withRouter(UserContainer);

export default connect(mapStateToProps, {setUserProfile})(WRUserContainer);