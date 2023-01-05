interface Props {
  className?: string;
  icon: string;
  name: string;
}

const SidebarLinks: React.FC<Props> = ({ icon, name, className }) => {
  return (
    <>
      <div className={`customers-content ${className}`}>
        <img src={icon} alt={name} />
        <div className="text">{name}</div>
      </div>
    </>
  );
};

export default SidebarLinks;
