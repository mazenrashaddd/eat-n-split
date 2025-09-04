import { useState } from "react";
import Input from "./ui/Input";
import { v4 as uuidv4 } from "uuid";

const AddFriendForm = ({ setFriendsData, setAddFriendFormStatus }) => {
  const [friend, setFriend] = useState({
    name: "",
    image: "",
  });

  const onChange = (e) => {
    setFriend((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (friend.name === "" || friend.image === "") return;
    setFriendsData((prev) => [
      ...prev,
      { id: uuidv4(), name: friend.name, image: friend.image, balance: 0 },
    ]);
    setFriend({
      name: "",
      image: "",
    });
    setAddFriendFormStatus((prev) => !prev);
  };

  return (
    <form
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      className="form-add-friend"
      onSubmit={handleSubmit}
    >
      <Input
        name="name"
        label="👫 Friend name"
        type="text"
        placeholder="Enter friend's name"
        value={friend.name}
        onChange={onChange}
      />
      <Input
        name="image"
        label="🌄 Image URL"
        type="text"
        placeholder="Enter friend's image url"
        value={friend.image}
        onChange={onChange}
      />
      <div style={{ display: "flex", width: "100%" }}>
        <button type="submit" style={{ width: "100%" }} className="button">
          Add
        </button>
      </div>
    </form>
  );
};

export default AddFriendForm;
