import React, { useState } from 'react';
import TicTacToe from "./Component/TicTacToe"
import UserSelection from "./Component/UserSelection"

const users = [
  { id: 1, name: 'User A' },
  { id: 2, name: 'User B' },
  { id: 3, name: 'User C' },
  { id: 4, name: 'User D' },
  { id: 5, name: 'User E' },
];

function App() {
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handlePlayGame = (users) => {
    setSelectedUsers(users);
  };

  const handlePlayAgain = () => {
    setSelectedUsers([]);
  };

  return (
    <div>
      {selectedUsers.length === 0 ? (
        <UserSelection users={users} onPlayGame={handlePlayGame} />
      ) : (
        <div>
          <button onClick={handlePlayAgain}>Play Again</button>
          <TicTacToe users={selectedUsers} />
        </div>
      )}
    </div>
  );
      }
      export default App