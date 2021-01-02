import React from 'react'
import Paginator from '../common/Paginator/Paginator';
import User from './User';

let Users = ({currentPage, totalUsersCount, onPageChanged, pageSize, users, ...props}) => {

  return (
  <div>
    <Paginator currentPage={currentPage} onPageChanged={onPageChanged} 
      pageSize={pageSize} totalUsersCount={totalUsersCount} />
    {users.map(u => <User user={u} 
      followingInProgress={props.followingInProgress}
      unfollow={props.unfollow}
      follow={props.follow}
      key={u.id} 
    />)}
  </div>
  )
}

export default Users