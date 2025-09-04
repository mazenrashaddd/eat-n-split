import { useState } from "react";
import FriendsMenu from "./components/FriendsMenu";
import AddFriendForm from "./components/AddFriendForm";
import SplitBillForm from "./components/SplitBillForm";

function App() {
  const [isAddFriendFormOpen, setAddFriendFormStatus] = useState(false);

  const [selectedFriend, setSelectedFriend] = useState({
    name: "",
    id: "",
    balance: 0,
    image: "",
  });

  const [friendsData, setFriendsData] = useState([
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ]);

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsMenu
          friendsData={friendsData}
          selectedFriend={selectedFriend}
          setSelectedFriend={setSelectedFriend}
        />
        {!isAddFriendFormOpen ? (
          <button
            className="button"
            onClick={() => setAddFriendFormStatus((prev) => !prev)}
          >
            Add friend
          </button>
        ) : (
          <div>
            <AddFriendForm
              setFriendsData={setFriendsData}
              setAddFriendFormStatus={setAddFriendFormStatus}
            />
            <button
              onClick={() => setAddFriendFormStatus((prev) => !prev)}
              className="button"
            >
              Close
            </button>
          </div>
        )}
      </div>
      {selectedFriend.id && (
        <SplitBillForm
          setFriendsData={setFriendsData}
          friend={selectedFriend}
          setSelectedFriend={setSelectedFriend}
        />
      )}
    </div>
  );
}

export default App;
