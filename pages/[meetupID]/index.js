import { useRouter } from "next/router";
import React from "react";
import SingleMeetComponent from "../../components/SingleMeetComponent/SingleMeetComponent";

const SingleMeet = (props) => {
  const router = useRouter();
  const data = router.query;
  return (
    <>
      <SingleMeetComponent
        src={props.dummy.src}
        alt={props.dummy.alt}
        address={props.dummy.address}
        description={props.dummy.description}

        // src="https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/EMS.jpg?itok=OzPyAXaW"
        // alt="image"
        // address="No 5 osagie street"
        // description="The meetup description"
        // alt="image"
      />
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          meetupID: "1",
        },
      },
      {
        params: {
          meetupID: "2",
        },
      },
    ],
    fallback: false, // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  const meetUpId = context.params.meetupID;
  console.log(meetUpId);
  return {
    props: {
      dummy: {
        id: meetUpId,
        src: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/EMS.jpg?itok=OzPyAXaW",
        alt: "image",
        address: "No 5 osagie street",
        description: "The meetup description",
        alt: "image",
      },
    },
  };
}

export default SingleMeet;
