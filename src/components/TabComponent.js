import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TabDoor from "./tabs_nav/TabDoor";
import TabDevices from "./tabs_nav/TabDevices";
import TabPrices from "./tabs_nav/TabPrices";
import "../css/TabsNav.css";
class TabComponent extends Component {
  state = {
    tabIndex: 0
  };
  render() {
    return (
      <div>
        <Tabs className="tabs ">
          <TabList className="tab-nav-container">
            <Tab className={`${this.state.tabIndex === 0 ? "active" : null}`}>
              <TabDoor />
              <p>
                <strong>
                  No commitments
                  <br />
                  Cancel online at anytime
                </strong>
              </p>
            </Tab>
            <Tab>
              <TabDevices />
              <p style={{ marginTop: "-5.3125rem" }}>
                <strong>Watch anywhere</strong>
              </p>
            </Tab>
            <Tab>
              <TabPrices />
              <p>
                <strong>Pick your price</strong>
              </p>
            </Tab>
          </TabList>
        </Tabs>
      </div>
    );
  }
}

export default TabComponent;
