import FriendCard from "./FriendCard";

const FriendsMenu = ({ friendsData, selectedFriend, setSelectedFriend }) => {
  return (
    <ul>
      {friendsData.map((friend) => (
        <FriendCard
          key={friend.id}
          friend={friend}
          selectedFriend={selectedFriend}
          setSelectedFriend={setSelectedFriend}
        />
      ))}
    </ul>
  );
};

export default FriendsMenu;
