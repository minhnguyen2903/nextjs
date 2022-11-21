import Dropdown from "components/common/Dropdown";
import SectionContainer from "components/common/sectionContainer";
import styles from "./menu.module.scss";

const Menu = () => {
  return (
    <div className={styles.menu_container}>
      <SectionContainer>
        <nav>
          <ul className={styles.menu_flex}>
            <li>
              <Dropdown
                options={[{ value: 1, label: "Bakery" }]}
                defaultValue={1}
              />
            </li>
            <li>
              <Dropdown
                options={[{ value: 1, label: "Fruit and vegetables" }]}
                defaultValue={1}
              />
            </li>
            <li>
              <Dropdown
                options={[{ value: 1, label: "Meat and fish" }]}
                defaultValue={1}
              />
            </li>
            <li>
              <Dropdown
                options={[{ value: 1, label: "Drinks" }]}
                defaultValue={1}
              />
            </li>
            <li>
              <Dropdown
                options={[{ value: 1, label: "Kitchen" }]}
                defaultValue={1}
              />
            </li>
            <li>
              <Dropdown
                options={[{ value: 1, label: "Special nutrition" }]}
                defaultValue={1}
              />
            </li>
            <li>
              <Dropdown
                options={[{ value: 1, label: "Baby" }]}
                defaultValue={1}
              />
            </li>
            <li>
              <Dropdown
                options={[{ value: 1, label: "Pharmacy" }]}
                defaultValue={1}
              />
            </li>
          </ul>
        </nav>
      </SectionContainer>
    </div>
  );
};

export default Menu;
