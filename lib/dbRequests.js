import { supabase } from "./supabase/client";

export const createUser = async () => {};

export const getUser = async (id) => {
  try {
    const { data, error } = await supabase
      .from("profiles")
      .select()
      .eq("id", id);
    if (error) {
      console.log("Error fetching User from DB :-", error);
      throw new Error("Error fetching user from DB :-", error);
    }
    if (data.length === 0) {
      console.log("No User found");
      return false;
    }
    return data[0];
  } catch (error) {
    console.log("Error found :-", error);
    return false;
  }
};

export const updateUser = async () => {};
