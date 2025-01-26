import { useState } from "react";
import { useStore } from "../store/useStore";

export const Filter = () => {
  const { products, filteredProducts, filterProductsByCategory } = useStore();

  // Perfornamce?
  const uniqueCategories = Array.from(new Set(products.map((item) => item.category)));

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (event: any) => {
    const value = event.target.value;
    setSelectedOptions((prevSelected: any) => {
      if (prevSelected.includes(value)) {
        // If already selected, remove it
        return prevSelected.filter((option: any) => option !== value);
      } else {
        // If not selected, add it
        return [...prevSelected, value];
      }
    });
  };

  const onFiler = () => {
    console.log("onFilter", selectedOptions);

    filterProductsByCategory(selectedOptions);
    // onFilter(selectedOptions);
  };

  return (
    <div>
      <h3>Filter Options</h3>
      {uniqueCategories.map((option) => (
        <div key={option}>
          <label>
            <input type="checkbox" value={option} checked={selectedOptions.includes(option)} onChange={handleCheckboxChange} />
            {option}
          </label>
        </div>
      ))}
      <button onClick={onFiler}>Apply Filter</button>
    </div>
  );
};
