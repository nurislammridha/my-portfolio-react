import React, { useState } from "react";
import { Link } from "react-router-dom";
import SortIcon from "@material-ui/icons/Sort";

import Modal from "react-bootstrap/Modal";
import Loader from "react-loader-spinner";

import HTMLParser from "../../../components/partials/html-parser/HTMLParser";
import DateRange from "../../partials/date-generator/date-range/DateRange";
import LifeStoryDetail from "./LifeStoryDetail";
import SocialLink from "./social-links/SocialLink";

import "./styles.css";
import { aboutData, lifeHistory } from "../../../assets/apiData/personalData";

const LifeHistory = () => {
  const [modalShow, setModalShow] = useState(false);
  const [item, setItem] = useState({});
  const [order, setOrder] = useState("asc");
  const about = aboutData();
  const lifeStories = lifeHistory();

  const viewDetails = (item) => {
    setItem(item);
    if (!modalShow) setModalShow(true);
  };
  const sortStory = () => {
    if (order === "asc") {
      setOrder("desc");
      //sort
    } else {
      setOrder("asc");
      //sort
    }
  };
  return (
    <>
      <div className="text-center">
        <h2 className="section-heading text-uppercase">About Me</h2>
        <h3 className="section-subheading text-muted mb-2">
          {about.short_description}
          <br />
          <HTMLParser data={about.description} />
        </h3>
        <SocialLink data={about} />
        <div className="float-right mt-2 mb-2" onClick={() => sortStory()}>
          <button
            className={
              order === "asc"
                ? "btn btn-outline-primary"
                : "btn btn-outline-info"
            }
            title="Sort life story. Click to toggle events !!"
          >
            <SortIcon />
            {order === "asc" && <span>Old - Present</span>}
            {order === "desc" && <span>Present - Old</span>}
          </button>
        </div>
      </div>

      <div className="text-center mt-5">
        <Loader
          type="TailSpin"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={10000}
          visible={false}
        />
      </div>

      <ul className="timeline">
        {lifeStories.map((item, index) => (
          <li
            className={index % 2 !== 0 ? "timeline-inverted" : ""}
            key={index}
          >
            <div
              className="timeline-image"
              onMouseOver={() => viewDetails(item)}
            >
              <h4>{item.position}</h4>
              <h6>{item.institution}</h6>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>
                  <DateRange
                    start_date={item.start_date}
                    end_date={item.end_date}
                  />{" "}
                  {item.is_current !== 0 && (
                    <span className="badge badge-info"> Currently Working</span>
                  )}
                </h4>
                <h4 className="subheading">
                  {item.position} at {item.institution}
                </h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">{item.short_description}</p>
              </div>
            </div>
          </li>
        ))}
        {lifeStories.length > 0 && (
          <li className="timeline-inverted">
            <div className="timeline-image">
              <h4>
                <Link to="/contact">
                  {" "}
                  Be Part <br /> Of my Story !
                  <br /> Contact Me
                </Link>
              </h4>
            </div>
          </li>
        )}
      </ul>

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby="example-custom-modal-styling-title"
        size={"lg"}
        centered
      >
        <LifeStoryDetail item={item} onClose={() => setModalShow(false)} />
      </Modal>
    </>
  );
};

export default LifeHistory;
