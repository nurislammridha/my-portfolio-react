import React from "react";
// import Skeleton from "@material-ui/lab/Skeleton";
import Loader from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="text-center mt-5">
      <Loader
        type="TailSpin"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={5000}
        visible={true}
      />
    </div>
  );
};

export default Loading;
