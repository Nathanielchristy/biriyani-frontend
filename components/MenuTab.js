// "use client";
// import { useState } from "react";

// export default function MenuTabs() {
//   const [activeTab, setActiveTab] = useState("tab-1");

//   const handleTabClick = (tabId) => {
//     setActiveTab(tabId);
//   };

//   return (
//     <section className="menu-section">
//       <div className="left-bg">
//         <img src="images/background/bg-5.png" alt="" title="" />
//       </div>
//       <div className="right-bg">
//         <img src="images/background/bg-6.png" alt="" title="" />
//       </div>

//       <div className="auto-container">
//         <div className="title-box centered">
//           <div className="subtitle">
//             <span>Special selection</span>
//           </div>
//           <div className="pattern-image">
//             <img src="images/icons/separator.svg" alt="" title="" />
//           </div>
//           <h2>Delicious Menu</h2>
//         </div>

//         <div className="tabs-box menu-tabs">
//           <div className="buttons">
//             <ul className="tab-buttons clearfix">
//               <li
//                 className={`tab-btn ${activeTab === "tab-1" ? "active-btn" : ""}`}
//                 onClick={() => handleTabClick("tab-1")}
//               >
//                 <span>MORNING</span>
//               </li>
//               <li
//                 className={`tab-btn ${activeTab === "tab-2" ? "active-btn" : ""}`}
//                 onClick={() => handleTabClick("tab-2")}
//               >
//                 <span>WEEKDAY LUNCH</span>
//               </li>
//               <li
//                 className={`tab-btn ${activeTab === "tab-3" ? "active-btn" : ""}`}
//                 onClick={() => handleTabClick("tab-3")}
//               >
//                 <span>DINNER</span>
//               </li>
//               <li
//                 className={`tab-btn ${activeTab === "tab-4" ? "active-btn" : ""}`}
//                 onClick={() => handleTabClick("tab-4")}
//               >
//                 <span>WINES</span>
//               </li>
//             </ul>
//           </div>

//           {/* Tab Content */}
//           <div className="tabs-content">
//             {activeTab === "tab-1" && (
//               <div className="tab" id="tab-1">
//                 <p>🍳 Morning menu items go here...</p>
//               </div>
//             )}
//             {activeTab === "tab-2" && (
//               <div className="tab" id="tab-2">
//                 <p>🍝 Weekday lunch menu items go here...</p>
//               </div>
//             )}
//             {activeTab === "tab-3" && (
//               <div className="tab" id="tab-3">
//                 <p>🍽️ Dinner menu items go here...</p>
//               </div>
//             )}
//             {activeTab === "tab-4" && (
//               <div className="tab" id="tab-4">
//                 <p>🍷 Wine list goes here...</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { useState } from "react";

