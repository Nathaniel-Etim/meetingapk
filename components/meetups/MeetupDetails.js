import classes from "./MeetupDetail.module.css";
import Head from "next/head";
const MeetupDetail = (props) => {
  console.log(props);
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.title} />
      </Head>
      <section className={classes.detail}>
        <img src={props.meetupData.image} alt={props.meetupData.title} />
        <h1>{props.meetupData.title}</h1>
        <address> {props.meetupData.address}</address>
      </section>
    </>
  );
};

export default MeetupDetail;
