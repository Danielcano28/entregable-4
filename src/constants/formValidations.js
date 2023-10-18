const VALIDATION_FIRST_NAME = {
  required: {
    value: true,
    message: "This field is required",
  },
  maxLength: {
    value: 25,
    message: "This field accepts a maximum of 25 characters.",
  },
  minLength: {
    value: 1,
    message: "This field requires at least 1 element",
  },
};

const VALIDATION_LAST_NAME = {
  required: {
    value: true,
    message: "This field is required",
  },
  maxLength: {
    value: 25,
    message: "This field accepts a maximum of 25 characters.",
  },
  minLength: {
    value: 1,
    message: "This field requires at least 1 element",
  },
};

const VALIDATION_GMAIL = {
  pattern: {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "enter a valid email",
  },
};

const VALIDATION_PASSWORD = {
  required: {
    value: true,
    message: "This field is required",
  },
  maxLength: {
    value: 15,
    message: "This field accepts a maximum of 15 characters.",
  },
  minLength: {
    value: 4,
    message: "This field requires at least 4 element",
  },
};

export {
  VALIDATION_FIRST_NAME,
  VALIDATION_LAST_NAME,
  VALIDATION_GMAIL,
  VALIDATION_PASSWORD,
};
