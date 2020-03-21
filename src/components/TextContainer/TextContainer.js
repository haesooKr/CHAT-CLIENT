import React from 'react'

import './TextContainer.css'

const TextContainer = ({users}) => {
  return (
    <div>
      <h4>Users</h4>
      {users.map((user, i) => <div className="userName" key={i}>{user.name}</div>)}
    </div>
  )
}

export default TextContainer;