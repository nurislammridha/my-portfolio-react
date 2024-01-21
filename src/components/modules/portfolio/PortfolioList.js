import React, { useEffect, useState } from "react";

import VisibilityIcon from "@material-ui/icons/Visibility";
import Loader from "react-loader-spinner";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Modal from "react-bootstrap/Modal";
import PortfolioSingle from "./PortfolioSingle";

import { categoriesData, portfolioData } from "../../../assets/apiData/personalData";

const PortfolioList = props => {
  const [value, setValue] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [item, setItem] = useState({});
  const categories = categoriesData()
  const portfolios = value === 0 ? portfolioData() : portfolioData().filter(item => categories[value - 1].id === item.category.id)

  const showDetails = item => {
    setItem(item);
    setModalShow(true);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="tabsCategory"
        scrollButtons="auto"
      >
        <Tab label="All" value={0} />
        {categories.map(item => (
          <Tab label={item.name} value={item.id} key={item.id} />
        ))}
      </Tabs>
      <div className="row">
        {portfolios.map(item => (
          <div
            className="col-lg-4 col-sm-6 mb-4 pointer"
            onClick={() => showDetails(item)}
            key={item.id}
          >
            <div className="portfolio-item">
              <div className="portfolio-link">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <VisibilityIcon />
                  </div>
                </div>
                <img className="img-fluid" src={item.image} alt={item.title} />
              </div>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">{item.title}</div>
                <div className="portfolio-caption-subheading text-muted">
                  {item.category.name}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-2">
        <Loader
          type="TailSpin"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={10000}
          visible={false}
        />
      </div>

      {portfolios.length === 0 && (
        <div className="alert alert-info p-3 mt-4 text-center">
          <strong>No Portfolio found in this section !!</strong>
        </div>
      )}

      {/* Modal */}
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        dialogClassName="modal-large"
        aria-labelledby="example-custom-modal-styling-title"
        size="lg"
        centered
      >
        <PortfolioSingle item={item} onClose={() => setModalShow(false)} />
      </Modal>
    </>
  );
};

export default PortfolioList;
