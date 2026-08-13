"use client";

import { useEffect } from "react";

export default function EnterpriseLoop() {

  async function runLoop() {

    try {

      await fetch("/api/ceo-brain");

      console.log("AI CEO Loop Executed");

    } catch (err) {

      console.error("Enterprise Loop Error", err);

    }

  }

  useEffect(() => {

    runLoop();

    const timer = setInterval(() => {

      runLoop();

    }, 30000); // Every 30 seconds

    return () => clearInterval(timer);

  }, []);

  return null;

}
