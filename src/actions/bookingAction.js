"use server";

export const bookCourt = async (formData) => {
  "use server";
  const name = formData.get("name");
  const surname = formData.get("surname");
  const phone = formData.get("phone");
  const email = formData.get("email");
  const selectedDate = formData.get("selectedDate");
  const selectedTime = formData.get("selectedTime");

  console.log("Booking details:", { name, surname, phone, email, selectedDate, selectedTime });
};