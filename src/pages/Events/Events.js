import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Events.css";
import UpcomingEvents from "../../components/EventsList/UpcomingEvents";
import PreviousEvents from "../../components/EventsList/PreviousEvents";

// // the first function to run on window load
// window.onload = () => {
//   const tabSwitchers = document.querySelectorAll("[data-switcher]"); //selects all elements
//   console.log(tabSwitchers);

//   for (let i = 0; i < tabSwitchers.length; i++) {
//     const tab = tabSwitchers[i]; //selects individual element of the array
//     const pageId = tab.dataset.tab;
//     console.log(pageId);

//     tab.addEventListener("click", (event) => {
//       console.log(`clicked ${tab.dataset.tab}`);
//       switchPage(tab, pageId);
//     });

//     tab.addEventListener("touchstart", (event) => {
//       console.log(`touched ${tab.dataset.tab}`);
//       switchPage(tab, pageId);
//     });
//   }
// };

// //switch tabs and pages between upcoming events and previous events as per the user's button click
// const switchPage = (tab, pageId) => {
//   const activeTab = document.querySelector(".tabs .tab.is-active");
//   const activePage = document.querySelector(".pages .page.is-active");

//   //remove is-active class from currently active tab and page
//   activeTab.classList.remove("is-active");
//   activePage.classList.remove("is-active");

//   //add is-active class to the clicked tab and page
//   tab.classList.add("is-active");
//   const nextPage = document.querySelector(
//     `.pages .page[data-page="${pageId}"]`
//   );
//   nextPage.classList.add("is-active");
// };

// //main component of events page
// export const Main = () => {
//   return (
//     <div className="events-main">
//       <div className="tab-switcher">
//         <ul className="tabs">
//           <button className="tab is-active" data-switcher data-tab="1">
//             Upcoming Events
//           </button>
//           <button className="tab" data-switcher data-tab="2">
//             Previous Events
//           </button>
//         </ul>
//       </div>
//       <div className="pages">
//         <div className="page is-active" data-page="1">
//           <UpcomingEvents />
//         </div>
//         <div className="page" data-page="2">
//           <PreviousEvents />
//         </div>
//       </div>
//     </div>
//   );
// };

// const Events = () => {
//   return (
//     <React.Fragment>
//       <Header />
//       <Main />
//       <Footer />
//     </React.Fragment>
//   );
// };

// export default Events;

const Main = () => {
  //custom hook for page switcher
  const [activeTab, setActiveTab] = useState("upcoming-events");

  const switchPage = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="events-main">
      <div className="tab-switcher">
        <ul className="tabs">
          <a
            href="#upcoming-events"
            className={
              activeTab === "upcoming-events" ? "tab is-active" : "tab"
            }
            onClick={() => switchPage("upcoming-events")}
          >
            <li>Upcoming Events</li>
          </a>

          <a
            href="#previous-events"
            className={
              activeTab === "previous-events" ? "tab is-active" : "tab"
            }
            onClick={() => switchPage("previous-events")}
          >
            <li>Previous Events</li>
          </a>
        </ul>
      </div>

      <div className="pages">
        <div
          id="upcoming-events"
          className={
            activeTab === "upcoming-events" ? "page is-active" : "page"
          }
          data-page="1"
        >
          <UpcomingEvents />
        </div>

        <div
          id="previous-events"
          className={
            activeTab === "previous-events" ? "page is-active" : "page"
          }
          data-page="2"
        >
          <PreviousEvents />
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
};

export default Events;
