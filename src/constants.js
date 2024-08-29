export const RIGHT_MEDICALSERVICES = 121401;
export const RIGHT_MEDICALSERVICES_ADD = 121402;
export const RIGHT_MEDICALSERVICES_EDIT = 121403;
export const RIGHT_MEDICALSERVICES_DELETE = 121404;
export const RIGHT_MEDICALITEMS = 122101;
export const RIGHT_MEDICALITEMS_ADD = 122102;
export const RIGHT_MEDICALITEMS_EDIT = 122103;
export const RIGHT_MEDICALITEMS_DELETE = 122104;

export const VISIT_TYPES = ["E", "O", "R"];

export const CARE_TYPE_INPATIENT = "I";
export const CARE_TYPE_OUTPATIENT = "O";
export const CARE_TYPE_BOTH = "B";
export const CARE_TYPES = [CARE_TYPE_INPATIENT, CARE_TYPE_OUTPATIENT, CARE_TYPE_BOTH];

export const SERVICE_TYPE_PREVENTATIVE = "P";
export const SERVICE_TYPE_CURATIVE = "C";
export const SERVICE_TYPES = [SERVICE_TYPE_PREVENTATIVE, SERVICE_TYPE_CURATIVE];

export const ITEM_TYPE_DRUG = "D";
export const ITEM_TYPE_MEDICAL_CONSUMABLE = "M";
export const ITEM_TYPES = [ITEM_TYPE_DRUG, ITEM_TYPE_MEDICAL_CONSUMABLE];

export const SERVICE_CODE_MAX_LENGTH = 20;
export const ITEM_CODE_MAX_LENGTH = 20;

export const SERVICE_CATEGORY_SURGERY = "S";
export const SERVICE_CATEGORY_DELIVERY = "D";
export const SERVICE_CATEGORY_ANTENATAL = "A";
export const SERVICE_CATEGORY_HOSPITALIZATION = "H";
export const SERVICE_CATEGORY_CONSULTATION = "C";
export const SERVICE_CATEGORY_OTHER = "O";
export const SERVICE_CATEGORY_VISIT = "V";
export const SERVICE_CATEGORIES = [
  SERVICE_CATEGORY_SURGERY,
  SERVICE_CATEGORY_DELIVERY,
  SERVICE_CATEGORY_ANTENATAL,
  SERVICE_CATEGORY_CONSULTATION,
  SERVICE_CATEGORY_OTHER,
];

export const SERVICE_LEVEL_SIMPLE_SERVICE = "S";
export const SERVICE_LEVEL_VISIT = "V";
export const SERVICE_LEVEL_DAY_HOSPITAL = "D";
export const SERVICE_LEVEL_HOSPITAL_CARE = "H";
export const SERVICE_LEVELS = [
  SERVICE_LEVEL_SIMPLE_SERVICE,
  SERVICE_LEVEL_VISIT,
  SERVICE_LEVEL_DAY_HOSPITAL,
  SERVICE_LEVEL_HOSPITAL_CARE,
];

export const PATIENT_CATEGORY_MASK_MALE = 1;
export const PATIENT_CATEGORY_MASK_FEMALE = 2;
export const PATIENT_CATEGORY_MASK_ADULT = 4;
export const PATIENT_CATEGORY_MASK_MINOR = 8;

export const GENDER_CATEGORIES = [
  PATIENT_CATEGORY_MASK_MALE,
  PATIENT_CATEGORY_MASK_FEMALE,
];
export const AGE_CATEGORIES = [
  PATIENT_CATEGORY_MASK_ADULT,
  PATIENT_CATEGORY_MASK_MINOR,
];

export const PATIENT_CATEGORIES = [
  PATIENT_CATEGORY_MASK_MALE,
  PATIENT_CATEGORY_MASK_FEMALE,
  PATIENT_CATEGORY_MASK_ADULT,
  PATIENT_CATEGORY_MASK_MINOR,
];

export const ITEMS_MODULE_NAME = "medicalItem";
export const SERVICES_MODULE_NAME = "medicalService";
