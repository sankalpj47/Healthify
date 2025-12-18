"use client";
import React, { useEffect, useState } from "react";
import classes from "@/styles/page.module.css";
import Image from "next/image";
import { useNotification } from "@/hooks/useNotification";
import AboutHealthcare from "@/components/home/AboutHealthcare";
import ContactUs from "@/components/home/ContactUs";

export default function Home() {
  const { NotificationHandler } = useNotification();
  useEffect(() => {
    NotificationHandler(
      "GenAiMech HealthCare",
      "Welcome to the GenAiMech HealthCare. We are here to help you.",
      "Success"
    );
  }, []);

  return (
    <div className={classes["container"]}>
      <div className={classes["box"]}>
        <div className={classes["top-image"]}>
          <Image
             
            src="/image/background.png"
            alt="background"
            width={1920}
            height={1080}
          />
          <div className={classes["image"]}></div>
         
        </div>
        <AboutHealthcare />
        <ContactUs />
      </div>
    </div>
  );
}
