import React from 'react';
import CustomButton from "../../components/CustomButton/CustomButton";

function ExamplePage() {
  return <CustomButton onClick={() => console.log("test")}>Test</CustomButton>;
}

export default ExamplePage;