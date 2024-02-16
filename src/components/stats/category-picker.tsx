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
    <>
      <div className="category-picker" role="group">
        {categories.map((category, index) => (
          <button
            className={`category-picker__item ${index === selectedIndex ? "category-picker__item--selected" : ""}`}
            onClick={() => onSelectCategory(index)}
          >
            {category}
          </button>
        ))}
      </div>
    </>
  );
};

export default CategoryPicker;
