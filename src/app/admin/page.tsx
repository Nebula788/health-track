// "use client";

// import { useEffect, useState } from "react";
// import { supabase } from "@/lib/supabase";
// import { useRouter } from "next/navigation";

// export default function AdminDashboard() {
//   const [editingFood, setEditingFood] = useState<any>(null);
//   const router = useRouter();

//   const [user, setUser] = useState<any>(null);
//   const [loading, setLoading] = useState(true);

//   const [categories, setCategories] = useState<any[]>([]);
//   const [foods, setFoods] = useState<any[]>([]);

//   const [name, setName] = useState("");
//   const [categoryId, setCategoryId] = useState("");

//   const [calories, setCalories] = useState("");
//   const [protein, setProtein] = useState("");
//   const [carbs, setCarbs] = useState("");
//   const [fat, setFat] = useState("");

//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const updateFood = async () => {
//     if (!editingFood) return;

//     await supabase
//       .from("foods")
//       .update({
//         name: editingFood.name,
//         category_id: editingFood.category_id,
//         calories: Number(editingFood.calories),
//         protein: Number(editingFood.protein),
//         carbs: Number(editingFood.carbs),
//         fat: Number(editingFood.fat),
//       })
//       .eq("id", editingFood.id);

//     setEditingFood(null);
//     await loadFoods();
//   };

//   // INIT
//   useEffect(() => {
//     const init = async () => {
//       const { data: userData } = await supabase.auth.getUser();

//       if (!userData.user) {
//         router.push("/login");
//         return;
//       }

//       // 🔹 PROFILE-ийг DB-ээс авах
//       const { data: profile } = await supabase
//         .from("profiles")
//         .select("role")
//         .eq("id", userData.user.id)
//         .maybeSingle();

//       console.log("User ID:", userData.user.id);
//       console.log("Profile:", profile);

//       // 🔴 Admin биш бол home руу буцаана
//       if (!profile || profile.role !== "admin") {
//         router.push("/");
//         return;
//       }

//       setUser(userData.user);

//       await loadCategories();
//       await loadFoods();

//       setLoading(false);
//     };

//     init();
//   }, []);

//   const loadCategories = async () => {
//     const { data } = await supabase.from("categories").select("*");
//     setCategories(data || []);
//   };

//   const loadFoods = async () => {
//     const { data } = await supabase
//       .from("foods")
//       .select(
//         `
//         id,
//         name,
//         calories,
//         protein,
//         carbs,
//         fat,
//         categories (
//           id,
//           name
//         )
//       `,
//       )
//       .order("created_at", { ascending: false });

//     setFoods(data || []);
//   };

//   const addFood = async () => {
//     if (!name || !categoryId) return;

//     await supabase.from("foods").insert([
//       {
//         name,
//         category_id: categoryId,
//         calories: Number(calories),
//         protein: Number(protein),
//         carbs: Number(carbs),
//         fat: Number(fat),
//       },
//     ]);

//     setName("");
//     setCalories("");
//     setProtein("");
//     setCarbs("");
//     setFat("");

//     await loadFoods();
//   };

//   const deleteFood = async (id: string) => {
//     await supabase.from("foods").delete().eq("id", id);
//     await loadFoods();
//   };

//   const logout = async () => {
//     await supabase.auth.signOut();
//     router.push("/login");
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         Loading dashboard...
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 mt-20 flex">
//       {/* MOBILE OVERLAY */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black/40 z-40 lg:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       {/* SIDEBAR */}
//       <aside
//         className={`
//           fixed lg:static z-50
//           bg-white shadow-lg
//           w-64 h-full
//           transform transition-transform duration-300
//           ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
//           lg:translate-x-0
//         `}
//       >
//         <div className="p-6">
//           <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>

//           <div className="text-sm text-gray-500 mb-6">{user?.email}</div>

//           <button
//             onClick={logout}
//             className="w-full bg-red-500 text-white py-2 rounded"
//           >
//             Logout
//           </button>
//         </div>
//       </aside>

