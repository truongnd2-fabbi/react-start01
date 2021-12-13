interface ListPeopleProps {
  people: {
    name: string;
    age: number;
    married: boolean;
    gender: string;
  }[];
}

const ListPeople: React.FC<ListPeopleProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person, key) => (
      <li key={key}>
        <h3>
          {person.name} - <b>{person.age}</b>
        </h3>
        <p>{person.gender}</p>
        <p>
          <span>Married: {person.married ? "YES" : "NO"}</span>
        </p>
      </li>
    ));
  };

  return <ul>{renderList()}</ul>;
};

export default ListPeople;
