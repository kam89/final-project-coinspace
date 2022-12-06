import React from "react";
import { Stack, Chip } from "@mui/material";
import { currencies } from "components/templates/home/data";

export const CurrenciesChipGroup = ({ selected, onClick }) => {
  return (
    <Stack alignItems={"flex-end"}>
      <Stack direction="row" spacing={1}>
        {Object.values(currencies).map((item, index) => (
          <Chip
            variant="filled"
            color={selected === item ? "primary" : "secondary"}
            key={index}
            label={item}
            onClick={() => onClick(item)}
          />
        ))}
      </Stack>
    </Stack>
  );
};
