import { useCallback, useState } from "react";

export const useToggle = (initialValue: boolean = false) => {
  const [value, setValue] = useState(initialValue);

  const toggleValue = useCallback(() => {
    setValue((currentValue) => !currentValue);
  }, []);

  return { value, toggleValue };
};
