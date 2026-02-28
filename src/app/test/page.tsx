"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function TestPage() {
  const [foods, setFoods] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 🔹 Fetch foods
  const fetchFoods = async () => {
    const { data } = await supabase
      .from("foods")
      .select("*")
      .order("created_at", { ascending: false });

    setFoods(data || []);
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  // 🔹 Insert food
  const addFood = async () => {
  if (!name || !price) return;

  const { data, error } = await supabase
    .from("foods")
    .insert([
      {
        name: name,
        price: Number(price),
      },
    ])
    .select();

  console.log("INSERT DATA:", data);
  console.log("INSERT ERROR:", error);

  if (!error) {
    setName("");
    setPrice("");
    await fetchFoods();
  }
};

  return (
    <div style={{ padding: 20 }}>
      <h1>Foods</h1>

      {/* 🔥 INSERT FORM */}
      <div style={{ marginBottom: 20 }}>
        <input
          placeholder="Food name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: 10 }}
        />
        <input
          placeholder="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{ marginRight: 10 }}
        />
        <button onClick={addFood}>Add</button>
      </div>

      {/* 🔹 LIST */}
      {foods.map((food) => (
        <div key={food.id} style={{ marginBottom: 8 }}>
          {food.name} - ₮{food.price}
          <button
            onClick={async () => {
              const newName = prompt("New name:", food.name);
              const newPrice = prompt("New price:", food.price.toString());

              if (!newName || !newPrice) return;

              await supabase
                .from("foods")
                .update({
                  name: newName,
                  price: Number(newPrice),
                })
                .eq("id", food.id);

              await fetchFoods();
            }}
            style={{ marginLeft: 10 }}
          >
            Edit
          </button>
          <button
            onClick={async () => {
              await supabase.from("foods").delete().eq("id", food.id);

              await fetchFoods();
            }}
            style={{ marginLeft: 10 }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
