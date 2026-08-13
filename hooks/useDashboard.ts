"use client";

import { useEffect, useState } from "react";

export default function useDashboard() {

  const [data, setData] = useState<any>(null);

  async function load() {

    const res = await fetch("/api/dashboard");

    const json = await res.json();

    setData(json);

  }

useEffect(() => {

  load();

  const timer = setInterval(() => {
    load();
  }, 5000);

  return () => clearInterval(timer);

}, []);

  return data;

}