export default function MenuTabs() {
  const [activeTab, setActiveTab] = useState("tab-1");

  const tabList = [
    { id: "tab-1", label: "Famous Kebab" },
    { id: "tab-2", label: "Famous Gravy" },
    { id: "tab-3", label: "BWCO Biryani" },
    { id: "tab-4", label: "Combo Meals" },
  ];

  const tabContent = {
    "tab-1": menuContent1(),
    "tab-2": menuContent2(),
    "tab-3": menuContent3(),
    "tab-4": menuContent4(),
  };

  function menuContent1() {
    return (
      <div className="row clearfix">
        <div className="menu-col col-lg-6 col-md-12 col-sm-12">
          <div className="inner">
            {renderDish(
              "menu-image-5.png",
              "Chicken Haryali Kabab",
              "AED 31.50",
              // "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese."
            )}
            {renderDish(
              "menu-image-6.png",
              "Chicken Kasturi Tikka",
              "AED 31.50",
              // "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
              "SEASONAL"
            )}
            {renderDish(
              "menu-image-7.png",
              "Chicken Malai Tikka",
              "AED 31.50",
              // "Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand."
            )}
          </div>
        </div>
        <div className="menu-col col-lg-6 col-md-12 col-sm-12">
          <div className="inner">
            {renderDish(
              "menu-image-8.png",
              "Murgh Ke Shole",
              "AED 31.50",
              // "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
              "NEW"
            )}
            {renderDish(
              "menu-image-9.png",
              "Chicken Achari Tikka",
              "AED 31.50",
              // "Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper."
            )}
            {renderDish(
              "menu-image-10.png",
              "Chicken Seekh Kabab",
              "AED 31.50",
              // "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices"
            )}
          </div>
        </div>
      </div>
    );
  }

  
  function menuContent2() {
    return (
      <div className="row clearfix">
        <div className="menu-col col-lg-6 col-md-12 col-sm-12">
          <div className="inner">
            {renderDish(
              "menu-image-5.png",
              "Chicken Reshmi Kabab",
              "AED 31.50",
              "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese."
            )}
            {renderDish(
              "menu-image-6.png",
              "Chicken Haryali Kabab",
              "AED 31.50",
              "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
              "SEASONAL"
            )}
            {renderDish(
              "menu-image-7.png",
              "Mutton Boti Kabab",
              "AED 35.70",
              "Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand."
            )}
          </div>
        </div>
        <div className="menu-col col-lg-6 col-md-12 col-sm-12">
          <div className="inner">
            {renderDish(
              "menu-image-8.png",
              "Paneer Lahori",
              "AED 29.40",
              "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
              "NEW"
            )}
            {renderDish(
              "menu-image-9.png",
              "Konkan Fish Tikka",
              "AED 39.90",
              "Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper."
            )}
            {renderDish(
              "menu-image-10.png",
              "Fish Tikka Hyderabadi",
              "AED 39.00",
              "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices"
            )}
          </div>
        </div>
      </div>
    );
  }

  
  function menuContent3() {
    return (
      <div className="row clearfix">
        <div className="menu-col col-lg-6 col-md-12 col-sm-12">
          <div className="inner">
            {renderDish(
              "menu-image-5.png",
              "Chicken Biryani (Meal For 1) 2 PIECES",
              "AED 25.20",
              // "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese."
            )}
            {renderDish(
              "menu-image-6.png",
              "Chicken 65 Biryani (Meal For 1) 8 TO 10 PIECES",
              "AED 29.40",
              // "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
              "SEASONAL"
            )}
            {renderDish(
              "menu-image-7.png",
              "Zaffrani Chicken Biryani (Serves 2) 3 PIECES",
              "AED 39.90",
              // "Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand."
            )}
          </div>
        </div>
        <div className="menu-col col-lg-6 col-md-12 col-sm-12">
          <div className="inner">
            {renderDish(
              "menu-image-8.png",
              "Zaffrani 65 Biryani (Serves 2) 16 TO 20 PIECES",
              "AED 44.10",
              // "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
              "NEW"
            )}
            {renderDish(
              "menu-image-9.png",
              "Zaffrani Chicken Family Pack (Serves 4 - 5) 6 PIECES",
              "AED 93.45",
              // "Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper."
            )}
            {renderDish(
              "menu-image-10.png",
              "Zaffrani Chicken Jumbo Pack (Serves 6 to 8) 10 PIECES",
              "AED 193.20",
              // "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices"
            )}
          </div>
        </div>
      </div>
    );
  }

  
  function menuContent4() {
    return (
      <div className="row clearfix">
        <div className="menu-col col-lg-6 col-md-12 col-sm-12">
          <div className="inner">
            {renderDish(
              "menu-image-5.png",
              "Chicken Combo",
              "AED 35.70",
              // "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese."
            )}
            {renderDish(
              "menu-image-6.png",
              "Mutton Combo",
              "AED 39.00",
              // "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
              "SEASONAL"
            )}
            {renderDish(
              "menu-image-7.png",
              "Veg Combo",
              "AED 33.60",
              // "Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand."
            )}
          </div>
        </div>
        <div className="menu-col col-lg-6 col-md-12 col-sm-12">
          <div className="inner">
            {renderDish(
              "menu-image-8.png",
              "Rice & Noodles Combo",
              "AED 30.45",
              // "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
              "NEW"
            )}
            {renderDish(
              "menu-image-9.png",
              "Non Veg Combo",
              "AED 37.80",
              // "Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper."
            )}
            {renderDish(
              "menu-image-10.png",
              "Veg Combo",
              "AED 29.40",
              // "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices"
            )}
          </div>
        </div>
      </div>
    );
  }

  function renderDish(image, name, price, desc, badge = null) {
    return (
      <div className="dish-block">
        <div className="inner-box">
          <div className="dish-image">
            <a href="#">
              <img src={`images/resource/${image}`} alt={name} />
            </a>
          </div>
          <div className="title clearfix">
            <div className="ttl clearfix">
              <h5>
                <a href="#">
                  {name} {badge && <span className="s-info">{badge}</span>}
                </a>
              </h5>
            </div>
            <div className="price">
              <span>{price}</span>
            </div>
          </div>
          <div className="text desc">
            <a href="#">{desc}</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="menu-section">
      <div className="left-bg">
        <img src="images/background/bg-5.png" alt="bg-left" />
      </div>
      <div className="right-bg">
        <img src="images/background/bg-6.png" alt="bg-right" />
      </div>
      <div className="auto-container">
        <div className="title-box centered">
          <div className="subtitle">
            <span>Special selection</span>
          </div>
          <div className="pattern-image">
            <img src="images/icons/separator.svg" alt="separator" />
          </div>
          <h2>Delicious Menu</h2>
        </div>

        <div className="tabs-box menu-tabs">
          <div className="buttons">
            <ul className="tab-buttons clearfix">
              {tabList.map((tab) => (
                <li
                  key={tab.id}
                  className={`tab-btn ${activeTab === tab.id ? "active-btn" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span>{tab.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="tabs-content">
            {tabContent[activeTab]}
          </div>
        </div>
       <div className="open-timing">
          <div className="hours">
            Daily from{" "}
            <span className="theme_color">10:00 AM</span> to{" "}
            <span className="theme_color">11:00 PM</span>
          </div>
          <div className="link-box">
            <a
              href="menu-list-1.html"
              className="theme-btn btn-style-two clearfix"
            >
              <span className="btn-wrap">
                <span className="text-one">view all menu</span>
                <span className="text-two">view all menu</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}