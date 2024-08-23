"use client";
import supabase from "@/config/supabaseClient";
import { useEffect, useState } from "react";

export default function SupabasePage() {
  const [fetchError, setFetchError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const dataSupabase = async () => {
      const { data, error } = await supabase.from("clients").select();

      if (error) {
        setFetchError("Could not fetch the clients");
        setData(null);
        console.log(error);
      }

      if (data) {
        setData(data);
        setFetchError(null);
      }
    };

    dataSupabase();
  }, []);
  return (
    <div>
      <h1>SupabasePage</h1>
      {/* {data &&
        data.map((item) => {
          return <div key={item.id}>{item.email}</div>;
        })} */}

      {data.map((item) => {
        return <div key={item.id}>{item.id}</div>;
      })}
    </div>
  );
}