//       {/* MAIN */}
//       <main className="flex-1 p-6 lg:p-10">
//         {/* MOBILE MENU BUTTON */}
//         <button
//           onClick={() => setSidebarOpen(true)}
//           className="lg:hidden mb-6 bg-black text-white px-4 py-2 rounded"
//         >
//           Menu
//         </button>

//         {/* ADD FORM */}
//         <div className="bg-white p-6 rounded-xl shadow mb-10">
//           <h2 className="text-xl font-bold mb-6">
//             Add Nutrition Food (per 100g)
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//             <input
//               placeholder="Food Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="border p-2 rounded"
//             />

//             <select
//               value={categoryId}
//               onChange={(e) => setCategoryId(e.target.value)}
//               className="border p-2 rounded"
//             >
//               <option value="">Select Category</option>
//               {categories.map((cat) => (
//                 <option key={cat.id} value={cat.id}>
//                   {cat.name}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             <input
//               placeholder="Calories"
//               value={calories}
//               onChange={(e) => setCalories(e.target.value)}
//               className="border p-2 rounded"
//             />
//             <input
//               placeholder="Protein"
//               value={protein}
//               onChange={(e) => setProtein(e.target.value)}
//               className="border p-2 rounded"
//             />
//             <input
//               placeholder="Carbs"
//               value={carbs}
//               onChange={(e) => setCarbs(e.target.value)}
//               className="border p-2 rounded"
//             />
//             <input
//               placeholder="Fat"
//               value={fat}
//               onChange={(e) => setFat(e.target.value)}
//               className="border p-2 rounded"
//             />
//           </div>

//           <button
//             onClick={addFood}
//             className="mt-6 bg-black text-white px-6 py-2 rounded"
//           >
//             Add Food
//           </button>
//         </div>

//         {/* CATEGORY TABLES */}
//         {categories.map((cat) => (
//           <div key={cat.id} className="mb-10">
//             <h2 className="text-2xl font-bold mb-4 capitalize">{cat.name}</h2>

//             <div className="bg-white rounded-xl shadow overflow-x-auto">
//               <table className="min-w-175 w-full">
//                 <thead className="bg-gray-50 text-left">
//                   <tr>
//                     <th className="p-4">Name</th>
//                     <th className="p-4">Calories</th>
//                     <th className="p-4">Protein</th>
//                     <th className="p-4">Carbs</th>
//                     <th className="p-4">Fat</th>
//                     <th className="p-4">Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {foods
//                     .filter((f) => f.categories?.id === cat.id)
//                     .map((food) => (
//                       <tr key={food.id} className="border-t">
//                         <td className="p-4">{food.name}</td>
//                         <td className="p-4">{food.calories}</td>
//                         <td className="p-4">{food.protein}g</td>
//                         <td className="p-4">{food.carbs}g</td>
//                         <td className="p-4">{food.fat}g</td>
//                         <td className="p-4">
//                           <button
//                             onClick={() =>
//                               setEditingFood({
//                                 ...food,
//                                 category_id: food.categories?.id,
//                               })
//                             }
//                             className="text-blue-500 mr-4"
//                           >
//                             Edit
//                           </button>
//                           <button
//                             onClick={() => deleteFood(food.id)}
//                             className="text-red-500"
//                           >
//                             Delete
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         ))}
//         {editingFood && (
//           <>
//             {/* Overlay */}
//             <div
//               className="fixed inset-0 bg-black/40 z-50"
//               onClick={() => setEditingFood(null)}
//             />

//             {/* Modal */}
//             <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
//               <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl p-6">
//                 <h2 className="text-xl font-bold mb-6">Edit Food</h2>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                   <input
//                     value={editingFood.name}
//                     onChange={(e) =>
//                       setEditingFood({
//                         ...editingFood,
//                         name: e.target.value,
//                       })
//                     }
//                     className="border p-2 rounded"
//                   />

