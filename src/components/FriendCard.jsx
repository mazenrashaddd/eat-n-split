const FriendCard = ({ friend, selectedFriend, setSelectedFriend }) => {
  const handleClick = () => {
    if (selectedFriend.id === friend.id)
      setSelectedFriend({
        name: "",
        id: "",
        balance: 0,
        image: "",
      });
    else {
      setSelectedFriend(friend);
    }
  };
  return (
    <li>
      <img src={friend.image} alt={`${friend.name}'s Image`} />
      <h3>{friend.name}</h3>
      <button className="button" onClick={handleClick}>
        {selectedFriend?.id === friend.id ? "Close" : "Select"}
      </button>
      {friend.balance === 0 ? (
        <span>{`You and ${friend.name} are even`}</span>
      ) : friend.balance > 0 ? (
        <span className="green">{`${friend.name} owes you ${friend.balance}$`}</span>
      ) : (
        <span className="red">{`You owes ${friend.name} ${Math.abs(
          friend.balance
        )}$`}</span>
      )}
    </li>
  );
};

export default FriendCard;
