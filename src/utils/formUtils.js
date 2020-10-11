export const onChangeForm = ({ currentTarget }, form, setForm) => {
  setForm({ ...form, ...{ [currentTarget.name]: currentTarget.value } });
};
