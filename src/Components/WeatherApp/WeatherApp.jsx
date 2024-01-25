import React from "react";
import * as stylex from "@stylexjs/stylex";
import search from "../Assets/search.png";
import cloud from "../Assets/cloud.png";
import wind from "../Assets/wind.png";
import humidity from "../Assets/humidity.png";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    width: "530px",
    height: "650px",
    margin: "auto",
    marginTop: "75px",
    borderRadius: "12px",
    background: `linear-gradient(135deg, #00044C 0%, #000046 100%)`, // Navy blue gradient
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)", // Subtle shadow
    padding: "30px 20px", // Add padding for breathing room
    position: "relative",
  },
  topBar: {
    display: "flex", // Updated to flex
    justifyContent: "center",
    alignItems: "center", // Added to vertically align input and icon
    paddingTop: "70px",
    paddingBottom: "700px",
  },

  cityInput: {
    display: "flex",
    width: "362px",
    height: "78px",
    background: "#ebfffc",
    border: "none",
    borderRadius: "40px",
    paddingLeft: "40px",
    color: "#626262",
    fontSize: "20px",
    fontWeight: "400",
  },
  searchIcon: {
    display: "flex",
    marginLeft: "10px",
    justifyContent: "center",
    alignItems: "center",
    width: "78px",
    height: "78px",
    background: "#ebfffc",
    borderRadius: "40px",
    cursor: "pointer",
  },
  weatherImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute", // Position it relative to the container
    marginTop: "114px", // Adjust based on topBar and cityInput height
    left: 0, // Extend to full width
    right: 0,
    width: "100%",
  },
  weatherTemp: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    marginTop: "330px",
    left: 0,
    right: 0,
    width: "100%",
    fontSize: "120px",
    fontWeight: "400",
    color: "#ffffff",
  },
  weatherLocation: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    marginTop: "470px",
    left: 0,
    right: 0,
    width: "100%",
    fontSize: "60px",
    fontWeight: "400",
    color: "#ffffff",
  },
  dataContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    marginTop: "580px",
    left: 0,
    right: 0,
    fontSize: "15px",
    fontWeight: "400",
    width: "100%",
    color: "#ffffff",
  },
  element: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    margin: "auto",
    color: "#ffffff",
    width: "100%",
    height: "100px",
    gap: "12px",
  },
  data: {
    fontSize: "34px",
    fontWeight: "400",
  },
  text: {
    fontSize: "20px",
    fontWeight: "400",
  },
  icon: {
    marginTop: "10px",
  },
};
const WeatherApp = () => {
  return (
    <>
      <div {...stylex.props(styles.container)}>
        <div {...stylex.props(styles.topBar)}>
          <input
            type="text"
            {...stylex.props(styles.cityInput)}
            placeholder="Search"
          />
          <div {...stylex.props(styles.searchIcon)}>
            <img src={search} alt="search" />
          </div>
        </div>
        <div {...stylex.props(styles.weatherImage)}>
          <img src={cloud} alt="" />
        </div>
        <div {...stylex.props(styles.weatherTemp)}>24 °C</div>
        <div {...stylex.props(styles.weatherLocation)}>London</div>
        <div {...stylex.props(styles.dataContainer)}>
          <div {...stylex.props(styles.element)}>
            <img {...stylex.props(styles.icon)} src={humidity} alt="" />
            <div {...stylex.props(styles.data)}>
              <div {...stylex.props(styles.humidity)}>64%</div>
              <div {...stylex.props(styles.text)}>Humidity</div>
            </div>
          </div>
          <div {...stylex.props(styles.element)}>
            <img {...stylex.props(styles.icon)} src={wind} alt="" />
            <div {...stylex.props(styles.data)}>
              <div {...stylex.props(styles.windSpeed)}>18kmph</div>
              <div {...stylex.props(styles.text)}>Wind Speed</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherApp;
