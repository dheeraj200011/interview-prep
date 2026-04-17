import React from "react";
import { useParams } from "react-router-dom";

const ContactInfo = () => {
  const { id } = useParams();
  console.log(id);
  return <div>ContactInfo</div>;
};

export default ContactInfo;
