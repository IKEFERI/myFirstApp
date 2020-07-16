import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "../../redux/usersReducer";
import * as axios from "axios";
import Friends from "./Friends";
import Preloader from "../common/Preloader";

class FriendsContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setIsFetching(false);
            this.props.setUsers(response.data.items);
        });

    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : ''}
            <Friends
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.pUsers.users,
        pageSize: state.pUsers.pageSize,
        totalUsersCount: state.pUsers.totalUsersCount,
        currentPage: state.pUsers.currentPage,
        isFetching: state.pUsers.isFetching

    }
}
export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching })(FriendsContainer);
