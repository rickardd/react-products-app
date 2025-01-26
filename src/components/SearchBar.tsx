import { useState } from "react";
import { useStore } from "../store/useStore";
import useDebounce from "../hooks/useDebouce";

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { filterProductsByName } = useStore();
  const { debounce } = useDebounce();

  const handleSearch = debounce(300, (term: string) => {
    filterProductsByName(term);
  });

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    handleSearch(value);
  };

  return (
    <div>
      <input type="text" placeholder="Search products..." value={searchTerm} onChange={onChange} />
    </div>
  );
};

export default SearchBar;
