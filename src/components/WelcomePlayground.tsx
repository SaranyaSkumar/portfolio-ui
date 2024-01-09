"use client";
import React from "react";
import BackButton from "./BackButton";
import profile from "@/images/profile.json";
import Lottie from "lottie-react";

const WelcomePlayground = () => {
  return (
    <>
      <div>
        <BackButton />
        <div className="px-4 md:px-20 m-20 bg-black text-white p-10 rounded-xl">
          <h1 className="text-3xl font-bold">Welcome to playground! 🧩</h1>
          <p className="text-lg pt-5">
            This is a space where I experiment and refine my abilities, applying
            my knowledge to a variety of challenges and projects. It&apos;s a
            testament to the ever-evolving journey of skill enhancement and
            technical exploration.{" "}
          </p>
          <div className="flex flex-col md:flex-row items-center">
            <div className="text-6xl text-purple-500 mb-4 md:w-1/2 flex justify-center items-center mt-6">
              <Lottie
                animationData={profile}
                style={{ width: "70%", height: "auto" }}
              />
            </div>
            <div className="md:w-1/2 flex justify-center items-center">
              <div className="overflow-hidden text-center">
                <h1 className="text-xl font-bold typing-animation">
                  {`Absolutely thrilled 😄🌟! I'm passionately driven by projects `}
                  <br />
                  {` that spark my excitement and creativity 🚀✨!`}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomePlayground;
