import React, { useState } from 'react';

function UserSelection({ users, onPlayGame }) {
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleUserClick = (user) => {
    if (selectedUsers.includes(user)) {
      setSelectedUsers(selectedUsers.filter((selectedUser) => selectedUser !== user));
    } else {
      if (selectedUsers.length < 2) {
        setSelectedUsers([...selectedUsers, user]);
      }
    }
  };

  const handlePlayGame = () => {
    if (selectedUsers.length === 2) {
      onPlayGame(selectedUsers);
    }
  };

  return (
    <div>
      <h2>Select 2 Users</h2>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => handleUserClick(user)}
            style={{ textDecoration: selectedUsers.includes(user) ? 'line-through' : 'none' }}
          >
            {user.name}
          </li>
        ))}
      </ul>
      <button onClick={handlePlayGame} disabled={selectedUsers.length !== 2}>
        Play Game
      </button>
    </div>
  );
}

export default UserSelection;
