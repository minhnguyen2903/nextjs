import PortalContainer from "components/common/PortalContainer";
import { useEffect, useMemo, useRef, useState } from "react";
import * as ReactDom from "react-dom";
import styles from "./dropdown.module.scss";

interface Props {
  defaultValue?: string | number;
  value?: string | number;
  options: Array<{ value: string | number; label: string }>;
  onChange?: (value: string | number) => void;
}

const Dropdown = ({ defaultValue, value, options, onChange }: Props) => {
  const dropdownValue = useRef<string | number | undefined>(
    value || defaultValue
  );
  const [trigger, setTrigger] = useState(false);
  const dropdownContainerRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const handleRefChange = (value: string | number) => {
    dropdownValue.current = value;
    if (onChange) {
      onChange(dropdownValue.current);
    }
    handleOpen();
  };

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const getDropdownLabel = options.find(
    (element) => element.value === dropdownValue.current
  );

  const renderOptions = useMemo(
    () =>
      options.map((element) => (
        <li
          className={
            dropdownValue.current === element.value ? styles.selected : ""
          }
          key={element.value}
          onClick={() => handleRefChange(element.value)}
        >
          {element.label}
        </li>
      )),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(options), open]
  );

  const isSSR = typeof window === "undefined";
  const portalContainer = !isSSR
    ? (window.document.querySelector("body") as HTMLElement)
    : null;

  useEffect(() => {
    if (!isSSR && open) {
      window.removeEventListener("resize", () => {});
      window.addEventListener("resize", () => {
        setTrigger((prev) => !prev);
      });
    }

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, [open, isSSR]);
  return (
    <div ref={dropdownContainerRef} className={styles.dropdown_container}>
      <div className={styles.dropdown_selected_option} onClick={handleOpen}>
        <span>{getDropdownLabel?.label || "Select"}</span>
        <span className={open ? styles.dropdown_icon_reverse : ""}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-chevron-down"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </div>
      {open &&
        dropdownContainerRef &&
        !isSSR &&
        ReactDom.createPortal(
          <PortalContainer
            top={
              (dropdownContainerRef.current?.offsetTop || 0) +
              (dropdownContainerRef.current?.offsetHeight || 0)
            }
            left={dropdownContainerRef.current?.offsetLeft}
          >
            <div className={styles.dropdown_list}>
              <ul>{renderOptions}</ul>
            </div>
          </PortalContainer>,
          portalContainer as HTMLElement
        )}
    </div>
  );
};

export default Dropdown;
