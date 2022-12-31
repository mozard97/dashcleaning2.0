import { db } from "./firebase";

const employee = db.collection("employees");
const admin = db.collection("admin");

const users = db.collection("users");
const subscription = db.collection("subscription");

export const JOB_STATUS = {
  INITIATE: "INITIATE",
  ASSIGNED: "ASSIGNED",
  CLAIMED: "CLAIMED",
  DECLINED: "DECLINED",
  COMPLETED: "COMPLETED",
};
export const addEmployee = async (data) => {
  return await employee.doc().set(data);
};

export const getSubscriptions = async (email) => {
  if (email) return subscription.where("employeeEmail", "==", email).get();
  return await subscription.get();
};

export const getEmployee = async (id) => {
  if (id) await employee.doc(id).get();
  return await employee.get();
};
export const updateJob = async (id, data) => {
  await subscription.doc(id).update(data);
};

export const addUser = (data) => {
  return users.doc().set(data);
};

export const checkUserExists = (email) =>
  users.where("email", "==", email).get();

export const checkEmployeeExist = (email) =>
  employee.where("email", "==", email).get();

export const checkAdminUserName = (username) =>
  admin.where("username", "==", username).get();

export const checkAdminPassword = (password) =>
  admin.where("password", "==", password).get();
export const getAdmin = async () => {
  return await admin.get();
};
// import from http://stackoverflow.com/questions/  prefer default export