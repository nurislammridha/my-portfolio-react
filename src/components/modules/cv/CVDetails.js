import React from "react";
import "./styles.css";

const CVDetails = (props) => {
    // const cvUrl = process.env.REACT_APP_CV_URL ?? '';
    const cvUrl = "https://app.box.com/s/mpxqvmqlukfk2wztwtjzs5ec3zk78sqf";

    return (
        <>
            <div className="container text-center">
                {
                    cvUrl.length > 0 &&
                    <iframe src={cvUrl}
                        width="100%"
                        height="1000px"></iframe>
                }
            </div>
        </>
    );
};

export default CVDetails;
