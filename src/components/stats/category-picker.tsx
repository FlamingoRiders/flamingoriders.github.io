import React from "react";

interface CategoryPickerProps {
  categories: Array<String>;
  onSelectCategory: (index: number) => void;
  selectedIndex: number;
}
const CategoryPicker: React.FC<CategoryPickerProps> = ({
  categories,
  onSelectCategory,
  selectedIndex,
}) => {
  return (
    <div className="tabs is-centered is-toggle">
      <ul className="mb-0">
        {categories.map((category, index) => (
          <li
            key={`${category}-${index}`}
            className={`is-clickable ${index === selectedIndex ? "is-active" : ""}`}
            onClick={() => onSelectCategory(index)}
          >
            <a>{category}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPicker;
