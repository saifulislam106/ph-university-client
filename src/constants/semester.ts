export const nameOptions = [
  {
    label: "Autumn",
    value: "01",
  },
  {
    label: "Summer",
    value: "02",
  },
  {
    label: "Fall",
    value: "03",
  },
];

const currentYear = new Date().getFullYear();

export const yearOptions = [0, 1, 2, 3, 4].map((year) => ({
  label: String(currentYear + year),
  value: String(currentYear + year),
}));

export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const monthOptions = monthNames.map((month) => ({
  label: month,
  value: month,
}));

export const bloodGroup = [
'A+' , 'A-' , 'B+' , 'B-' , 'AB+' , 'AB-' , 'O+' , 'O-'
];

export const bloodGroupOptions = bloodGroup.map((group) => ({
  label: group,
  value: group,
}));

export const genders = [
'male' , 'female' , 'other'
];

export const gendersOptions = genders.map((item) => ({
  label: item,
  value: item,
}));

