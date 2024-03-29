import "./menu.css";
import { useEffect, useState } from "react";
import MenuCategorySection from "./menucategorysection/menucategorysection";
import Orders from "./yourOrder/yourorder";
import axios from "axios";
import baseURL from "../baseURL";
import { faBorderNone } from "@fortawesome/free-solid-svg-icons";

function Menu() {
  const [menuData, setMenuData] = useState([]);
  const [useSpecial, setUseSpecial] = useState(false);
  const [useStarter, setUseStarter] = useState(true);
  const [useMainCourse, setUseMainCourse] = useState(false);
  const [useDrinks, setUseDrinks] = useState(false);

  const [selectedItems, setSelectedItems] = useState({});

  function getMenuDate() {
    axios
      .get(baseURL + "/menu")
      .then((result) => {
        const listData = result.data;
        setMenuData(listData);
        // console.log("Menu Item", listData);
      })
      .catch((err) => console.error("Error: ", err));
  }

  useEffect(() => {
    getMenuDate();
  }, []);

  function handleStarterClick() {
    setUseDrinks(false);
    setUseMainCourse(false);
    setUseSpecial(false);
    setUseStarter(true);
  }
  function handleMainCourseClick() {
    setUseDrinks(false);
    setUseMainCourse(true);
    setUseSpecial(false);
    setUseStarter(false);
  }
  function handleDrinksClick() {
    setUseDrinks(true);
    setUseMainCourse(false);
    setUseSpecial(false);
    setUseStarter(false);
  }
  function handleSpecialsClick() {
    setUseDrinks(false);
    setUseMainCourse(false);
    setUseSpecial(true);
    setUseStarter(false);
  }

  function handleQuantityChange(itemName, quantity, price) {
    setSelectedItems({
      ...selectedItems,
      [itemName]: { quantity: quantity, price: price },
    });
  }

  return (
    <div>
      <div className="menu_inner">
        <div className="menucategory">
          <div>
            <div className="menuoptions">
              <button
                className={
                  useStarter ? "menuOptionhighlight" : "menuOptionsList"
                }
                id="starter"
                onClick={handleStarterClick}
              >
                Starter
              </button>
              <button
                className={
                  useMainCourse ? "menuOptionhighlight" : "menuOptionsList"
                }
                id="maincourse"
                onClick={handleMainCourseClick}
              >
                Main Course
              </button>
              <button
                className={
                  useDrinks ? "menuOptionhighlight" : "menuOptionsList"
                }
                id="drinks"
                onClick={handleDrinksClick}
              >
                Drinks
              </button>
              <button
                className={
                  useSpecial ? "menuOptionhighlight" : "menuOptionsList"
                }
                id="specials"
                onClick={handleSpecialsClick}
              >
                Specials
              </button>
            </div>
          </div>
          {useSpecial ? (
            <MenuCategorySection
              cuisine={menuData.specials}
              selectedItems={selectedItems}
              onQunantityChange={handleQuantityChange}
            />
          ) : (
            ""
          )}
          {useStarter ? (
            <MenuCategorySection
              cuisine={menuData.starter}
              selectedItems={selectedItems}
              onQunantityChange={handleQuantityChange}
            />
          ) : (
            ""
          )}
          {useMainCourse ? (
            <MenuCategorySection
              cuisine={menuData.mainCourse}
              selectedItems={selectedItems}
              onQunantityChange={handleQuantityChange}
            />
          ) : (
            ""
          )}
          {useDrinks ? (
            <MenuCategorySection
              cuisine={menuData.drinks}
              selectedItems={selectedItems}
              onQunantityChange={handleQuantityChange}
            />
          ) : (
            ""
          )}
        </div>
        <div>
          <div>
            <Orders selectedItems={selectedItems} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Menu;
