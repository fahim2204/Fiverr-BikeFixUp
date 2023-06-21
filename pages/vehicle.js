import React, { useEffect, useState } from "react";
import Image from "next/image";
import rightBgElement from "../public/assets/002.svg";
import rightBgBallElement from "../public/assets/blobanimation.svg";
import SEO from "../components/SEO";
import Sidebar from "../components/Sidebar";
import { RxCrossCircled } from "react-icons/rx";
import API from "../helper/request";
import { useSelector, useDispatch } from "react-redux";

const Vehicle = () => {
  const [showModal, setShowModal] = useState(false);
  const [showMobileSide, setShowMobileSide] = useState(false);
  const [vehicleList, setVehicleList] = useState([]);

  const profile = useSelector((state) => state.profile);

  const [fuelTypes, setFuelTypes] = useState([]);
  const [allBrands, setAllBrands] = useState([]);
  const [allModels, setAllModels] = useState([]);

  useEffect(() => {
    getAllBrands();
    getAllFuelType();
  }, []);

  const getAllFuelType = () => {
    API.get("vehicle-powers", profile.token).then((res) => {
      // console.log(res.data.vehicle_powers);
      setFuelTypes(res.data.vehicle_powers);
    });
  };
  const getAllBrands = () => {
    API.get("brands", profile.token).then((res) => {
      // console.log(res.data.brands);
      setAllBrands(res.data.brands);
    });
  };
  const getBrandModels = (model) => {
    API.get(`vehicle-models/${model}`, profile.token).then((res) => {
      console.log(res.data.vehicleModel);
      // setAllModels(res.data.vehicleModel);
    });
  };

  const handleAddVehicle = () => {
    setShowModal(true);
  };

  const handleSaveVehicle = (vehicleData) => {
    // Add the vehicle data to the list
    setVehicleList([...vehicleList, vehicleData]);
    setShowModal(false);
  };

  const handleDelete = (index) => {
    // Remove the vehicle from the list based on the index
    const updatedList = [...vehicleList];
    updatedList.splice(index, 1);
    setVehicleList(updatedList);
  };

  return (
    <>
      <SEO />
      <div className="bg-main p-5 md:p-10 h-screen">
        <div className="backdrop-blur-sm shadow-sm border rounded-3xl overflow-hidden border-white h-full text-slate-200 relative">
          <Image
            className="absolute top-[190px] right-0 w-[250px] -z-10"
            src={rightBgBallElement}
            alt="element"
          />
          <Image
            className="absolute top-[200px] right-0 w-[200px] -z-10"
            src={rightBgElement}
            alt="element"
          />
          <div className="grid grid-cols-12 relative h-full">
            <div
              className={`fixed md:static top-0 ${showMobileSide ? "left-0" : "-left-[220px]"
                } md:col-span-3 h-full backdrop-blur shadow p-3 bg-gradient-to-br from-white to-white md:to-transparent rounded-3xl transition-all duration-300 z-50`}
            >
              <Sidebar
                showMobileSide={showMobileSide}
                setShowMobileSide={setShowMobileSide}
              />
            </div>
            <div className="col-span-12 md:col-span-9 bg-primary text-black">
              <div className=" px-5 py-8 md:px-10 md:py-10 overflow-y-scroll overflow-x-hidden h-[calc(100vh-82px)] hide-scroll">
                <div className="flex flex-col">
                  {!vehicleList.length && !showModal ? (
                    // No vehicles and form is not shown
                    <>
                      <h1 className="lg:text-4xl text-xl font-semibold text-center lg:mb-5 mb-2">
                        A <span className="text-beta-900">Vehicle</span> is not
                        included
                      </h1>
                      <p className="text-center mb-10 lg:text-base text-xs">
                        Please feel free to talk to us if you have any
                        questions.
                        <br />
                        We endeavor to answer within 24 hours.
                      </p>
                      <div className="flex justify-center items-center mb-2 mt-2">
                        <button
                          className="newMorfPurple px-8 md:px-16 py-2 text-white"
                          onClick={handleAddVehicle}
                        >
                          <span className="flex gap-2 items-center justify-center">
                            Add Vehicle
                          </span>
                        </button>
                      </div>
                    </>
                  ) : (
                    // Vehicle list or form is shown
                    <div>
                      {showModal && (
                        // Show modal
                        <div className="inset-0 flex items-center justify-center z-50">
                          <div className=" rounded-3xl max-w-full px-4 sm:px-20 md:py-4 flex flex-col md:flex-row justify-center items-center">
                            <div className="flex justify-around items-center">
                              <div className="loginGlass px-5 py-5 md:py-2">
                                <div className="flex justify-between">
                                  <div className="flex flex-col">
                                    <h1 className="text-2xl sm:text-4xl text-left font-semibold text-black mt-2">
                                      Add your vehicle
                                    </h1>
                                    <p className="text-[12px] md:text-sm text-left mb-0 text-black">
                                      Details of your vehicle
                                    </p>
                                  </div>
                                  <div
                                    className="absolute top-0 right-0 mt-2 mr-2 cursor-pointer"
                                    onClick={() => setShowModal(false)}
                                  >
                                    <RxCrossCircled size={24} />
                                  </div>
                                </div>
                                {/* Form */}
                                <form
                                  className="pt-3 flex flex-col justify-center w-full items-center"
                                  onSubmit={(e) => {
                                    e.preventDefault();
                                    const formData = new FormData(e.target);
                                    const vehicleData = Object.fromEntries(
                                      formData.entries()
                                    );
                                    handleSaveVehicle(vehicleData);
                                  }}
                                >
                                  <select
                                    className={`outline-none my-2 w-full h-[45px] px-[27px] py-1 formGlassInput text-black`}
                                    onChange={(e) => {
                                      getBrandModels(e.target.value || 1);
                                    }}
                                    name="name"
                                  >
                                    <option value={null}>Choose Brand</option>
                                    {allBrands.map((opt, i) => (
                                      <option key={i} value={opt.id}>
                                        {opt.name}
                                      </option>
                                    ))}
                                  </select>

                                  <div className="sm:flex gap-2 w-full">
                                    <span className="block w-full">
                                      <select
                                        className={`outline-none my-2 w-full h-[45px] px-[27px] py-1 formGlassInput text-black`}
                                        onChange={true}
                                        name="name"
                                      >
                                        <option value={null}>
                                          Choose Model
                                        </option>
                                        {allModels.map((opt, i) => (
                                          <option key={i} value={opt.id}>
                                            {opt.name}
                                          </option>
                                        ))}
                                      </select>
                                    </span>

                                    <span className="block w-full">
                                      <input
                                        type="number"
                                        inputMode="numeric"
                                        className={`my-2 w-full h-[45px] px-[27px] py-1 formGlassInput text-black hide-number-buttons`}
                                        name="phone"
                                        placeholder="Year"
                                      />
                                    </span>
                                  </div>

                                  <div className="sm:flex sm:gap-2 w-full">
                                    <span>
                                      <input
                                        type="number"
                                        inputMode="numeric"
                                        className={`my-2 w-full h-[45px] px-[27px] py-1 formGlassInput text-black hide-number-buttons`}
                                        name="phone"
                                        placeholder="Vehicle CC"
                                      />
                                    </span>

                                    <span>
                                      <select
                                        className={`outline-none my-2 w-full h-[45px] px-[27px] py-1 formGlassInput text-black`}
                                        onChange={true}
                                        name="name"
                                      >
                                        <option value={null}>Fuel Type</option>
                                        {fuelTypes.map((opt, i) => (
                                          <option key={i} value={opt.id}>
                                            {opt.cc_number}
                                          </option>
                                        ))}
                                      </select>
                                    </span>
                                  </div>
                                  <div className="w-full">
                                    <span className="w-full block relative">
                                      <input
                                        type="number"
                                        inputMode="numeric"
                                        className={`my-2 w-full h-[45px] px-[27px] py-1 formGlassInput text-black hide-number-buttons`}
                                        name="number"
                                        placeholder="Registration Number"
                                      />
                                    </span>
                                  </div>

                                  <div className="flex justify-center items-center my-3">
                                    <button className="newMorfPurple px-8 py-2 text-white">
                                      <span className="flex gap-2 items-center justify-center">
                                        Add
                                      </span>
                                    </button>
                                  </div>
                                </form>

                                {/* End of Form */}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {vehicleList.length > 0 && !showModal && (
                        // Show vehicle list
                        <div className="relative bg-main rounded-md shadow-md mt-8 px-4">
                          <table className="w-full text-sm text-left  text-black px-5 py-5 md:py-2">
                            <thead className="text-xs uppercase   text-black">
                              <tr>
                                <th className="px-4 py-4">Brand</th>
                                <th className="px-4 py-4">Model</th>
                                <th className="px-4 py-4">Year</th>
                                <th className="px-4 py-4">Vehicle CC</th>
                                <th className="px-4 py-4">Fuel Type</th>
                                <th className="px-4 py-4">Registration</th>
                                <th className="px-4 py-4">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {vehicleList.map((vehicle, index) => (
                                <tr key={index}>
                                  <td className="px-4 py-4">{vehicle.text}</td>
                                  <td className="px-4 py-4">{vehicle.text}</td>
                                  <td className="px-4 py-4">
                                    {vehicle.number}
                                  </td>
                                  <td className="px-4 py-4">{vehicle.text}</td>
                                  <td className="px-4 py-4">{vehicle.type}</td>
                                  <td className="px-4 py-4">
                                    {vehicle.number}
                                  </td>
                                  <td className="px-4 py-4">
                                    <button
                                      className="text-red-500"
                                      onClick={() => handleDelete(index)}
                                    >
                                      Delete
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          <div className="flex justify-center items-center  mt-2">
                            <button
                              className="newMorfPurple px-8 md:px-16 py-2 mb-4 text-white"
                              onClick={handleAddVehicle}
                            >
                              <span className="flex gap-2 items-center justify-center">
                                Add Vehicle
                              </span>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vehicle;
