// src/pages/Portfolio.jsx
import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: "100vh",
            }}
        >
            <div
                style={{
                    // display: "flex",
                    // justifyContent: "center",
                    // alignItems: "center",
                    // flexDirection: "column",
                    width: "950px",
                }}
            >
                <div className="Name">Yaroslav Uglov</div>
                <section>
                    <h1>summary</h1>
                    <p>
                        I have skills as a Linux administrator, showcasing my
                        ability in server configuration, database management,
                        and frontend development, complemented by my proficiency
                        in backend API, illustrating versatility across multiple
                        IT disciplines.
                    </p>
                </section>
                <section>
                    <h1>work experience</h1>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <span>Avangard Inc. Practice</span>
                        <span>2021, St.Petersburg</span>
                    </div>
                </section>
                <section>
                    <h1>skills</h1>
                    <span>
                        Programming languages: HTML&CSS, JavaSript, PHP, C#, Go,
                        SQL;
                    </span>
                    <br />
                    <span>Framework: React;</span>
                    <br />
                    <span>Tools: Git, npm, Docker, Nginx.</span>
                </section>
                <section>
                    <h1>education</h1>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "15px",
                        }}
                    >
                        <p>
                            Technical College of Management and Commerce
                            <br />
                            Major: Computer Science
                        </p>
                        <span>2018 - 2022, St.Petersburg</span>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <p>
                            University of Industrial Technology and Design
                            <br />
                            Major: Computer Science
                        </p>
                        <span>2022 - 20XX, St.Petersburg</span>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Portfolio;
