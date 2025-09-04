import { useState } from "react";
import Input from "./ui/Input";

const SplitBillForm = ({ setFriendsData, friend, setSelectedFriend }) => {
  const [billValue, setBillValue] = useState();
  const onBillChange = (e) => {
    if (isNaN(e.target.value)) return;
    setBillValue(e.target.value);
  };

  const [yourExpense, setYourExpense] = useState();
  const onYourExpenseChange = (e) => {
    if (isNaN(e.target.value) || e.target.value > billValue) return;
    setYourExpense(e.target.value);
  };

  const [whoIsPaying, setWhoIsPaying] = useState("you");
  const handleSelect = (e) => {
    setWhoIsPaying(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!billValue || !yourExpense) return;
    if (whoIsPaying === "you") {
      setFriendsData((prev) =>
        prev.map((friendItem) =>
          friendItem.id === friend.id
            ? {
                ...friendItem,
                balance: friendItem.balance + (billValue - yourExpense),
              }
            : friendItem
        )
      );
    } else if (whoIsPaying === "friend") {
      setFriendsData((prev) =>
        prev.map((friendItem) =>
          friendItem.id === friend.id
            ? {
                ...friendItem,
                balance: friendItem.balance - (billValue - yourExpense),
              }
            : friendItem
        )
      );
    }
    setSelectedFriend({
      name: "",
      id: "",
      balance: 0,
      image: "",
    });
  };

  const friendExpense = yourExpense > 0 ? billValue - yourExpense : billValue;

  return (
    <form
      style={{ display: "flex", flexDirection: "column", width: "100%" }}
      className="form-split-bill"
      onSubmit={handleSubmit}
    >
      <h2>{`Split a bill with ${friend.name}`}</h2>
      <Input
        name="billValue"
        label="💰 Bill value"
        type="text"
        placeholder="Enter bill value"
        value={billValue}
        onChange={onBillChange}
      />
      <Input
        name="yourExpense"
        label="🧍‍♀️ Your expense"
        type="text"
        placeholder="Enter your expense"
        value={yourExpense}
        onChange={onYourExpenseChange}
      />
      <Input
        name="friend's expense"
        label={`👫 ${friend.name}'s expense`}
        type="text"
        placeholder="Enter friend's name"
        value={friendExpense}
      />
      <Input
        name="name"
        label="🤑 Who is paying the bill"
        type="select"
        options={[
          {
            name: "you",
            value: "you",
          },
          {
            name: friend.name,
            value: "friend",
          },
        ]}
        value={whoIsPaying}
        onChange={handleSelect}
      />
      <div style={{ display: "flex", width: "100%" }}>
        <button style={{ width: "100%" }} className="button" type="submit">
          Split bill
        </button>
      </div>
    </form>
  );
};

export default SplitBillForm;
