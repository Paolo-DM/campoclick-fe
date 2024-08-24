"use server";

export const bookCourt = async (formData) => {
  const name = formData.get("name");
  const surname = formData.get("surname");
  const phone = formData.get("phone");
  const email = formData.get("email");
  const booking_date = formData.get("selectedDate");
  const booking_time = formData.get("selectedTime");
  const schedule = formData.get("scheduleId");
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
    return data;
  } catch (error) {
    console.error("Booking failed:", error);
    throw error;
  }
};
