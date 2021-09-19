import React from "react";
import styles from "./style.module.scss";

interface FilterNavProps {
  district: any;
  checked: boolean;
  id: any;
  HandleChangeCurrentGroup: (district: string) => void;
}

const FilterNav: React.FC<FilterNavProps> = ({
  district = "",
  checked,
  id,
  HandleChangeCurrentGroup,
}) => {
  return (
    <>
      <input
        type='radio'
        name='sortNavBtn'
        className={styles.sortNav__input}
        id={id}
        value={district}
        defaultChecked={checked}
      />
      <label className={styles.sortNav__btn} htmlFor={id}>
        <div
          className={styles.sortNav__text}
          onClick={() => HandleChangeCurrentGroup(id)}
        >
          {district}
        </div>
      </label>
    </>
  );
};

export default FilterNav;
