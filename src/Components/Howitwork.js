import React from "react";
import "../css/about.css";

function Howitwork() {
  return (
    <>
      <div
        className="aproch"
        style={{
          backgroundColor: "#0096FF",
          marginTop: "15px",
        }}
      >
        <div className="aprochimg">
          <img src="/aprox.jpg" alt="..." />
        </div>
        <div className="approchdetails">
          <p>------ HOW IT WORKS?</p>
          <h3>Everything you need on creating a business process.</h3>
          <br />
          <br />

          <div
            style={{
              display: "flex",
              alignContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "20%",
              }}
            >
              <p
                style={{
                  backgroundColor: "#B0CBFF",
                  padding: "20px",
                  color: "#1E68F8",
                  borderRadius: "50%",
                }}
              >
                01
              </p>
            </div>
            <div
              style={{
                width: "80%",
              }}
            >
              <div>
                <h4>Collect Ideas</h4>
              </div>
              <div>
                <p>Nulla vitae elit libero pharetra augue dapibus.</p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "20%",
              }}
            >
              <p
                style={{
                  backgroundColor: "#B0CBFF",
                  color: "#1E68F8",
                  padding: "20px",
                  borderRadius: "50%",
                }}
              >
                01
              </p>
            </div>
            <div
              style={{
                width: "80%",
              }}
            >
              <div>
                <h4>Data Analysis</h4>
              </div>
              <div>
                <p>Vivamus sagittis lacus augue laoreet vel.</p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "20%",
              }}
            >
              <p
                style={{
                  backgroundColor: "#B0CBFF",
                  color: "#1E68F8",
                  padding: "20px",
                  borderRadius: "50%",
                }}
              >
                01
              </p>
            </div>
            <div
              style={{
                width: "80%",
              }}
            >
              <div>
                <h4>Magic Touch</h4>
              </div>
              <div>
                <p>Cras mattis consectetur purus sit amet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="aproch"
        style={{
          marginTop: "15px",
        }}
      >
        <div className="approchdetails">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Accordion Item #1
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It
                  is shown by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Accordion Item #2
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Accordion Item #3
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aprochimg">
          <img src="/aprox.jpg" alt="..." />
        </div>
      </div>
    </>
  );
}

export default Howitwork;