//                   <select
//                     value={editingFood.category_id}
//                     onChange={(e) =>
//                       setEditingFood({
//                         ...editingFood,
//                         category_id: e.target.value,
//                       })
//                     }
//                     className="border p-2 rounded"
//                   >
//                     {categories.map((cat) => (
//                       <option key={cat.id} value={cat.id}>
//                         {cat.name}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                   <input
//                     value={editingFood.calories}
//                     onChange={(e) =>
//                       setEditingFood({
//                         ...editingFood,
//                         calories: e.target.value,
//                       })
//                     }
//                     className="border p-2 rounded"
//                   />
//                   <input
//                     value={editingFood.protein}
//                     onChange={(e) =>
//                       setEditingFood({
//                         ...editingFood,
//                         protein: e.target.value,
//                       })
//                     }
//                     className="border p-2 rounded"
//                   />
//                   <input
//                     value={editingFood.carbs}
//                     onChange={(e) =>
//                       setEditingFood({
//                         ...editingFood,
//                         carbs: e.target.value,
//                       })
//                     }
//                     className="border p-2 rounded"
//                   />
//                   <input
//                     value={editingFood.fat}
//                     onChange={(e) =>
//                       setEditingFood({
//                         ...editingFood,
//                         fat: e.target.value,
//                       })
//                     }
//                     className="border p-2 rounded"
//                   />
//                 </div>

//                 <div className="flex justify-end gap-4 mt-6">
//                   <button
//                     onClick={() => setEditingFood(null)}
//                     className="px-4 py-2 bg-gray-200 rounded"
//                   >
//                     Cancel
//                   </button>

