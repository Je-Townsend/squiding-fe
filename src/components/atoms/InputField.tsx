import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

const style = {
  "& label.Mui-focused": {
    color: "gray",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#000",
      borderRadius: 0,
      borderWidth: 2,
    },
    "&:hover fieldset": {
      borderColor: "#000",
    },
    borderRadius: 0,
  },
};

function InputField({
  id,
  testId,
  label,
  value,
  className,
  disabled,
  error,
  helperText,
  onChange,
  onClick,
}: {
  id?: string;
  testId?: string;
  label?: string;
  value?: string;
  className?: string;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  onChange?:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsDisabled(disabled || false);
  }, [disabled]);

  useEffect(() => {
    setIsError(error || false);
  }, [error]);

  return (
    <>
      <TextField
        onClick={onClick || undefined}
        id={id || ""}
        data-testid={testId || ""}
        label={label || ""}
        className={className || ""}
        variant="outlined"
        disabled={isDisabled}
        error={isError}
        helperText={helperText || ""}
        onChange={onChange || undefined}
        InputLabelProps={{ shrink: true }}
        value={value || ""}
        sx={style}
      />
    </>
  );
}
export default InputField;
