import "./adminMenuAdd.css";
import { useState } from "react";
import axios from "axios";
import baseURL from "../../../baseURL";
import toast, { Toaster } from "react-hot-toast";

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
      .then((result) => {
        console.log(result);
        toast(dishInfo.dishName + " added!");
        setDishInfo({
          dishName: "",
          price: 0,
          dishDescription: "",
          category: "",
          subCategory: "",
        });
      })
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
      <div id="adminmenuAdd_outer">
        <h3>Add New Menu Items</h3>
        <div id="adminmenuAdd_inner">
          <form onSubmit={handleSubmit}>
            <div id="adminMenugrid">
              <div id="adminMenuleftsection">
                <div>
                  <select
                    id="adminMenuAdd_category"
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
                </div>
                <div>
                  <select
                    id="adminMenuAdd_Subcategory"
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
                <div>
                  <span id="adminMenuAdd_ImageSpan">Image Upload</span>
                  <input
                    id="adminMenuAdd_Image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>
              </div>
              <div id="adminMenurightsection">
                <div id="adminMenuRightfirstsubsection">
                  <div>
                    <input
                      id="adminMenuAdd_ItemName"
                      type="text"
                      placeholder="Dish Name"
                      onChange={handleDishInfo}
                      name="dishName"
                      value={dishInfo.dishName}
                    ></input>
                  </div>
                  <div>
                    <input
                      id="adminMenuAdd_price"
                      type="number"
                      placeholder="Price"
                      onChange={handleDishInfo}
                      name="price"
                      value={dishInfo.price}
                      min="1"
                    ></input>
                  </div>
                </div>
                <div>
                  <textarea
                    id="adminMenuAdd_description"
                    type="text"
                    placeholder="Dish Description"
                    onChange={handleDishInfo}
                    name="dishDescription"
                    value={dishInfo.dishDescription}
                    rows="6"
                    cols="40"
                  />
                </div>
                <button id="adminMenuAdd_submit" type="submit">
                  Submit
                </button>
                <Toaster
                  toastOptions={{
                    success: {
                      style: {
                        background: "black",
                      },
                      position: "top-right",
                    },
                    error: {
                      style: {
                        background: "red",
                      },
                      position: "top-right",
                    },
                  }}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminMenuAdd;