//                   <button
//                     onClick={updateFood}
//                     className="px-6 py-2 bg-black text-white rounded"
//                   >
//                     Save
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//       </main>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminDashboard() {
  const router = useRouter();

  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const [categories, setCategories] = useState<any[]>([]);
  const [foods, setFoods] = useState<any[]>([]);
  const [editingFood, setEditingFood] = useState<any>(null);

  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [carbs, setCarbs] = useState("");
  const [fat, setFat] = useState("");

  // ================= AUTH CHECK =================
  useEffect(() => {
    const init = async () => {
      const { data: userData } = await supabase.auth.getUser();

      if (!userData.user) {
        router.push("/login");
        return;
      }

      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", userData.user.id)
        .maybeSingle();

      if (!profile || profile.role !== "admin") {
        router.push("/");
        return;
      }

      setUser(userData.user);
      await loadCategories();
      await loadFoods();
      setLoading(false);
    };

    init();
  }, []);

  // ================= LOADERS =================
  const loadCategories = async () => {
    const { data } = await supabase.from("categories").select("*");
    setCategories(data || []);
  };

  const loadFoods = async () => {
    const { data } = await supabase
      .from("foods")
      .select(
        `
        id,
        name,
        calories,
        protein,
        carbs,
        fat,
        categories ( id, name )
      `
      )
      .order("created_at", { ascending: false });

    setFoods(data || []);
  };

  // ================= CRUD =================
  const addFood = async () => {
    if (!name || !categoryId) return;

    await supabase.from("foods").insert([
      {
        name,
        category_id: categoryId,
        calories: Number(calories),
        protein: Number(protein),
        carbs: Number(carbs),
        fat: Number(fat),
      },
    ]);

    setName("");
    setCalories("");
    setProtein("");
    setCarbs("");
    setFat("");

    await loadFoods();
  };

  const deleteFood = async (id: string) => {
    await supabase.from("foods").delete().eq("id", id);
    await loadFoods();
  };

  const updateFood = async () => {
    if (!editingFood) return;

    await supabase
      .from("foods")
      .update({
        name: editingFood.name,
        category_id: editingFood.category_id,
        calories: Number(editingFood.calories),
        protein: Number(editingFood.protein),
        carbs: Number(editingFood.carbs),
        fat: Number(editingFood.fat),
      })
      .eq("id", editingFood.id);

    setEditingFood(null);
    await loadFoods();
  };

  const logout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Loading Admin Panel...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* ================= SIDEBAR ================= */}
      <aside className="w-72 hidden lg:flex flex-col bg-white border-r border-gray-200 shadow-sm">
        <div className="p-8 border-b">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Admin Panel
          </h2>
          <p className="text-sm text-gray-500 mt-2">{user?.email}</p>
        </div>

        <div className="flex-1 p-6 space-y-4 text-sm text-gray-600">
          <div className="font-medium">Dashboard</div>
          <div>Total Foods: {foods.length}</div>
          <div>Total Categories: {categories.length}</div>
        </div>

        <div className="p-6 border-t">
          <button
            onClick={logout}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl transition"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* ================= MAIN ================= */}
      <main className="flex-1 p-8 lg:p-12">

        {/* ADD FOOD CARD */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-8 mb-12">
          <h2 className="text-2xl font-bold mb-8">
            Add Nutrition Food (per 100g)
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <input
              placeholder="Food Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
            />

            <select
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              className="px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <input
              placeholder="Calories"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              className="px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
            />
            <input
              placeholder="Protein"
              value={protein}
              onChange={(e) => setProtein(e.target.value)}
              className="px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
            />
            <input
              placeholder="Carbs"
              value={carbs}
              onChange={(e) => setCarbs(e.target.value)}
              className="px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
            />
            <input
              placeholder="Fat"
              value={fat}
              onChange={(e) => setFat(e.target.value)}
              className="px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <button
            onClick={addFood}
            className="mt-8 px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md hover:shadow-lg transition"
          >
            Add Food
          </button>
        </div>

        {/* CATEGORY TABLES */}
        {categories.map((cat) => (
          <div key={cat.id} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 capitalize text-gray-800">
              {cat.name}
            </h2>

            <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 text-gray-600 text-sm uppercase">
                  <tr>
                    <th className="p-4 text-left">Name</th>
                    <th className="p-4 text-left">Calories</th>
                    <th className="p-4 text-left">Protein</th>
                    <th className="p-4 text-left">Carbs</th>
                    <th className="p-4 text-left">Fat</th>
                    <th className="p-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {foods
                    .filter((f) => f.categories?.id === cat.id)
                    .map((food) => (
                      <tr
                        key={food.id}
                        className="border-t hover:bg-gray-50 transition"
                      >
                        <td className="p-4 font-medium">{food.name}</td>
                        <td className="p-4">{food.calories}</td>
                        <td className="p-4">{food.protein}g</td>
                        <td className="p-4">{food.carbs}g</td>
                        <td className="p-4">{food.fat}g</td>
                        <td className="p-4 flex gap-4">
                          <button
                            onClick={() =>
                              setEditingFood({
                                ...food,
                                category_id: food.categories?.id,
                              })
                            }
                            className="text-blue-600 hover:underline"
                          >
                            Edit
                          </button>

                          <button
                            onClick={() => deleteFood(food.id)}
                            className="text-red-600 hover:underline"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        {/* EDIT MODAL */}
        <AnimatePresence>
          {editingFood && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-6"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-white w-full max-w-xl rounded-3xl shadow-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-8">Edit Food</h2>

                <div className="grid gap-4 mb-6">
                  <input
                    value={editingFood.name}
                    onChange={(e) =>
                      setEditingFood({
                        ...editingFood,
                        name: e.target.value,
                      })
                    }
                    className="px-4 py-3 border rounded-xl"
                  />

                  <select
                    value={editingFood.category_id}
                    onChange={(e) =>
                      setEditingFood({
                        ...editingFood,
                        category_id: e.target.value,
                      })
                    }
                    className="px-4 py-3 border rounded-xl"
                  >
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {["calories", "protein", "carbs", "fat"].map((field) => (
                    <input
                      key={field}
                      value={editingFood[field]}
                      onChange={(e) =>
                        setEditingFood({
                          ...editingFood,
                          [field]: e.target.value,
                        })
                      }
                      className="px-4 py-3 border rounded-xl"
                    />
                  ))}
                </div>

                <div className="flex justify-end gap-4 mt-8">
                  <button
                    onClick={() => setEditingFood(null)}
                    className="px-6 py-2 bg-gray-200 rounded-xl"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={updateFood}
                    className="px-8 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl"
                  >
                    Save
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>
    </div>
  );
}