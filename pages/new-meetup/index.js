import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import React from "react";

const newMeetup = (props) => {
  const router = useRouter();
  const handleAdd = async (data) => {
    try {
      const response = await fetch("/api/new-meetup", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      const result = await response.json();

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <NewMeetupForm onAddMeetup={handleAdd} />
    </>
  );
};

export default newMeetup;
