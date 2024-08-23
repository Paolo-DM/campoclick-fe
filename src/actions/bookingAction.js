"use server";

export const bookCourt = async (formData) => {
  "use server";
  
  const name = formData.get("name");
  const surname = formData.get("surname");
  const phone = formData.get("phone");
  const email = formData.get("email");
  const selectedDate = formData.get("selectedDate");
  const selectedTime = formData.get("selectedTime");
  const booking_date = selectedDate;
  const booking_time = 9;
  const schedule = 1;
  const body = {
    schedule,
    booking_date,
    booking_time,
    name,
    surname,
    email,
    phone,
  };

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_HOST}/bookings/create/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Booking successful:", data);
    return data;
  } catch (error) {
    console.error("Booking failed:", error);
    throw error;
  }
};
