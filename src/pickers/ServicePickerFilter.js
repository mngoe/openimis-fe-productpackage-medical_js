import React, { useState } from "react";
import { Autocomplete, toISODate, useGraphqlQuery, useTranslations } from "@openimis/fe-core";

const ServicePickerFilter = (props) => {
  const {
    onChange,
    readOnly,
    required,
    withLabel,
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
    claimProgram
  } = props;
  const [searchString, setSearchString] = useState(null);
  const { formatMessage } = useTranslations("medical");

  const { isLoading, data, error } = useGraphqlQuery(
    `query ($searchString: String, $pricelistUuid: UUID, $date: Date) {
      medicalServicesStr(str: $searchString, first: 20, pricelistUuid: $pricelistUuid, date: $date) {
        edges {
          node {
            id name code price packagetype
            ${extraFragment ?? ""}
            serviceserviceSet{
              service{
                id
                code
                name
              }
              priceAsked
              qtyProvided
              scpDate
            }
            servicesLinked{
              item{
                id
                code
                name
              }
              priceAsked
              qtyProvided
              pcpDate
            }
            program {
              idProgram 
              nameProgram
            }
          }
        }
      }
    }`,
    { pricelistUuid, searchString, date: toISODate(date) },
    { skip: true },
  );

  let services = data?.medicalServicesStr?.edges.map((edge) => edge.node) ?? [];
  let options = [];
  console.log(claimProgram);

  if (claimProgram != '' && claimProgram != undefined && claimProgram != null) {
    services.forEach(function (service) {
      if (claimProgram == service?.program?.idProgram) {
        var i = 0;
        options.forEach(function (opt) {
          if (opt.code == service.code) {
            i++;
          }
        })
        if (i == 0) {
          options.push(service)
        }
      }
    })
  }

  console.log(services);
  console.log(options)


  return (
    <Autocomplete
      multiple={multiple}
      required={required}
      placeholder={placeholder ?? formatMessage("ServicePicker.placeholder")}
      label={label ?? formatMessage("ServicePicker.label")}
      error={error}
      withLabel={withLabel}
      withPlaceholder={withPlaceholder}
      readOnly={readOnly}
      options={options}
      isLoading={isLoading}
      value={value}
      getOptionLabel={(option) => `${option.code} ${option.name}`}
      onChange={onChange}
      filterOptions={filterOptions}
      filterSelectedOptions={filterSelectedOptions}
      onInputChange={setSearchString}
    />
  );
};

export default ServicePickerFilter;
