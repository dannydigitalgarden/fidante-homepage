import React from "react";
import Statistic from "components/Statistic";
import TwoColumnsLayout from "components/Layouts/TwoColumnsLayout";
import Video from "components/Video/Video";

const Homepage = () => {
  return (
    <div className="fidante-homepage">
      <TwoColumnsLayout
        options={{
          layoutType: "layout-1-1",
          mediaSide: 'left',
          backgroundColor: "bg-grey",
          textColor: "text-dark",
        }}
      >
        <h1>Hello</h1>
      </TwoColumnsLayout>
        <Video />
      <Statistic
        icon="https://upload.wikimedia.org/wikipedia/commons/0/0b/Search_Icon.svg"
        figure="Icon"
        description="lorem lipsum"
        backgroundColor="gold"
        textColor="blue"
      />
    </div>
  );
};

export default Homepage;
