import "./MessageScreen.css";

const MessageScreen = (props) => {
  return (
    <div className="MessageScreen">
      <p>{props.message}</p>
    </div>
  );
};

export default MessageScreen;
