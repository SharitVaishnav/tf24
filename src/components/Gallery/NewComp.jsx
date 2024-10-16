import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import * as THREE from "three";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "../../css/style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
gsap.registerPlugin(ScrollTrigger);
const NewComp = () => {
    const component = useRef();
    const horizontalRef = useRef();
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray(".card-wrapper");
            gsap.to(cards, {
                xPercent: () => -(100 * 4.5), // Moves content left
                ease: "none",
                scrollTrigger: {
                    trigger: component.current,
                    start: "top top", // Start when the section reaches the top of the viewport
                    end: () => `+=${horizontalRef.current.scrollWidth}`, // End after full scroll
                    scrub: true, // Smooth scrolling
                    pin: true, // Pinned scroll
                    // markers: true
                },
            });
        }, component);
        return () => ctx.revert();
    });
    return (
        <HelmetProvider>
            <Helmet>
                <link rel="stylesheet" href="https://unpkg.com/sheryjs/dist/Shery.css" />
                <script src="https://unpkg.com/sheryjs/dist/Shery.js" async></script>
            </Helmet>
            <div data-scroll-container id="main">
                <div id="page1">
                    <img
                        className="img"
                        src="https://assets.unicorn.studio/images/GXG3EqMyo8U7uJtwHU4g7q9bEPZ2/romzi98nicolaro8383_httpss.mj.runaiMyLIMjPpQ_vintage_style_rend_8e51a5a3-e589-41e1-8da7-0240fe221866.webp"
                        alt=""
                    />
                    <div className="marque">
                        <h1>// Vintage vision</h1>
                        <h1>// Vintage vision</h1>
                        <h1>// Vintage vision</h1>
                        <h1>// Vintage vision</h1>
                    </div>
                </div>
                <div id="page2" ref={component}>
                    <div className="horizontal" ref={horizontalRef}>
                        <div className="loading">
                            <h4>// uploading collection...</h4>
                        </div>
                        <div className="text card-wrapper max-sm:absolute max-sm:top-0 max-w-40:left-20 max-sm:left-28 ">

                            <h4>// into the past</h4>
                            <h1>Explore</h1>
                            <h1>AI wonders</h1>
                        </div>
                        <div className="card card-wrapper">
                            <div className="img-div">
                                <img src="src\assets\galleryImages\IMG_0108.JPG" alt="" />
                            </div>
                            {/* <div className="text-div">
                                <h1>hello</h1>
                            </div> */}
                        </div>
                        <div className="card card-wrapper">
                            <div className="img-div">
                                <img
                                    src="src\assets\galleryImages\DSC00145.JPG"
                                    alt=""
                                />
                            </div>
                            {/* <div className="text-div">
                                <h1>hello</h1>
                            </div> */}
                        </div>
                        <div className="card card-wrapper">
                            <div className="img-div">
                                <img src="src\assets\galleryImages\DSC00155.JPG" alt="" />
                            </div>
                            {/* <div className="text-div">
                                <h1>hello</h1>
                            </div> */}
                        </div>
                        <div className="card card-wrapper">
                            <div className="img-div">
                                <img src="src\assets\galleryImages\DSC00166.JPG" alt="" />
                            </div>
                            {/* <div className="text-div">
                                <h1>hello</h1>
                            </div> */}
                        </div>
                        <div className="card card-wrapper">
                            <div className="img-div">
                                <img src="src\assets\galleryImages\DSC04241.JPG" alt="" />
                            </div>
                            {/* <div className="text-div">
                                <h1>hello</h1>
                            </div> */}
                        </div>
                        {/* <div className="card card-wrapper">
                            <div className="img-div">
                                <img src="src\assets\galleryImages\DSC04393.JPG" alt="" />
                            </div>
                            <div className="text-div">
                                <h1>hello</h1>
                            </div>
                        </div> */}
                        {/* <div className="card card-wrapper">
                            <div className="img-div">
                                <img src="src\assets\galleryImages\DSC04393.JPG" alt="" />
                            </div>
                            <div className="text-div">
                                <h1>hello</h1>
                            </div>
                        </div> */}
                        {/* <div className="card card-wrapper">
                            <div className="img-div">
                                <img src="src\assets\galleryImages\DSC04441.JPG" alt="" />
                            </div>
                            <div className="text-div">
                                <h1>hello</h1>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div id="page3">
                    <img
                        className="img"
                        src="https://assets.unicorn.studio/images/GXG3EqMyo8U7uJtwHU4g7q9bEPZ2/romzi98nicolaro8383_httpss.mj.runaiMyLIMjPpQ_vintage_style_rend_8e51a5a3-e589-41e1-8da7-0240fe221866.webp"
                        alt=""
                    />
                    <div className="marque">
                        <h1>// Futuristic flair</h1>
                        <h1>// Futuristic flair</h1>
                        <h1>// Futuristic flair</h1>
                        <h1>// Futuristic flair</h1>
                    </div>
                </div>
            </div>
        </HelmetProvider>
    );
};
export default NewComp;