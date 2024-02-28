import "./adminMenuAdd.css";
import { useState } from "react";
import axios from "axios";
import baseURL from "../../../baseURL";

function AdminMenuAdd() {
  const [image, setImage] = useState();
  const [dishInfo, setDishInfo] = useState({
    dishName: String,
    price: Number,
    dishDescription: String,
    category: String,
    subCategory: String,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    // this image name is quotes here is the name by which image is gonna get stored in backend
    formData.append("image", image);
    formData.append("dishName", dishInfo.dishName);
    formData.append("price", dishInfo.price);
    formData.append("dishDescription", dishInfo.dishDescription);
    formData.append("category", dishInfo.category);
    formData.append("subCategory", dishInfo.subCategory);

    await axios
      .post(baseURL + "/adminMenu", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((result) => console.log(result))
      .catch((error) => console.error("Error:", error));
  }

  function handleImageChange(e) {
    setImage(e.target.files[0]);
    console.log(e.target.files[0]);
  }

  function handleDishInfo(e) {
    const { name, value } = e.target;
    setDishInfo((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  return (
    <div>
      <div id="adminmenu_outer">
        <div id="adminmenu_inner">
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="file"
                  accept="image/*"
                  // name="image"
                  onChange={handleImageChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Dish Name"
                  onChange={handleDishInfo}
                  name="dishName"
                  value={dishInfo.dishName}
                ></input>
                <input
                  type="text"
                  placeholder="Dish Description"
                  onChange={handleDishInfo}
                  name="dishDescription"
                  value={dishInfo.dishDescription}
                />
                <input
                  type="number"
                  placeholder="Price"
                  onChange={handleDishInfo}
                  name="price"
                  value={dishInfo.price}
                  min="1"
                ></input>
                <select
                  type="text"
                  placeholder="Category"
                  onChange={handleDishInfo}
                  name="category"
                  value={dishInfo.category}
                >
                  <option value="Starter">Starter</option>
                  <option value="MainCourse">Main Course</option>
                  <option value="Drinks">Drinks</option>
                  <option value="Specials">Specials</option>
                </select>
                <select
                  type="text"
                  placeholder="Dish Sub Category"
                  onChange={handleDishInfo}
                  name="subCategory"
                  value={dishInfo.subCategory}
                >
                  <option value="Category1">Category1</option>
                  <option value="Category2">Category2</option>
                  <option value="Category3">Category3</option>
                </select>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminMenuAdd;
