import React from "react";
import userPhoto from "../../assets/img/user.jpg"
import style from "./Friends.module.sass"
import {NavLink} from "react-router-dom";


let Friends = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={style.friendsContainer}>
        <div className={style.usersPagination}>
            {
                pages.map((p) => <span onClick={() => {
                    return props.onPageChanged(p);
                }} key={p} id={p} className={props.currentPage === p ? style.currentPage : ""}> {p} </span>)
            }
        </div>
        {
            props.users.map(f => <div className={style.friendsItem} key={f.id}>
                <div className={style.friendsItemAction}>
                    <NavLink className={style.imgRound} to={"/user/" + f.id}>
                        <img src={f.photos.small ? f.photos.small : userPhoto}
                             alt={f.name}/>
                    </NavLink>


                    <div>
                        {f.followed ?
                            <button onClick={() => props.unfollow(f.id)}>Unfollow</button> :
                            <button onClick={() => props.follow(f.id)}>Follow</button>}
                    </div>
                </div>
                <div className={style.friendsItemBody}>
                    <div className={style.friendsItemBodyName}>
                        {f.name}
                    </div>
                    <div className={style.friendsItemBodyStatus}>
                        {f.status}
                    </div>
                    <div className={style.friendsItemLocation}>
                        {/*<span>{f.location.land}, </span>*/}
                        {/*<span>{f.location.city}</span>*/}
                    </div>
                </div>

                <div className={style.friendsItemScore}>
                    {/*{f.score}*/}
                    <div>Scores</div>
                </div>
            </div>)
        }

        <button>Load more</button>
    </div>

}


export default Friends;