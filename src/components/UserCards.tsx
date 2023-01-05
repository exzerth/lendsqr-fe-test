interface Props {
  icon: string;
  text: string;
  number: number;
}

const UserCards: React.FC<Props> = ({ icon, text, number }) => {
  return (
    <>
      <div className="card">
        <img src={icon} alt="user card" />
        <div className="card-text">{text}</div>
        <div className="card-number">{number}</div>
      </div>
    </>
  );
};

export default UserCards;
