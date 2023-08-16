import React, { useState } from "react";
import { useTranslations, Autocomplete, toISODate, useGraphqlQuery } from "@openimis/fe-core";

const ItemPickerFilter = (props) => {
  const {
    onChange,
    readOnly,
    required,
    withLabel = true,
    withPlaceholder,
    value,
    label,
    filterOptions,
    pricelistUuid,
    date,
    filterSelectedOptions,
    placeholder,
    extraFragment,
    multiple,
    hfPrograms
  } = props;
  const [searchString, setSearchString] = useState(null);
  const { formatMessage } = useTranslations("medical");

  const { isLoading, data, error } = useGraphqlQuery(
    `query ($searchString: String, $first: Int, $pricelistUuid: UUID, $date: Date) {
      medicalItemsStr(str: $searchString, first: $first, pricelistUuid: $pricelistUuid, date: $date) {
        edges {
          node {
            id name code price
            ${extraFragment ?? ""}
            program {
              idProgram 
              nameProgram
            }
          }
        }
      }
    }`,
    { pricelistUuid, searchString, first: 20, date: toISODate(date) },
    { skip: true },
  );

  let items = data?.medicalItemsStr?.edges.map((edge) => edge.node) ?? [];
  let options = [];

  items.forEach(function (item) {
    hfPrograms.forEach(function (p) {
      if (p.idProgram == item.program.idProgram) {
        var i = 0;
        options.forEach(function (opt) {
          if (opt.code == item.code) {
            i++;
          }
        })
        if (i == 0) {
          options.push(item)
        }
      }
    })
  })

  return (
    <Autocomplete
      multiple={multiple}
      required={required}
      placeholder={placeholder ?? formatMessage("ItemPicker.placeholder")}
      label={label ?? formatMessage("ItemPicker.label")}
      error={error}
      withLabel={withLabel}
      withPlaceholder={withPlaceholder}
      readOnly={readOnly}
      options={options}
      isLoading={isLoading}
      value={value}
      getOptionLabel={(option) => `${option.code} ${option.name} ${option.quantity ? ` (${option.quantity})` : ""}`}
      onChange={onChange}
      filterOptions={filterOptions}
      filterSelectedOptions={filterSelectedOptions}
      onInputChange={setSearchString}
    />
  );
};

export default ItemPickerFilter;
