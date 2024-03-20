export const store = (res) => {
  localStorage.setItem("user", JSON.stringify(res));
};
export const retrive = () => {
  if (localStorage.getItem("user")) {
    return JSON.parse(localStorage.getItem("user"));
  } else return false;
};
export const clear = () => {
  localStorage.removeItem("user");
};
