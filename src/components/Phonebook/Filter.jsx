import { Input } from './Phonebook.styled';
export const Filter = ({ handleFilter, handleChange, filter }) => {
  console.log(filter);
  return (
    <Input
      type="text"
      name="filter"
      placeholder="Find contacts"
      value={filter}
      onChange={handleChange}
    />
  );
};